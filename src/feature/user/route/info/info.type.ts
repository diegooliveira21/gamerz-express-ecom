import User from "feature/user/model/user/user";

export const InfoPath = '/info'

export type RequestBody = { userEmail: User['email'] }

export enum ErrorMessage {
    USER_NOT_FOUND = 'Usuário não encontrado'
}
