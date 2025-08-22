"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = void 0;
const node_events_1 = require("node:events");
const errors_1 = require("./errors");
var events;
(function (events) {
    events["RESPONSE"] = "response";
    events["REQUEST"] = "request";
    events["SNIFF"] = "sniff";
    events["RESURRECT"] = "resurrect";
    events["SERIALIZATION"] = "serialization";
    events["DESERIALIZATION"] = "deserialization";
})(events || (exports.events = events = {}));
class Diagnostic extends node_events_1.EventEmitter {
    on(event, listener) {
        assertSupportedEvent(event);
        super.on(event, listener);
        return this;
    }
    once(event, listener) {
        assertSupportedEvent(event);
        super.once(event, listener);
        return this;
    }
    off(event, listener) {
        assertSupportedEvent(event);
        super.off(event, listener);
        return this;
    }
}
exports.default = Diagnostic;
function assertSupportedEvent(event) {
    if (!supportedEvents.includes(event)) {
        throw new errors_1.ConfigurationError(`The event '${event}' is not supported.`);
    }
}
// @ts-expect-error
const supportedEvents = Object.keys(events).map(key => events[key]);
//# sourceMappingURL=Diagnostic.js.map