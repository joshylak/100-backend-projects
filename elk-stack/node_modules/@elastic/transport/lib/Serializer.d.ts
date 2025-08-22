import { kJsonOptions } from './symbols';
export interface SerializerOptions {
    enablePrototypePoisoningProtection?: boolean | 'proto' | 'constructor';
}
export default class Serializer {
    [kJsonOptions]: {
        protoAction: string;
        constructorAction: string;
    };
    constructor(opts?: SerializerOptions);
    /**
     * Serializes a record into a JSON string
     */
    serialize(object: Record<string, any>): string;
    /**
     * Given a string, attempts to parse it from raw JSON into an object
     */
    deserialize<T = unknown>(json: string): T;
    /**
     * Serializes an array of records into an ndjson string
     */
    ndserialize(array: Array<Record<string, any> | string>): string;
    qserialize(object?: Record<string, any> | string): string;
}
