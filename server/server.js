import express from "express";
import cors from "cors";
import router from "./routes/userData.js";
import logger from "./loggers.js";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/user", router);

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
