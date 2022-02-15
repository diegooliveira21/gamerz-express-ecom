import User from "feature/user/model/user/user";

export const AddPath = '/add'

export type RequestBody = Pick<User, 'lastName'|'firstName'|'password'|'email'> & {
    passwordConfirm: string
}

export enum ErrorMessage {
    PASSWORDS_DONT_MATCH = 'As senhas não conferem'
}
