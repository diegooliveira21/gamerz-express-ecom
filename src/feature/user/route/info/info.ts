import {RequestHandler, Router} from "express";
import StatusCodes from "http-status-codes";
import User from "feature/user/model/user/user";
import {ErrorMessage, InfoPath, RequestBody} from "feature/user/route/info/info.type";
import authentication from "shared/middleware/authentication/authentication";

const { OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;

export const handler: RequestHandler = async (request, response) => {
    try {
        const { userEmail } = request.body as RequestBody

        const user = await User.findOne({ where: { email: userEmail } })

        if (!user) return response.status(BAD_REQUEST).json(ErrorMessage.USER_NOT_FOUND)

        const { email, firstName, lastName } = user
        return response.status(OK).json({
            email,
            firstName,
            lastName,
        })
    } catch (e) {
        response.status(INTERNAL_SERVER_ERROR).json(e)
    }
}



export default (router: Router) => {
    router.get(
        InfoPath,
        authentication,
        handler
    )
}
