import routerModule from "./router-module";
import add from "feature/user/route/add/add";
import {Router} from "express";

test('router-module: contain route constructor', () => {
    const userModule = routerModule([add]).route
    const mockModule = Router().route

    expect(Object.is(userModule, mockModule)).toBe(true)
})
