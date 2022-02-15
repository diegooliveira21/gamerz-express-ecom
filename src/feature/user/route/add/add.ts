import StatusCodes from "http-status-codes";
import {RequestHandler, Router} from "express";
import {AddPath, ErrorMessage, RequestBody} from "./add.type";
import passwordEncrypt from "feature/user/lib/password-encrypt/password-encrypt";
import {body, CustomSanitizer, CustomValidator} from "express-validator";
import User from "feature/user/model/user/user";
import validation from "shared/middleware/validation/validation";

const { OK, BAD_REQUEST } = StatusCodes;

export const handler: RequestHandler = async (request, response) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { passwordConfirm, ...restBody } = request.body as RequestBody

        const { firstName, lastName, password, email } = await new User(restBody).save()

        response.status(OK).json({firstName, lastName, password, email})
    } catch (e) {
        response.status(BAD_REQUEST).json(e)
    }
}



const passwordValidation: CustomValidator = (passwordConfirm, { req }) => {
    if (passwordConfirm !== req.body.password) {
        throw new Error(ErrorMessage.PASSWORDS_DONT_MATCH);
    }

    return true;
}

const passwordEncryption: CustomSanitizer = (password: string) => passwordEncrypt(password)

export default (router: Router) => {
    router.post(
        AddPath,
        validation([
            body('email').isEmail(),
            body(['password', 'firstName', 'lastName']).exists({ checkFalsy: true }),
            body('passwordConfirm').custom(passwordValidation),
            body('password').customSanitizer(passwordEncryption),
        ]),
        handler
    )
}
