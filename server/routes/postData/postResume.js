import express from "express";
import Resume from "../../models/Resume.js";
import { postLogger } from "../../loggers.js";
import { checkApiKey } from "../../utils.js";
import { postRequest } from "../../utils.js";

const postResumeRouter = express.Router();
postResumeRouter.use(checkApiKey);
postResumeRouter.use(postRequest);

// *ENDPOINT* ====> Add New Resume <====
postResumeRouter.post("/addSection", async (req, res) => {
  try {
    const newSection = new Resume(req.body);
    await newSection.save();
    res.status(201).json(newSection);
    postLogger.info("New section added successfully to the resume");
  } catch (error) {
    res.status(500).json({ error: "Failed to add section" });
  }
});

// *ENDPOINT* ====> Delete Section in Resume <====
postResumeRouter.delete("/deleteSection/:name", async (req, res) => {
  const sectionName = req.params.name;
  postLogger.info("Request Delete section with name: " + sectionName);
  try {
    const section = await Resume.findOneAndDelete({ title: sectionName });
    if (!section) {
      postLogger.debug(`Section not found with name: ${sectionName}`);
      return res.status(404).json({ message: "Section not found" });
    }
    postLogger.debug(`Section deleted successfully: ${section.name}`);
    res.json({ message: "Section deleted successfully" });
  } catch (error) {
    postLogger.error(
      `Failed to delete section with name: ${sectionName}`,
      error
    );
    res.status(500).json({ message: "Failed to delete section" });
  }
});

// *ENDPOINT* ====> Update Resume <====

postResumeRouter.patch("/updateSection/:name", async (req, res) => {
  try {
    const sectionName = req.params.name;
    const { field, content } = req.body;
    if (!field.trim() || !content.trim()) {
      return res.status(400).json({ error: "Field and content are required" });
    }
    if (field === "direction") {
      if (content !== "column" || content !== "row") {
        return res
          .status(400)
          .json({ error: "Invalid direction. Use 'column' or 'row'" });
      }
    }
    const update = { [field]: content };
    const updatedSection = await Resume.findOneAndUpdate(
      { name: sectionName },
      update,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedSection) {
      postLogger.debug(`Section not found with name: ${sectionName}`);
      return res.status(404).json({ message: "Section not found" });
    }
    postLogger.info(`Section field "${field}" updated successfully`);
    res.status(200).json(updatedSection);
  } catch (error) {
    postLogger.error("Failed to update section", error);
    return res.status(500).json({ message: "Failed to update section" });
  }
});

export default postResumeRouter;
