import { loggerMiddlewares } from "./logger/logger.middlewares";
import { authenticationMiddlewares } from "./security/authentication.middlewares";
import { commonMiddlewares } from "./common/common.middlewares";

export default [
  loggerMiddlewares.logIncomingRequest,
  authenticationMiddlewares.authenticate,
  commonMiddlewares.cors,
  commonMiddlewares.json,
  commonMiddlewares.urlencoded
];
