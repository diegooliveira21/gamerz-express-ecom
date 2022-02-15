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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add5k = void 0;
const user_1 = __importDefault(require("feature/user/model/user/user"));
function add5k() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (let i = 0; i < 5000; i++) {
                const user = new user_1.default({
                    firstName: `Agenor${i}`,
                    email: `teste${i}@teste.com`,
                    lastName: `Girundino`,
                    password: `teste@${i}`,
                });
                yield user.save();
            }
            console.info('5k Users added!');
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.add5k = add5k;
