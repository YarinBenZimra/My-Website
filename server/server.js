import "./config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import getDataRouter from "./routes/getData/userData.js";
import postProjectsRouter from "./routes/postData/postProjects.js";
import postUserRouter from "./routes/postData/postUser.js";
import postResumeRouter from "./routes/postData/postResume.js";
import logger from "./loggers.js";

const app = express();
const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  logger.error("Mongo_API_KEY is undefined ");
} else {
  logger.info("Mongo_API_KEY loaded successfully");
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use("/api/user", getDataRouter);
app.use("/api/post/projects", postProjectsRouter);
app.use("/api/post/user", postUserRouter);
app.use("/api/post/resume", postResumeRouter);
app.use((req, res, next) => {
  logger.info(
    `Incoming request | resource: ${req.url.split("?")[0]} | HTTP Verb ${
      req.method
    }`
  );
  next();
});

// *ENDPOINT* ====> Health Check Endpoint <====
app.get("/", (req, res) => {
  logger.info("Server's Health: OK");
  res.status(200).json({ message: "Server is running" });
});

// *ENDPOINT* ====> Start the server <====
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});

// *ENDPOINT* ====> Endpoint Not Found <====
app.use("*", (req, res) => {
  logger.warn(`Endpoint not found: [${req.method} ${req.url}]`);
  res
    .status(404)
    .json({ error: `Endpoint not found: [${req.method} ${req.url}]` });
});

// *ENDPOINT* ====> Force Stop <====
process.on("SIGINT", () => {
  logger.warn("Server is shutting down due to SIGINT...");
  process.exit();
});
