import express from "express";
import Projects from "../../models/Projects.js";
import logger from "../../loggers.js";
import { checkApiKey } from "../../utils.js";

const postProjectsRouter = express.Router();
postProjectsRouter.use(checkApiKey);

// *ENDPOINT* ====> Add New Project <====
postProjectsRouter.post("/addProject", async (req, res) => {
  try {
    const newProject = new Projects(req.body);
    await newProject.save();
    res.status(201).json(newProject);
    logger.info("New Project added successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add project" });
  }
});

// *ENDPOINT* ====> Delete Project <====
postProjectsRouter.delete("/deleteProject/:name", async (req, res) => {
  const projName = req.params.name;
  logger.info("Request Delete Project with name: " + projName);
  try {
    const project = await Projects.findOneAndDelete({ name: projName });
    if (!project) {
      logger.debug(`Project not found with name: ${projName}`);
      return res.status(404).json({ message: "Project not found" });
    }
    logger.debug(`Project deleted successfully: ${project.name}`);
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    logger.error(`Failed to delete project with name: ${projName}`, error);
    res.status(500).json({ message: "Failed to delete project" });
  }
});

// *ENDPOINT* ====> Update Project <====

postProjectsRouter.patch("/updateProject/:name", async (req, res) => {
  try {
    const projName = req.params.name;
    const { field, content } = req.body;
    if (!field.trim() || !content.trim()) {
      return res.status(400).json({ error: "Field and content are required" });
    }
    if (field === "githubUrl") {
      const regexUrl = /^https?:\/\/github\.com\/\S+/;
      if (!regexUrl.test(content.trim())) {
        logger.debug("Received invalid GitHub URL");
        return res.status(400).json({ error: "Invalid GitHub URL" });
      }
    }
    const update = { [field]: content };
    const updatedProj = await Projects.findOneAndUpdate(
      { name: projName },
      update,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedProj) {
      logger.debug(`Project not found with name: ${projName}`);
      return res.status(404).json({ message: "Project not found" });
    }
    logger.info(`Project field "${field}" updated successfully`);
    res.status(200).json(updatedProj);
  } catch (error) {
    logger.error("Failed to update project", error);
    return res.status(500).json({ message: "Failed to update project" });
  }
});

export default postProjectsRouter;