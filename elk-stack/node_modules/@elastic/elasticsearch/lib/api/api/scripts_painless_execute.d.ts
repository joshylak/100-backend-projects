import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
/**
  * Run a script. Runs a script and returns a result. Use this API to build and test scripts, such as when defining a script for a runtime field. This API requires very few dependencies and is especially useful if you don't have permissions to write documents on a cluster. The API uses several _contexts_, which control how scripts are run, what variables are available at runtime, and what the return type is. Each context requires a script, but additional parameters depend on the context you're using for that script.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/painless/8.19/painless-execute-api.html | Elasticsearch API documentation}
  */
export default function ScriptsPainlessExecuteApi<TResult = unknown>(this: That, params?: T.ScriptsPainlessExecuteRequest | TB.ScriptsPainlessExecuteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ScriptsPainlessExecuteResponse<TResult>>;
export default function ScriptsPainlessExecuteApi<TResult = unknown>(this: That, params?: T.ScriptsPainlessExecuteRequest | TB.ScriptsPainlessExecuteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ScriptsPainlessExecuteResponse<TResult>, unknown>>;
export default function ScriptsPainlessExecuteApi<TResult = unknown>(this: That, params?: T.ScriptsPainlessExecuteRequest | TB.ScriptsPainlessExecuteRequest, options?: TransportRequestOptions): Promise<T.ScriptsPainlessExecuteResponse<TResult>>;
export {};
