"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactObject = redactObject;
exports.redactDiagnostic = redactDiagnostic;
const secretKeys = [
    'authorization',
    'password',
    'apikey',
    'x-elastic-app-auth'
];
/**
 * Clones an object and recursively loops through all keys, redacting their values if the key matches any of a list of strings.
 * @param obj: Object to clone and redact
 * @param additionalKeys: Extra keys that can be matched for redaction. Does not overwrite the default set.
 */
function redactObject(obj, additionalKeys = []) {
    const toRedact = [...secretKeys, ...additionalKeys].map(key => key.toLowerCase());
    // `seen` stores each Object it sees, so we can prevent infinite recursion due to circular references
    const seen = new Map();
    return doRedact(obj);
    function doRedact(obj) {
        if (typeof obj !== 'object' || obj == null)
            return obj;
        const newObj = {};
        Object.entries(obj).forEach(([key, value]) => {
            // pull auth info out of URL objects
            if (value instanceof URL) {
                value = `${value.origin}${value.pathname}${value.search}`;
            }
            else if (typeof value === 'object' && value !== null) {
                if (Array.isArray(value)) {
                    // if it's an array, redact each item
                    value = value.map(v => doRedact(v));
                }
                else {
                    if (seen.get(value) !== true) {
                        // if this Object hasn't been seen, recursively redact it
                        seen.set(value, true);
                        value = doRedact(value);
                    }
                    else {
                        // if it has been seen, set the value that goes in newObj to null
                        // this is what prevents the circular references
                        value = null;
                    }
                }
            }
            // check if redaction is needed for this key
            if (toRedact.includes(key.toLowerCase())) {
                newObj[key] = '[redacted]';
            }
            else {
                newObj[key] = value;
            }
        });
        return newObj;
    }
}
/**
 * Redacts a DiagnosticResult object using the provided options.
 * - 'off' does nothing
 * - 'remove' removes most optional properties, replaces non-optional properties with the simplest possible alternative
 * - 'replace' runs `redactObject`, which replaces secret keys with `[redacted]`
 */
function redactDiagnostic(diag, options) {
    var _a;
    switch (options.type) {
        case 'off':
            break;
        case 'remove':
            delete diag.headers;
            delete diag.meta.sniff;
            delete diag.meta.request.params.headers;
            diag.meta.request.options = {};
            diag.meta.connection = null;
            break;
        case 'replace':
            diag = redactObject(diag, (_a = options.additionalKeys) !== null && _a !== void 0 ? _a : []);
            break;
    }
    return diag;
}
//# sourceMappingURL=security.js.map