import express from "express";
import User from "../../models/User.js";
import Projects from "../../models/Projects.js";
import Resume from "../../models/Resume.js";
import Website from "../../models/Website.js";
import logger from "../../loggers.js";

const getDataRouter = express.Router();
const mapProjects = (projects) => {
  return projects.map((project) => ({
    id: project._id,
    name: project.name,
    image: project.image,
  }));
};
// *ENDPOINT* ====> Get Website Details <====
getDataRouter.get("/website", async (req, res) => {
  logger.info("in website");
  try {
    logger.debug("Fetching website details...");
    const websiteDetails = await Website.findOne();
    logger.debug("Success fetch website details...");
    logger.debug(websiteDetails);
    return res.status(200).json(websiteDetails);
  } catch (error) {
    logger.error("Failed to fetch website details", error);
    res.status(500).json({ error: "Failed to fetch website details" });
  }
});

// *ENDPOINT* ====> Get User Details <====
getDataRouter.get("/details", async (req, res) => {
  logger.info("in details");
  try {
    logger.debug("Fetching user details...");
    const userDetails = await User.findOne();
    logger.debug("Success fetch user details...");
    return res.status(200).json(userDetails);
  } catch (error) {
    logger.error("Failed to fetch user details", error);
    res.status(500).json({ error: "Failed to fetch user details" });
  }
});

// *ENDPOINT* ====> Get User Resume <====
getDataRouter.get("/resume", async (req, res) => {
  logger.info("in resume");
  try {
    logger.debug("Fetching resume...");
    const resumeData = await Resume.find();
    logger.debug("Successfully fetched resume");
    if (!resumeData) {
      return res.status(200).json([]);
    }
    return res.status(200).json(resumeData);
  } catch (error) {
    logger.error("Failed to fetch resume details", error);
    res.status(500).json({ error: "Failed to fetch resume" });
  }
});

// *ENDPOINT* ====> Get User Projects <====
getDataRouter.get("/projects", async (req, res) => {
  logger.info("in projects");
  try {
    logger.debug("Fetching projects...");
    const projects = await Projects.find();
    logger.debug("Successfully fetched projects");
    const mappedProjects = mapProjects(projects);
    return res.status(200).json(mappedProjects);
  } catch (error) {
    logger.error("Failed to fetch projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// *ENDPOINT* ====> Get Project Details <====
getDataRouter.get("/projectDetails/:name", async (req, res) => {
  try {
    const projectName = req.params.name;
    logger.info("in project details for project " + projectName);
    logger.debug(`Fetching project with the name: "${projectName}"...`);
    const project = await Projects.findOne({
      name: { $regex: new RegExp(projectName, "i") },
    });
    if (!project) {
      logger.debug(`Project "${projectName}" not found`);
      return res.status(404).json({
        message: `Project with the name "${projectName}" was not found`,
      });
    }
    logger.debug(`Successfully fetched the project: ${project.name}`);
    return res.status(200).json(project);
  } catch (error) {
    logger.error(`Failed to fetch the project ${projectName}: `, error);
    return res
      .status(500)
      .json({ message: `Failed to fetch the project ${projectName}` });
  }
});

// *ENDPOINT* ====> Endpoint in /api/user Not Found <====
getDataRouter.all("*", (req, res) => {
  logger.warn("route in /api/user not found");
  const error = "Route not found";
  res.status(404).json({
    error: error,
  });
});

export default getDataRouter;
