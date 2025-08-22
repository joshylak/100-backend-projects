// Licensed to Elasticsearch B.V. under one or more contributor
// license agreements. See the NOTICE file distributed with
// this work for additional information regarding copyright
// ownership. Elasticsearch B.V. licenses this file to you under
// the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

'use strict'

// Likely HTTP request header names that would include a request ID value,
// drawn from Fastify's [`requestIdHeader`](https://fastify.dev/docs/latest/Reference/Server/#requestidheader)
// default, Restify's defaults (https://github.com/restify/node-restify/blob/9f1d249/lib/plugins/pre/reqIdHeaders.js#L5).
const REQUEST_ID_HEADERS = [
  'request-id',
  'x-request-id'
]

// Write ECS fields for the given HTTP request (expected to be
// `http.IncomingMessage`-y) into the `ecs` object. This returns true iff
// the given `req` was a request object it could process.
function formatHttpRequest (ecs, req) {
  if (req === undefined || req === null || typeof req !== 'object') {
    return false
  }
  if (req.raw && req.raw.req && req.raw.req.httpVersion) {
    // This looks like a hapi request object (https://hapi.dev/api/#request),
    // use the raw Node.js http.IncomingMessage that it references.
    // TODO: Use hapi's already parsed `req.url` for speed.
    req = req.raw.req
  }
  // Use duck-typing to check this is a `http.IncomingMessage`-y object.
  if (!('httpVersion' in req && 'headers' in req && 'method' in req)) {
    return false
  }

  const {
    method,
    headers,
    hostname,
    httpVersion,
    socket
  } = req

  ecs.http = ecs.http || {}
  ecs.http.version = httpVersion
  ecs.http.request = ecs.http.request || {}
  ecs.http.request.method = method

  // Express can strip leading parts of `req.url` during routing, so we must use
  // https://expressjs.com/en/4x/api.html#req.originalUrl if available.
  // Fastify docs (https://fastify.dev/docs/latest/Reference/Request/) imply
  // that it might mutate `req.url` during routing as well.
  const url = req.originalUrl || req.url

  ecs.url = ecs.url || {}
  ecs.url.full = (socket && socket.encrypted ? 'https://' : 'http://') + headers.host + url
  const hasQuery = url.indexOf('?')
  const hasAnchor = url.indexOf('#')
  if (hasQuery > -1 && hasAnchor > -1) {
    ecs.url.path = url.slice(0, hasQuery)
    ecs.url.query = url.slice(hasQuery + 1, hasAnchor)
    ecs.url.fragment = url.slice(hasAnchor + 1)
  } else if (hasQuery > -1) {
    ecs.url.path = url.slice(0, hasQuery)
    ecs.url.query = url.slice(hasQuery + 1)
  } else if (hasAnchor > -1) {
    ecs.url.path = url.slice(0, hasAnchor)
    ecs.url.fragment = url.slice(hasAnchor + 1)
  } else {
    ecs.url.path = url
  }

  if (hostname) {
    const [host, port] = hostname.split(':')
    ecs.url.domain = host
    // istanbul ignore next
    if (port) {
      ecs.url.port = Number(port)
    }
  }

  // https://www.elastic.co/guide/en/ecs/current/ecs-client.html
  ecs.client = ecs.client || {}
  let ip
  if (req.ip) {
    // Express provides req.ip that may handle X-Forward-For processing.
    // https://expressjs.com/en/5x/api.html#req.ip
    ip = req.ip
  } else if (socket && socket.remoteAddress) {
    ip = socket.remoteAddress
  }
  if (ip) {
    ecs.client.ip = ecs.client.address = ip
  }
  if (socket) {
    ecs.client.port = socket.remotePort
  }

  const hasHeaders = Object.keys(headers).length > 0
  if (hasHeaders === true) {
    // See https://github.com/elastic/ecs/issues/232 for discussion of
    // specifying headers in ECS.
    ecs.http.request.headers = Object.assign(ecs.http.request.headers || {}, headers)
    const cLen = Number(headers['content-length'])
    if (!isNaN(cLen)) {
      ecs.http.request.body = ecs.http.request.body || {}
      ecs.http.request.body.bytes = cLen
    }
    if (headers['user-agent']) {
      ecs.user_agent = ecs.user_agent || {}
      ecs.user_agent.original = headers['user-agent']
    }
  }

  // Attempt to set `http.request.id` field from well-known web framework APIs
  // or from some likely headers.
  // Note: I'm not sure whether to include Hapi's `request.info.id` generated
  // value (https://hapi.dev/api/?v=21.3.2#-requestinfo). IIUC it does NOT
  // consider an incoming header.
  let id = null
  switch (typeof (req.id)) {
    case 'string':
      // Fastify https://fastify.dev/docs/latest/Reference/Request/, also
      // Express if using https://www.npmjs.com/package/express-request-id.
      id = req.id
      break
    case 'number':
      id = req.id.toString()
      break
    case 'function':
      // Restify http://restify.com/docs/request-api/#id
      id = req.id()
      break
  }
  if (!id && hasHeaders) {
    for (let i = 0; i < REQUEST_ID_HEADERS.length; i++) {
      const k = REQUEST_ID_HEADERS[i]
      if (headers[k]) {
        id = headers[k]
        break
      }
    }
  }
  if (id) {
    ecs.http.request.id = id
  }

  return true
}

// Write ECS fields for the given HTTP response (expected to be
// `http.ServiceResponse`-y) into the `ecs` object. This returns true iff
// the given `res` was a response object it could process.
function formatHttpResponse (ecs, res) {
  if (res === undefined || res === null || typeof res !== 'object') {
    return false
  }
  if (res.raw && res.raw.res && typeof (res.raw.res.getHeaders) === 'function') {
    // This looks like a hapi request object (https://hapi.dev/api/#request),
    // use the raw Node.js http.ServerResponse that it references.
    res = res.raw.res
  }
  // Use duck-typing to check this is a `http.ServerResponse`-y object.
  if (!('statusCode' in res && typeof res.getHeaders === 'function')) {
    return false
  }

  const { statusCode } = res
  ecs.http = ecs.http || {}
  ecs.http.response = ecs.http.response || {}
  ecs.http.response.status_code = statusCode

  const headers = res.getHeaders()
  const hasHeaders = Object.keys(headers).length > 0
  if (hasHeaders === true) {
    // See https://github.com/elastic/ecs/issues/232 for discussion of
    // specifying headers in ECS.
    ecs.http.response.headers = Object.assign(ecs.http.response.headers || {}, headers)
    const cLen = Number(headers['content-length'])
    if (!isNaN(cLen)) {
      ecs.http.response.body = ecs.http.response.body || {}
      ecs.http.response.body.bytes = cLen
    }
  }

  return true
}

module.exports = { formatHttpRequest, formatHttpResponse }
