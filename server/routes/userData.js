import express from "express";
import axios from "axios";
import {
  userDetails,
  resumeData,
  myProjects,
  projectsDetails,
} from "../staticData.js";
import logger from "../loggers.js";
const router = express.Router();

// *ENDPOINT* ====> Get User Details <====
router.get("/details", (req, res) => {
  logger.info("in details");
  logger.debug("Fetching user details...");
  return res.status(200).json(userDetails);
});

// *ENDPOINT* ====> Get User Resume <====
router.get("/resume", (req, res) => {
  logger.info("in resume");
  logger.debug("Fetching resume...");
  return res.status(200).json(resumeData);
});

// *ENDPOINT* ====> Get User Projects <====
router.get("/projects", (req, res) => {
  logger.info("in projects");
  logger.debug("Fetching projects...");
  return res.status(200).json(myProjects);
});

// *ENDPOINT* ====> Get Project Details <====
router.get("/projectDetails/:id", (req, res) => {
  logger.info("in project details");
  const id = parseInt(req.params.id);
  logger.debug(`Fetching project with the ID: "${id}"...`);
  const project = projectsDetails.find((p) => p.id === id);
  if (project) {
    logger.debug(`Success to fetch the project`);
    return res.status(200).json(project);
  }
  logger.debug(`Project with the ID: "${id}" was not found`);
  return res.status(404).json({ message: "Project was not found" });
});

// *ENDPOINT* ====> Endpoint in /api/user Not Found <====
router.all("*", (req, res) => {
  logger.warn("route in /api/user not found");
  const error = "Route not found";
  res.status(404).json({
    error: error,
  });
});

export default router;
