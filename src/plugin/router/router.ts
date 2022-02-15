import { Router } from 'express';
import {UserPath} from "feature/user/route/user.type";
import userRouter from "feature/user/route/user.module";

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use(UserPath, userRouter);

// Export default.
export default baseRouter;
