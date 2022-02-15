"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
function default_1(passwordPlain) {
    let passwordEncrypted = '';
    bcrypt_1.default.hash(passwordPlain, 10, (error, hash) => {
        if (error)
            throw error;
        passwordEncrypted = hash;
    });
    return passwordEncrypted;
}
exports.default = default_1;
