"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_module_1 = __importDefault(require("shared/lib/route/router-module/router-module"));
const add_1 = __importDefault(require("feature/user/route/add/add"));
const userRouter = (0, router_module_1.default)([add_1.default]);
exports.default = userRouter;
