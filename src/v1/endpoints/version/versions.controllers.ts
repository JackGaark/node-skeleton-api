import { Request, Response } from "express";
import { versionUtils } from "../../../shared/utils/version/versions.utils";

export const getVersion = (req: Request, res: Response) => {
  const version = versionUtils.getPackageJSONVersion();
  res.status(200).json(version);
};
