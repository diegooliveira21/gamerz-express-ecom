import {ValidationChain, validationResult} from "express-validator";
import {NextFunction, Response, Request, RequestHandler} from "express";

export default (validations: ValidationChain[]) => {
    return (async (request: Request, response: Response, next: NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(request)))

        const errors = validationResult(request);
        if (errors.isEmpty())  return next()

        response.status(400).json({ errors: errors.array() })
    }) as RequestHandler
}
