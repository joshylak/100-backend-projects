<img align="right" width="auto" height="auto" src="https://www.elastic.co/static-res/images/elastic-logo-200.png">

# @elastic/ecs-pino-format

[![npm](https://img.shields.io/npm/v/@elastic/ecs-pino-format.svg)](https://www.npmjs.com/package/@elastic/ecs-pino-format)
[![test](https://github.com/elastic/ecs-logging-nodejs/actions/workflows/test.yml/badge.svg)](https://github.com/elastic/ecs-logging-nodejs/actions/workflows/test.yml)

This Node.js package provides a formatter for the [pino](https://getpino.io/)
logger compatible with [Elastic Common Schema (ECS) logging](https://www.elastic.co/guide/en/ecs/current/index.html).
In combination with the [filebeat](https://www.elastic.co/products/beats/filebeat)
shipper, you can send your logs directly to Elasticsearch and leverage
[Kibana's Logs app](https://www.elastic.co/guide/en/observability/current/monitor-logs.html)
to inspect all logs in one single place.

`pino` 6.x, 7.x, and 8.x versions are supported.

Please see the [Node.js ECS pino documentation](https://www.elastic.co/guide/en/ecs-logging/nodejs/current/pino.html).


## Install

```sh
npm install @elastic/ecs-pino-format
```

## Usage

This package will configure Pino's `formatters`, `messageKey` and `timestamp` options.

```js
const { ecsFormat } = require('@elastic/ecs-pino-format')
const pino = require('pino')

const log = pino(ecsFormat(/* options */))
log.info('Hello world')

const child = log.child({ module: 'foo' })
child.warn('From child')
```

Running this will produce log output similar to the following:

```sh
{"log.level":"info","@timestamp":"2023-10-16T18:08:02.601Z","process.pid":74325,"host.hostname":"pink.local","ecs.version":"8.10.0","message":"Hello world"}
{"log.level":"warn","@timestamp":"2023-10-16T18:08:02.602Z","process.pid":74325,"host.hostname":"pink.local","ecs.version":"8.10.0","module":"foo","message":"From child"}
```

Please see the [Node.js ECS pino documentation](https://www.elastic.co/guide/en/ecs-logging/nodejs/current/pino.html) for more.

## License

This software is licensed under the [Apache 2 license](./LICENSE).
