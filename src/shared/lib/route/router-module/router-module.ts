import {Router} from "express";

export default function routerModule(routes: ((router: Router) => void)[]): Router {
    const router = Router()
    routes.forEach(route => route(router))

    return router
}
