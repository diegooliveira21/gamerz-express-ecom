import {RequestHandler, Router} from "express";
import StatusCodes from "http-status-codes";
import {ErrorMessage, LoginPath, RequestBody} from "feature/user/route/login/login.type";
import {body} from "express-validator";
import User from "feature/user/model/user/user";
import {compareSync} from "bcrypt";
import jwt from "jsonwebtoken";

const { OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;

export const handler: RequestHandler = async (request, response) => {
    try {
        const payload = request.body as RequestBody

        const user = await User.findOne({ where: { email: payload.email } })
        const passwordValid = compareSync(payload.password, user?.password || '')

        if (!user || !passwordValid)
            return response.status(BAD_REQUEST).json(ErrorMessage.EMAIL_OR_PASSWORD_INVALID)

        const { email, firstName, lastName } = user
        const token = jwt.sign(email, process.env.TOKEN_SECRET as string)

        return response.status(OK).json({
            token,
            email,
            firstName,
            lastName,
        })
    } catch (e) {
        response.status(INTERNAL_SERVER_ERROR).json(e)
    }
}



export default (router: Router) => {
    router.post(
        LoginPath,
        body('email').isEmail(),
        body('password').notEmpty(),
        handler
    )
}
