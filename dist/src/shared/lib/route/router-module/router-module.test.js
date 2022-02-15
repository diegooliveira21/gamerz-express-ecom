"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_module_1 = __importDefault(require("./router-module"));
const add_1 = __importDefault(require("feature/user/route/add/add"));
const express_1 = require("express");
test('router-module: contain route constructor', () => {
    const userModule = (0, router_module_1.default)([add_1.default]).route;
    const mockModule = (0, express_1.Router)().route;
    expect(Object.is(userModule, mockModule)).toBe(true);
});
