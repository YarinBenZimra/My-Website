const validKey = process.env.API_KEY;
import { postLogger } from "./loggers.js";
export const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({ error: "API key is missing" });
  }
  if (apiKey !== validKey) {
    return res.status(403).json({ error: "Invalid API key" });
  }
  next();
};

export const postRequest = (req, res, next) => {
  postLogger.warn(
    "Incoming request | method: " + req.method + ", url: " + req.url
  );
  next();
};
