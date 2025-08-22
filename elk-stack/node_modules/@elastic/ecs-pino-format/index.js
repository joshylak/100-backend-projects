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

const {
  version,
  formatError,
  formatHttpRequest,
  formatHttpResponse
} = require('@elastic/ecs-helpers')

let triedElasticApmImport = false
let elasticApm = null

/**
 * Create options for `pino(...)` that configure it for ecs-logging output.
 *
 * @param {Config} [opts] - See index.d.ts.
 */
function ecsFormat (opts) {
  // istanbul ignore next
  opts = opts || {}
  const convertErr = opts.convertErr != null ? opts.convertErr : true
  const convertReqRes = opts.convertReqRes != null ? opts.convertReqRes : false
  const apmIntegration = opts.apmIntegration != null ? opts.apmIntegration : true

  let apm = null
  if (apmIntegration) {
    // istanbul ignore if
    if (opts && opts._elasticApm) {
      // `opts._elasticApm` is an internal/testing-only option to be used
      // for testing in the APM agent where the import is a local path
      // rather than "elastic-apm-node".
      elasticApm = opts._elasticApm
    } else if (!triedElasticApmImport) {
      triedElasticApmImport = true
      // We lazily require this module here instead of at the top-level to
      // avoid a possible circular-require if the user code does
      // `require('@elastic/ecs-pino-format')` and has a "node_modules/"
      // where 'elastic-apm-node' shares the same ecs-pino-format install.
      try {
        elasticApm = require('elastic-apm-node')
      } catch (ex) {
        // Silently ignore.
      }
    }
    if (elasticApm && elasticApm.isStarted && elasticApm.isStarted()) {
      apm = elasticApm
    }
  }

  let serviceName = opts.serviceName
  if (serviceName == null && apm) {
    // istanbul ignore next
    serviceName = (apm.getServiceName
      ? apm.getServiceName() // added in elastic-apm-node@3.11.0
      : apm._conf.serviceName) // fallback to private `_conf`
  }

  let serviceVersion = opts.serviceVersion
  // istanbul ignore next
  if (serviceVersion == null && apm) {
    serviceVersion = (apm.getServiceVersion
      ? apm.getServiceVersion() // added in elastic-apm-node@...
      : apm._conf.serviceVersion) // fallback to private `_conf`
  }

  let serviceEnvironment = opts.serviceEnvironment
  if (serviceEnvironment == null && apm) {
    // istanbul ignore next
    serviceEnvironment = (apm.getServiceEnvironment
      ? apm.getServiceEnvironment() // added in elastic-apm-node@...
      : apm._conf.environment) // fallback to private `_conf`
  }

  let serviceNodeName = opts.serviceNodeName
  if (serviceNodeName == null && apm) {
    // istanbul ignore next
    serviceNodeName = (apm.getServiceNodeName
      ? apm.getServiceNodeName() // added in elastic-apm-node@...
      : apm._conf.serviceNodeName) // fallback to private `_conf`
  }

  let eventDataset = opts.eventDataset
  if (eventDataset == null && serviceName) {
    eventDataset = serviceName
  }

  let wasBindingsCalled = false
  function addStaticEcsBindings (obj) {
    obj['ecs.version'] = version
    if (serviceName) { obj['service.name'] = serviceName }
    if (serviceVersion) { obj['service.version'] = serviceVersion }
    if (serviceEnvironment) { obj['service.environment'] = serviceEnvironment }
    if (serviceNodeName) { obj['service.node.name'] = serviceNodeName }
    if (eventDataset) { obj['event.dataset'] = eventDataset }
  }

  const ecsPinoOptions = {
    messageKey: 'message',
    timestamp: () => `,"@timestamp":"${new Date().toISOString()}"`,
    formatters: {
      level (label, number) {
        return { 'log.level': label }
      },

      bindings (bindings) {
        const {
          // `pid` and `hostname` are default bindings, unless overriden by
          // a `base: {...}` passed to logger creation.
          pid,
          hostname,
          // name is defined if `log = pino({name: 'my name', ...})`
          name,
          ...ecsBindings
        } = bindings

        if (pid !== undefined) {
          // https://www.elastic.co/guide/en/ecs/current/ecs-process.html#field-process-pid
          ecsBindings['process.pid'] = pid
        }
        if (hostname !== undefined) {
          // https://www.elastic.co/guide/en/ecs/current/ecs-host.html#field-host-hostname
          ecsBindings['host.hostname'] = hostname
        }
        if (name !== undefined) {
          // https://www.elastic.co/guide/en/ecs/current/ecs-log.html#field-log-logger
          ecsBindings['log.logger'] = name
        }

        // With `pino({base: null, ...})` the `formatters.bindings` is *not*
        // called. In this case we need to make sure to add our static bindings
        // in `log()` below.
        wasBindingsCalled = true
        addStaticEcsBindings(ecsBindings)

        return ecsBindings
      },

      log (obj) {
        const {
          req,
          res,
          err,
          ...ecsObj
        } = obj

        if (!wasBindingsCalled) {
          addStaticEcsBindings(ecsObj)
        }

        if (apm) {
          // https://www.elastic.co/guide/en/ecs/current/ecs-tracing.html
          const tx = apm.currentTransaction
          if (tx) {
            ecsObj['trace.id'] = tx.traceId
            ecsObj['transaction.id'] = tx.id
            const span = apm.currentSpan
            // istanbul ignore else
            if (span) {
              ecsObj['span.id'] = span.id
            }
          }
        }

        // https://www.elastic.co/guide/en/ecs/current/ecs-http.html
        if (err !== undefined) {
          if (!convertErr) {
            ecsObj.err = err
          } else {
            formatError(ecsObj, err)
          }
        }

        // https://www.elastic.co/guide/en/ecs/current/ecs-http.html
        if (req !== undefined) {
          if (!convertReqRes) {
            ecsObj.req = req
          } else {
            formatHttpRequest(ecsObj, req)
          }
        }
        if (res !== undefined) {
          if (!convertReqRes) {
            ecsObj.res = res
          } else {
            formatHttpResponse(ecsObj, res)
          }
        }

        return ecsObj
      }
    }
  }

  return ecsPinoOptions
}

// Exports to support the following import-styles from JS and TS code:
// 1. `const { ecsFormat } = require('@elastic/ecs-pino-format)` in JS and TS.
//    The preferred import style for JS code using CommonJS.
// 2. `import { ecsFormat } from '@elastic/ecs-pino-format'` in JS and TS.
//    ES module (ESM) import style. This is the preferred style for TypeScript
//    code and for JS developers using ESM.
// 3. `const ecsFormat = require('@elastic/ecs-pino-format')` in JS.
//    The old, deprecated import method. Still supported for backward compat.
// 4. `import ecsFormat from '@elastic/ecs-pino-format'` in JS and TS.
//    This works, but is deprecated. Prefer #2 style.
// 5. `import * as EcsPinoFormat from '@elastic/ecs-pino-format'` in TS.
//    One must then use `EcsPinoFormat.ecsFormat()`.
module.exports = ecsFormat // Required to support style 3.
module.exports.ecsFormat = ecsFormat
module.exports.default = ecsFormat // Required to support style 4.
