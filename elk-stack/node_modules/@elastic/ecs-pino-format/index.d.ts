import type { LoggerOptions } from "pino";

interface Config {
  /**
   * Whether to convert a logged `err` field to ECS error fields.
   * Default true, to match Pino's default of having an `err` serializer.
   */

  convertErr?: boolean;
  /**
   * Whether to convert logged `req` and `res` HTTP request and response fields
   * to ECS HTTP, User agent, and URL fields. Default false.
   */

  convertReqRes?: boolean;

  /**
   * Whether to automatically integrate with
   * Elastic APM (https://github.com/elastic/apm-agent-nodejs). If a started
   * APM agent is detected, then log records will include the following
   * fields:
   *
   * - "trace.id", "transaction.id", and "span.id" - if there is a current
   *   active trace when the log call is made
   *
   * and also the following fields, if not already specified in this config:
   *
   * - "service.name" - the configured `serviceName` in the agent
   * - "service.version" - the configured `serviceVersion` in the agent
   * - "service.environment" - the configured `environment` in the agent
   * - "service.node.name" - the configured `serviceNodeName` in the agent
   * - "event.dataset" - set to `${serviceName}` for correlation in Kibana
   *
   * Default true.
   */
  apmIntegration?: boolean;

  /** Specify "service.name" field. Defaults to a value from the APM agent, if available. */
  serviceName?: string;
  /** Specify "service.version" field. Defaults to a value from the APM agent, if available. */
  serviceVersion?: string;
  /** Specify "service.environment" field. Defaults to a value from the APM agent, if available. */
  serviceEnvironment?: string;
  /** Specify "service.node.name" field. Defaults to a value from the APM agent, if available. */
  serviceNodeName?: string;
  /** Specify "event.dataset" field. Defaults `${serviceName}`. */
  eventDataset?: string;

}

declare function ecsFormat(config?: Config): LoggerOptions;

export default ecsFormat;
export { ecsFormat }
