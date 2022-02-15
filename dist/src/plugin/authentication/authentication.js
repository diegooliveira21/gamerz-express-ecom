"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = __importDefault(require("express-jwt"));
function default_1() {
    return (0, express_jwt_1.default)({
        secret: 'hello world !',
        algorithms: ['HS256'],
        credentialsRequired: false,
        getToken: function fromHeaderOrQuerystring({ headers, query }) {
            const { authorization } = headers;
            const { token } = query;
            if ((authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[0]) === 'Bearer')
                return authorization.split(' ')[1];
            else if (token)
                return token;
            return null;
        }
    });
}
exports.default = default_1;
