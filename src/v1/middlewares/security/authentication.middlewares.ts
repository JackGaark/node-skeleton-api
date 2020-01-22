import { Request, Response, NextFunction } from "express";
import { configurations } from "../../../shared/configurations/";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  if (
    req.headers["api-key"] &&
    req.headers["api-key"] === configurations.apiKey
  )
    next();
  else res.status(401).end();
};

export const authenticationMiddlewares = { authenticate };
