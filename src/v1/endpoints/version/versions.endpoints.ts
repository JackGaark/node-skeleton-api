import { Router } from "express";
import { getVersion } from "./versions.controllers";

export const versionEndpoints = Router();

versionEndpoints.get("/", getVersion);
