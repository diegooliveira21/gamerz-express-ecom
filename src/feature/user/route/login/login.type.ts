import User from "feature/user/model/user/user";

export const LoginPath = '/login'

export type RequestBody = Pick<User, 'email'|'password'>

export enum ErrorMessage {
    EMAIL_OR_PASSWORD_INVALID = 'Email ou senha não conferem'
}
