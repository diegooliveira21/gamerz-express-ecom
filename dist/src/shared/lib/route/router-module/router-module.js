"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
function routerModule(routes) {
    const router = (0, express_1.Router)();
    routes.forEach(route => route(router));
    return router;
}
exports.default = routerModule;
