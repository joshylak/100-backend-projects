"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_querystring_1 = require("node:querystring");
const debug_1 = tslib_1.__importDefault(require("debug"));
const secure_json_parse_1 = tslib_1.__importDefault(require("secure-json-parse"));
const errors_1 = require("./errors");
const symbols_1 = require("./symbols");
const debug = (0, debug_1.default)('elasticsearch');
class Serializer {
    constructor(opts = {}) {
        var _b;
        Object.defineProperty(this, _a, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const enabled = (_b = opts.enablePrototypePoisoningProtection) !== null && _b !== void 0 ? _b : false;
        this[symbols_1.kJsonOptions] = {
            protoAction: enabled === true || enabled === 'proto' ? 'error' : 'ignore',
            constructorAction: enabled === true || enabled === 'constructor' ? 'error' : 'ignore'
        };
    }
    /**
     * Serializes a record into a JSON string
     */
    serialize(object) {
        debug('Serializing', object);
        let json;
        try {
            json = JSON.stringify(object);
        }
        catch (err) {
            throw new errors_1.SerializationError(err.message, object);
        }
        return json;
    }
    /**
     * Given a string, attempts to parse it from raw JSON into an object
     */
    deserialize(json) {
        debug('Deserializing', json);
        let object;
        try {
            // @ts-expect-error
            object = secure_json_parse_1.default.parse(json, this[symbols_1.kJsonOptions]);
        }
        catch (err) {
            throw new errors_1.DeserializationError(err.message, json);
        }
        return object;
    }
    /**
     * Serializes an array of records into an ndjson string
     */
    ndserialize(array) {
        debug('ndserialize', array);
        if (!Array.isArray(array)) {
            throw new errors_1.SerializationError('The argument provided is not an array', array);
        }
        let ndjson = '';
        for (let i = 0, len = array.length; i < len; i++) {
            if (typeof array[i] === 'string') {
                ndjson += array[i] + '\n'; // eslint-disable-line
            }
            else {
                // @ts-expect-error
                ndjson += this.serialize(array[i]) + '\n'; // eslint-disable-line
            }
        }
        return ndjson;
    }
    qserialize(object) {
        debug('qserialize', object);
        if (object == null)
            return '';
        if (typeof object === 'string')
            return object;
        // arrays should be serialized as comma separated list
        const keys = Object.keys(object);
        for (let i = 0, len = keys.length; i < len; i++) {
            const key = keys[i];
            // elasticsearch will complain for keys without a value
            if (object[key] === undefined) {
                delete object[key]; // eslint-disable-line
            }
            else if (Array.isArray(object[key])) {
                object[key] = object[key].join(',');
            }
        }
        return (0, node_querystring_1.stringify)(object);
    }
}
_a = symbols_1.kJsonOptions;
exports.default = Serializer;
//# sourceMappingURL=Serializer.js.map