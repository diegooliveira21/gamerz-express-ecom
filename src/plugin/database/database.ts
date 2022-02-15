import {Sequelize} from "sequelize";
import {ObjectString} from "shared/type/custom/custom";

const {
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PORT,
    POSTGRES_PASSWORD,
    POSTGRES_DATABASE_NAME,
} = process.env as ObjectString

export const sequelize = new Sequelize(POSTGRES_DATABASE_NAME, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_HOST,
    dialect: 'postgres',
    port: Number(POSTGRES_PORT),
});
