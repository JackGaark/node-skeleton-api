import cors from "cors";
import parser from "body-parser";

export const commonMiddlewares = {
  cors: cors(),
  json: parser.json(),
  urlencoded: parser.urlencoded({ extended: true })
};
