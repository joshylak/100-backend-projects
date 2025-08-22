"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Inference {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
    }
    async chatCompletionUnified(params, options) {
        var _a;
        const acceptedPath = ['inference_id'];
        const acceptedBody = ['chat_completion_request'];
        const querystring = {};
        // @ts-expect-error
        let body = (_a = params.body) !== null && _a !== void 0 ? _a : undefined;
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                // @ts-expect-error
                body = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_inference/chat_completion/${encodeURIComponent(params.inference_id.toString())}/_stream`;
        const meta = {
            name: 'inference.chat_completion_unified',
            pathParts: {
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async completion(params, options) {
        const acceptedPath = ['inference_id'];
        const acceptedBody = ['input', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_inference/completion/${encodeURIComponent(params.inference_id.toString())}`;
        const meta = {
            name: 'inference.completion',
            pathParts: {
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async delete(params, options) {
        const acceptedPath = ['task_type', 'inference_id'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.task_type != null && params.inference_id != null) {
            method = 'DELETE';
            path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}`;
        }
        else {
            method = 'DELETE';
            path = `/_inference/${encodeURIComponent(params.inference_id.toString())}`;
        }
        const meta = {
            name: 'inference.delete',
            pathParts: {
                task_type: params.task_type,
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async get(params, options) {
        const acceptedPath = ['task_type', 'inference_id'];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.task_type != null && params.inference_id != null) {
            method = 'GET';
            path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}`;
        }
        else if (params.inference_id != null) {
            method = 'GET';
            path = `/_inference/${encodeURIComponent(params.inference_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_inference';
        }
        const meta = {
            name: 'inference.get',
            pathParts: {
                task_type: params.task_type,
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async inference(params, options) {
        const acceptedPath = ['task_type', 'inference_id'];
        const acceptedBody = ['query', 'input', 'input_type', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.task_type != null && params.inference_id != null) {
            method = 'POST';
            path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}`;
        }
        else {
            method = 'POST';
            path = `/_inference/${encodeURIComponent(params.inference_id.toString())}`;
        }
        const meta = {
            name: 'inference.inference',
            pathParts: {
                task_type: params.task_type,
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async put(params, options) {
        var _a;
        const acceptedPath = ['task_type', 'inference_id'];
        const acceptedBody = ['inference_config'];
        const querystring = {};
        // @ts-expect-error
        let body = (_a = params.body) !== null && _a !== void 0 ? _a : undefined;
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                // @ts-expect-error
                body = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.task_type != null && params.inference_id != null) {
            method = 'PUT';
            path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}`;
        }
        else {
            method = 'PUT';
            path = `/_inference/${encodeURIComponent(params.inference_id.toString())}`;
        }
        const meta = {
            name: 'inference.put',
            pathParts: {
                task_type: params.task_type,
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putAlibabacloud(params, options) {
        const acceptedPath = ['task_type', 'alibabacloud_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.alibabacloud_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_alibabacloud',
            pathParts: {
                task_type: params.task_type,
                alibabacloud_inference_id: params.alibabacloud_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putAmazonbedrock(params, options) {
        const acceptedPath = ['task_type', 'amazonbedrock_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.amazonbedrock_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_amazonbedrock',
            pathParts: {
                task_type: params.task_type,
                amazonbedrock_inference_id: params.amazonbedrock_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putAmazonsagemaker(params, options) {
        const acceptedPath = ['task_type', 'amazonsagemaker_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.amazonsagemaker_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_amazonsagemaker',
            pathParts: {
                task_type: params.task_type,
                amazonsagemaker_inference_id: params.amazonsagemaker_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putAnthropic(params, options) {
        const acceptedPath = ['task_type', 'anthropic_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.anthropic_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_anthropic',
            pathParts: {
                task_type: params.task_type,
                anthropic_inference_id: params.anthropic_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putAzureaistudio(params, options) {
        const acceptedPath = ['task_type', 'azureaistudio_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.azureaistudio_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_azureaistudio',
            pathParts: {
                task_type: params.task_type,
                azureaistudio_inference_id: params.azureaistudio_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putAzureopenai(params, options) {
        const acceptedPath = ['task_type', 'azureopenai_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.azureopenai_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_azureopenai',
            pathParts: {
                task_type: params.task_type,
                azureopenai_inference_id: params.azureopenai_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putCohere(params, options) {
        const acceptedPath = ['task_type', 'cohere_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.cohere_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_cohere',
            pathParts: {
                task_type: params.task_type,
                cohere_inference_id: params.cohere_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putCustom(params, options) {
        const acceptedPath = ['task_type', 'custom_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.custom_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_custom',
            pathParts: {
                task_type: params.task_type,
                custom_inference_id: params.custom_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putDeepseek(params, options) {
        const acceptedPath = ['task_type', 'deepseek_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.deepseek_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_deepseek',
            pathParts: {
                task_type: params.task_type,
                deepseek_inference_id: params.deepseek_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putElasticsearch(params, options) {
        const acceptedPath = ['task_type', 'elasticsearch_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.elasticsearch_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_elasticsearch',
            pathParts: {
                task_type: params.task_type,
                elasticsearch_inference_id: params.elasticsearch_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putElser(params, options) {
        const acceptedPath = ['task_type', 'elser_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.elser_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_elser',
            pathParts: {
                task_type: params.task_type,
                elser_inference_id: params.elser_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putGoogleaistudio(params, options) {
        const acceptedPath = ['task_type', 'googleaistudio_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.googleaistudio_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_googleaistudio',
            pathParts: {
                task_type: params.task_type,
                googleaistudio_inference_id: params.googleaistudio_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putGooglevertexai(params, options) {
        const acceptedPath = ['task_type', 'googlevertexai_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.googlevertexai_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_googlevertexai',
            pathParts: {
                task_type: params.task_type,
                googlevertexai_inference_id: params.googlevertexai_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putHuggingFace(params, options) {
        const acceptedPath = ['task_type', 'huggingface_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.huggingface_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_hugging_face',
            pathParts: {
                task_type: params.task_type,
                huggingface_inference_id: params.huggingface_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putJinaai(params, options) {
        const acceptedPath = ['task_type', 'jinaai_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.jinaai_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_jinaai',
            pathParts: {
                task_type: params.task_type,
                jinaai_inference_id: params.jinaai_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putMistral(params, options) {
        const acceptedPath = ['task_type', 'mistral_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.mistral_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_mistral',
            pathParts: {
                task_type: params.task_type,
                mistral_inference_id: params.mistral_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putOpenai(params, options) {
        const acceptedPath = ['task_type', 'openai_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.openai_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_openai',
            pathParts: {
                task_type: params.task_type,
                openai_inference_id: params.openai_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putVoyageai(params, options) {
        const acceptedPath = ['task_type', 'voyageai_inference_id'];
        const acceptedBody = ['chunking_settings', 'service', 'service_settings', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.voyageai_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_voyageai',
            pathParts: {
                task_type: params.task_type,
                voyageai_inference_id: params.voyageai_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putWatsonx(params, options) {
        const acceptedPath = ['task_type', 'watsonx_inference_id'];
        const acceptedBody = ['service', 'service_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.watsonx_inference_id.toString())}`;
        const meta = {
            name: 'inference.put_watsonx',
            pathParts: {
                task_type: params.task_type,
                watsonx_inference_id: params.watsonx_inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async rerank(params, options) {
        const acceptedPath = ['inference_id'];
        const acceptedBody = ['query', 'input', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_inference/rerank/${encodeURIComponent(params.inference_id.toString())}`;
        const meta = {
            name: 'inference.rerank',
            pathParts: {
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async sparseEmbedding(params, options) {
        const acceptedPath = ['inference_id'];
        const acceptedBody = ['input', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_inference/sparse_embedding/${encodeURIComponent(params.inference_id.toString())}`;
        const meta = {
            name: 'inference.sparse_embedding',
            pathParts: {
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async streamCompletion(params, options) {
        const acceptedPath = ['inference_id'];
        const acceptedBody = ['input', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_inference/completion/${encodeURIComponent(params.inference_id.toString())}/_stream`;
        const meta = {
            name: 'inference.stream_completion',
            pathParts: {
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async textEmbedding(params, options) {
        const acceptedPath = ['inference_id'];
        const acceptedBody = ['input', 'task_settings'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_inference/text_embedding/${encodeURIComponent(params.inference_id.toString())}`;
        const meta = {
            name: 'inference.text_embedding',
            pathParts: {
                inference_id: params.inference_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async update(params, options) {
        var _a;
        const acceptedPath = ['inference_id', 'task_type'];
        const acceptedBody = ['inference_config'];
        const querystring = {};
        // @ts-expect-error
        let body = (_a = params.body) !== null && _a !== void 0 ? _a : undefined;
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                // @ts-expect-error
                body = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.task_type != null && params.inference_id != null) {
            method = 'PUT';
            path = `/_inference/${encodeURIComponent(params.task_type.toString())}/${encodeURIComponent(params.inference_id.toString())}/_update`;
        }
        else {
            method = 'PUT';
            path = `/_inference/${encodeURIComponent(params.inference_id.toString())}/_update`;
        }
        const meta = {
            name: 'inference.update',
            pathParts: {
                inference_id: params.inference_id,
                task_type: params.task_type
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Inference;
//# sourceMappingURL=inference.js.map