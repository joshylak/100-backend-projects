import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Tasks {
    transport: Transport;
    constructor(transport: Transport);
    /**
      * Cancel a task. WARNING: The task management API is new and should still be considered a beta feature. The API may change in ways that are not backwards compatible. A task may continue to run for some time after it has been cancelled because it may not be able to safely stop its current activity straight away. It is also possible that Elasticsearch must complete its work on other tasks before it can process the cancellation. The get task information API will continue to list these cancelled tasks until they complete. The cancelled flag in the response indicates that the cancellation command has been processed and the task will stop as soon as possible. To troubleshoot why a cancelled task does not complete promptly, use the get task information API with the `?detailed` parameter to identify the other tasks the system is running. You can also use the node hot threads API to obtain detailed information about the work the system is doing instead of completing the cancelled task.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/tasks.html | Elasticsearch API documentation}
      */
    cancel(this: That, params?: T.TasksCancelRequest | TB.TasksCancelRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TasksCancelResponse>;
    cancel(this: That, params?: T.TasksCancelRequest | TB.TasksCancelRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TasksCancelResponse, unknown>>;
    cancel(this: That, params?: T.TasksCancelRequest | TB.TasksCancelRequest, options?: TransportRequestOptions): Promise<T.TasksCancelResponse>;
    /**
      * Get task information. Get information about a task currently running in the cluster. WARNING: The task management API is new and should still be considered a beta feature. The API may change in ways that are not backwards compatible. If the task identifier is not found, a 404 response code indicates that there are no resources that match the request.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/tasks.html | Elasticsearch API documentation}
      */
    get(this: That, params: T.TasksGetRequest | TB.TasksGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TasksGetResponse>;
    get(this: That, params: T.TasksGetRequest | TB.TasksGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TasksGetResponse, unknown>>;
    get(this: That, params: T.TasksGetRequest | TB.TasksGetRequest, options?: TransportRequestOptions): Promise<T.TasksGetResponse>;
    /**
      * Get all tasks. Get information about the tasks currently running on one or more nodes in the cluster. WARNING: The task management API is new and should still be considered a beta feature. The API may change in ways that are not backwards compatible. **Identifying running tasks** The `X-Opaque-Id header`, when provided on the HTTP request header, is going to be returned as a header in the response as well as in the headers field for in the task information. This enables you to track certain calls or associate certain tasks with the client that started them. For example: ``` curl -i -H "X-Opaque-Id: 123456" "http://localhost:9200/_tasks?group_by=parents" ``` The API returns the following result: ``` HTTP/1.1 200 OK X-Opaque-Id: 123456 content-type: application/json; charset=UTF-8 content-length: 831 { "tasks" : { "u5lcZHqcQhu-rUoFaqDphA:45" : { "node" : "u5lcZHqcQhu-rUoFaqDphA", "id" : 45, "type" : "transport", "action" : "cluster:monitor/tasks/lists", "start_time_in_millis" : 1513823752749, "running_time_in_nanos" : 293139, "cancellable" : false, "headers" : { "X-Opaque-Id" : "123456" }, "children" : [ { "node" : "u5lcZHqcQhu-rUoFaqDphA", "id" : 46, "type" : "direct", "action" : "cluster:monitor/tasks/lists[n]", "start_time_in_millis" : 1513823752750, "running_time_in_nanos" : 92133, "cancellable" : false, "parent_task_id" : "u5lcZHqcQhu-rUoFaqDphA:45", "headers" : { "X-Opaque-Id" : "123456" } } ] } } } ``` In this example, `X-Opaque-Id: 123456` is the ID as a part of the response header. The `X-Opaque-Id` in the task `headers` is the ID for the task that was initiated by the REST request. The `X-Opaque-Id` in the children `headers` is the child task of the task that was initiated by the REST request.
      * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.19/tasks.html | Elasticsearch API documentation}
      */
    list(this: That, params?: T.TasksListRequest | TB.TasksListRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TasksListResponse>;
    list(this: That, params?: T.TasksListRequest | TB.TasksListRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TasksListResponse, unknown>>;
    list(this: That, params?: T.TasksListRequest | TB.TasksListRequest, options?: TransportRequestOptions): Promise<T.TasksListResponse>;
}
export {};
