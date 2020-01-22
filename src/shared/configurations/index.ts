import dotenv from "dotenv";

dotenv.config();

export const configurations = {
  port: process.env.PORT,
  apiKey: process.env.API_KEY
};
