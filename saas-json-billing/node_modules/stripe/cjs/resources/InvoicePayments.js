"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePayments = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.InvoicePayments = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoice_payments/{invoice_payment}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoice_payments',
        methodType: 'list',
    }),
});
