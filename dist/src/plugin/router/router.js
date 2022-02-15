"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_type_1 = require("feature/user/route/user.type");
const user_module_1 = __importDefault(require("feature/user/route/user.module"));
// Export the base-router
const baseRouter = (0, express_1.Router)();
// Setup routers
baseRouter.use(user_type_1.UserPath, user_module_1.default);
// Export default.
exports.default = baseRouter;
