import { Router } from "express";
import { versionEndpoints } from "./endpoints/version/versions.endpoints";
import middlewares from "./middlewares/";

export const routerV1 = Router();

middlewares.forEach(middleware => routerV1.use(middleware));

routerV1.use("/version", versionEndpoints);
