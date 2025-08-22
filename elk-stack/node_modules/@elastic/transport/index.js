/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

const { default: Diagnostic, events } = require('./lib/Diagnostic')
const Transport = require('./lib/Transport').default
const {
  BaseConnection,
  HttpConnection,
  UndiciConnection
} = require('./lib/connection')
const {
  BaseConnectionPool,
  ClusterConnectionPool,
  CloudConnectionPool,
  WeightedConnectionPool
} = require('./lib/pool')
const Serializer = require('./lib/Serializer').default
const errors = require('./lib/errors')

module.exports = {
  Diagnostic,
  Transport,
  BaseConnection,
  HttpConnection,
  UndiciConnection,
  BaseConnectionPool,
  ClusterConnectionPool,
  CloudConnectionPool,
  WeightedConnectionPool,
  Serializer,
  errors,
  events
}
