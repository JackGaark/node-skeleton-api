import { Router } from "express";
import { routerV1 } from "./v1/router";

export const router = Router();

router.use("/v1", routerV1);
