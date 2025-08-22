import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Get the cluster health. Get a report with the health status of an Elasticsearch cluster. The report contains a list of indicators that compose Elasticsearch functionality. Each indicator has a health status of: green, unknown, yellow or red. The indicator will provide an explanation and metadata describing the reason for its current health status. The cluster’s status is controlled by the worst indicator status. In the event that an indicator’s status is non-green, a list of impacts may be present in the indicator result which detail the functionalities that are negatively affected by the health issue. Each impact carries with it a severity level, an area of the system that is affected, and a simple description of the impact on the system. Some health indicators can determine the root cause of a health problem and prescribe a set of steps that can be performed in order to improve the health of the system. The root cause and remediation steps are encapsulated in a diagnosis. A diagnosis contains a cause detailing a root cause analysis, an action containing a brief description of the steps to take to fix the problem, the list of affected resources (if applicable), and a detailed step-by-step troubleshooting guide to fix the diagnosed problem. NOTE: The health indicators perform root cause analysis of non-green health statuses. This can be computationally expensive when called frequently. When setting up automated polling of the API for health status, set verbose to false to disable the more expensive analysis logic.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/health-api.html | Elasticsearch API documentation}
  */
export default function HealthReportApi(this: That, params?: T.HealthReportRequest | TB.HealthReportRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.HealthReportResponse>;
export default function HealthReportApi(this: That, params?: T.HealthReportRequest | TB.HealthReportRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.HealthReportResponse, unknown>>;
export default function HealthReportApi(this: That, params?: T.HealthReportRequest | TB.HealthReportRequest, options?: TransportRequestOptions): Promise<T.HealthReportResponse>;
export {};
