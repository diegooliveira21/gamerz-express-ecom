"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PORT, POSTGRES_PASSWORD, POSTGRES_DATABASE_NAME, } = process.env;
exports.sequelize = new sequelize_1.Sequelize(POSTGRES_DATABASE_NAME, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_HOST,
    dialect: 'postgres',
    port: Number(POSTGRES_PORT),
});
