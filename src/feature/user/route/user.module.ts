import routerModule from "shared/lib/route/router-module/router-module";
import add from "feature/user/route/add/add";
import login from "feature/user/route/login/login";
import info from "feature/user/route/info/info";

const userRouter = routerModule([add, login, info])

export default userRouter

