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
const json = {
  name: "NEAR SYNONYMS",
  image:
    "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets…",
  description:
    "This is a comprehensive project simulating the functionality of a social networking platform. The application includes features like user and fan page management, status updates, and relationships, built with advanced C++ principles including STL, inheritance, polymorphism, and file handling.",
  githubUrl: "https://github.com/NearSynonyms/NearSynonymsProject",
  video:
    "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets…",
  images: [
    "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets…",

    "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets…",

    "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets…",

    "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets…",
  ],
};
