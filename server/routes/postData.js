import express from "express";
import User from "../models/User.js";
import Projects from "../models/Projects.js";
import Resume from "../models/Resume.js";
import logger from "../loggers.js";
const postDataRouter = express.Router();

// *ENDPOINT* ====> Add New Project <====
postDataRouter.post("/addProject", async (req, res) => {
  try {
    const newProject = new Projects(req.body);
    await newProject.save();
    res.status(201).json(newProject);
    logger.info("New Project added successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add project" });
  }
});
export default postDataRouter;
