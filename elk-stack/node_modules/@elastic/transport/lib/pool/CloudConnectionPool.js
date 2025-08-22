"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseConnectionPool_1 = tslib_1.__importDefault(require("./BaseConnectionPool"));
class CloudConnectionPool extends BaseConnectionPool_1.default {
    constructor(opts) {
        super(opts);
        Object.defineProperty(this, "cloudConnection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cloudConnection = null;
    }
    /**
     * Returns the only cloud connection.
     *
     * @returns {object} connection
     */
    getConnection(opts) {
        return this.cloudConnection;
    }
    /**
     * Empties the connection pool.
     *
     * @returns {ConnectionPool}
     */
    async empty() {
        await super.empty();
        this.cloudConnection = null;
    }
    /**
     * Update the ConnectionPool with new connections.
     *
     * @param {array} array of connections
     * @returns {ConnectionPool}
     */
    update(connections) {
        super.update(connections);
        this.cloudConnection = this.connections[0];
        return this;
    }
}
exports.default = CloudConnectionPool;
//# sourceMappingURL=CloudConnectionPool.js.map