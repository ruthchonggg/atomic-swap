"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestFunction = exports.toPathString = exports.serializeDataIfNeeded = exports.setSearchParams = exports.setOAuthToObject = exports.setBearerAuthToObject = exports.setBasicAuthToObject = exports.setApiKeyToObject = exports.assertParamExists = exports.DUMMY_BASE_URL = void 0;
const base_1 = require("./base");
/**
 *
 * @export
 */
exports.DUMMY_BASE_URL = 'https://example.com';
/**
 *
 * @throws {RequiredError}
 * @export
 */
const assertParamExists = function (functionName, paramName, paramValue) {
    if (paramValue === null || paramValue === undefined) {
        throw new base_1.RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
};
exports.assertParamExists = assertParamExists;
/**
 *
 * @export
 */
const setApiKeyToObject = async function (object, keyParamName, configuration) {
    if (configuration && configuration.apiKey) {
        const localVarApiKeyValue = typeof configuration.apiKey === 'function'
            ? await configuration.apiKey(keyParamName)
            : await configuration.apiKey;
        object[keyParamName] = localVarApiKeyValue;
    }
};
exports.setApiKeyToObject = setApiKeyToObject;
/**
 *
 * @export
 */
const setBasicAuthToObject = function (object, configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
};
exports.setBasicAuthToObject = setBasicAuthToObject;
/**
 *
 * @export
 */
const setBearerAuthToObject = async function (object, configuration) {
    if (configuration && configuration.accessToken) {
        const accessToken = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken()
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + accessToken;
    }
};
exports.setBearerAuthToObject = setBearerAuthToObject;
/**
 *
 * @export
 */
const setOAuthToObject = async function (object, name, scopes, configuration) {
    if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken(name, scopes)
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + localVarAccessTokenValue;
    }
};
exports.setOAuthToObject = setOAuthToObject;
function setFlattenedQueryParams(urlSearchParams, parameter, key = "") {
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            parameter.forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
        }
        else {
            Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
        }
    }
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        }
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}
/**
 *
 * @export
 */
const setSearchParams = function (url, ...objects) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
};
exports.setSearchParams = setSearchParams;
/**
 *
 * @export
 */
const serializeDataIfNeeded = function (value, requestOptions, configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
};
exports.serializeDataIfNeeded = serializeDataIfNeeded;
/**
 *
 * @export
 */
const toPathString = function (url) {
    return url.pathname + url.search + url.hash;
};
exports.toPathString = toPathString;
/**
 *
 * @export
 */
const createRequestFunction = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
    return (axios = globalAxios, basePath = BASE_PATH) => {
        const axiosRequestArgs = Object.assign(Object.assign({}, axiosArgs.options), { url: ((configuration === null || configuration === void 0 ? void 0 : configuration.basePath) || basePath) + axiosArgs.url });
        return axios.request(axiosRequestArgs);
    };
};
exports.createRequestFunction = createRequestFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vdHlwZXNjcmlwdC9nZW5lcmF0ZWQvb3BlbmFwaS90eXBlc2NyaXB0LWF4aW9zL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQjs7Ozs7Ozs7OztHQVVHOzs7QUFJSCxpQ0FBb0Q7QUFHcEQ7OztHQUdHO0FBQ1UsUUFBQSxjQUFjLEdBQUcscUJBQXFCLENBQUE7QUFFbkQ7Ozs7R0FJRztBQUNJLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxZQUFvQixFQUFFLFNBQWlCLEVBQUUsVUFBbUI7SUFDbkcsSUFBSSxVQUFVLEtBQUssSUFBSSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7UUFDakQsTUFBTSxJQUFJLG9CQUFhLENBQUMsU0FBUyxFQUFFLHNCQUFzQixTQUFTLHVDQUF1QyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0tBQzdIO0FBQ0wsQ0FBQyxDQUFBO0FBSlksUUFBQSxpQkFBaUIscUJBSTdCO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxLQUFLLFdBQVcsTUFBVyxFQUFFLFlBQW9CLEVBQUUsYUFBNkI7SUFDN0csSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUN2QyxNQUFNLG1CQUFtQixHQUFHLE9BQU8sYUFBYSxDQUFDLE1BQU0sS0FBSyxVQUFVO1lBQ2xFLENBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0tBQzlDO0FBQ0wsQ0FBQyxDQUFBO0FBUFksUUFBQSxpQkFBaUIscUJBTzdCO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxvQkFBb0IsR0FBRyxVQUFV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