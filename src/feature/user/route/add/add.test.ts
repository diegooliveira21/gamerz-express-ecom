import StatusCodes from "http-status-codes";
import fetch from 'cross-fetch';
import {randomUUID} from 'crypto'
import {ObjectString} from "shared/type/custom/custom";

const { BAD_REQUEST, OK } = StatusCodes;

const testRequest = ({
    firstName = 'Teste',
    lastName = 'Teste',
    password = 'mudar@123',
    passwordConfirm = 'mudar@123',
    email = `${randomUUID()}@teste.com`,
    toBe = String(BAD_REQUEST),
}: ObjectString = {}) => async () => {
    const response = await fetch('http://localhost:3000/user/add', {
        method: 'POST',
        body: JSON.stringify({
            firstName,
            lastName,
            password,
            passwordConfirm,
            email,
        })
    })

    expect(response.status).toBe(Number(toBe))
}

test('BAD_REQUEST: Invalid email', testRequest({email: ''}))
test('BAD_REQUEST: Empty firstName', testRequest({firstName: ''}))
test('BAD_REQUEST: Empty lastName', testRequest({lastName: ''}))
test('BAD_REQUEST: Empty password', testRequest({password: ''}))
test('BAD_REQUEST: Passwords don\'t match', testRequest({passwordConfirm: '123'}))
test('BAD_REQUEST: Email already registered', testRequest({email: 'teste@teste.com'}))
test('SUCCESS: User registered', testRequest({toBe: String(OK)}))
