import {DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import {sequelize} from "plugin/database/database";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare firstName: string
    declare lastName: string
    declare email: string
    declare password: string
}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
})

export default User

