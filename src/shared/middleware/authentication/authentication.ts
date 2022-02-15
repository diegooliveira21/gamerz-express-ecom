import {RequestHandler} from "express";
import {verify} from 'jsonwebtoken';
import StatusCodes from "http-status-codes";

const { UNAUTHORIZED, FORBIDDEN } = StatusCodes;

export default ((request, response, next) => {
    const authorization = request.headers['authorization']
    const token = authorization && authorization.split(' ')[1]

    if (!token) return response.sendStatus(UNAUTHORIZED)

    verify(token, process.env.TOKEN_SECRET as string, (error, user) => {
        console.error(error)
        if (error) return response.sendStatus(FORBIDDEN)

        request.body.userEmail = user
        next()
    })
}) as RequestHandler
