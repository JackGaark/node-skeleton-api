import express from "express";
import { router } from "./router";

export const app = express();

app.disable("x-powered-by");

app.use("/", router);
