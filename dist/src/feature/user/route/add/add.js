"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const add_type_1 = require("./add.type");
const password_encrypt_1 = __importDefault(require("feature/user/lib/password-encrypt/password-encrypt"));
const express_validator_1 = require("express-validator");
const user_1 = __importDefault(require("feature/user/model/user/user"));
const authentication_1 = __importDefault(require("plugin/authentication/authentication"));
const { OK, INTERNAL_SERVER_ERROR } = http_status_codes_1.default;
const handler = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = request.body, { passwordConfirm } = _a, restBody = __rest(_a, ["passwordConfirm"]);
        const { firstName, lastName, password, email } = yield new user_1.default(restBody).save();
        response.status(OK).json({ firstName, lastName, password, email });
    }
    catch (e) {
        // TODO: Add custom error handle on base server handler
        response.status(INTERNAL_SERVER_ERROR).json(e);
    }
});
exports.handler = handler;
const passwordValidation = (passwordConfirm, { req }) => {
    if (passwordConfirm !== req.body.password) {
        throw new Error('As senhas não conferem');
    }
    return true;
};
const passwordEncryption = (password) => (0, password_encrypt_1.default)(password);
exports.default = (router) => {
    router.post(add_type_1.AddPath, (0, authentication_1.default)(), (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)(['password', 'firstName', 'lastName']).notEmpty(), (0, express_validator_1.body)('passwordConfirm').custom(passwordValidation), (0, express_validator_1.body)('password').customSanitizer(passwordEncryption), exports.handler);
};
