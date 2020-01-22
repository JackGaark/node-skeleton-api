import { Request, Response, NextFunction } from "express";

const logIncomingRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(
    `${req.method} ${req.originalUrl} at ${new Date().toISOString()}`
  );
  next();
};

export const loggerMiddlewares = { logIncomingRequest };
