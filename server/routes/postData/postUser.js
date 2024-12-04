import express from "express";
import User from "../../models/User.js";
import logger from "../../loggers.js";
import { checkApiKey } from "../../utils.js";

const postUserRouter = express.Router();
postUserRouter.use(checkApiKey);

// *ENDPOINT* ====> Add New User <====
postUserRouter.post("/addUser", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
    logger.info("New User added successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// *ENDPOINT* ====> Delete User <====
postUserRouter.delete("/deleteUser/:id", async (req, res) => {
  const userId = req.params.id;
  logger.info("Request delete user with ID: " + userId);
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      logger.debug(`User not found with ID: ${userId}`);
      return res.status(404).json({ message: "User not found" });
    }
    logger.debug(
      `User deleted successfully: ${user.firstName} ${user.lastName}`
    );
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    logger.error(`Failed to delete User with ID: ${userId}`, error);
    res.status(500).json({ message: "Failed to delete User" });
  }
});

// *ENDPOINT* ====> Update User <====
postUserRouter.patch("/updateUser/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { field, content } = req.body;

    if (!field.trim() || !content.trim()) {
      return res.status(400).json({ error: "Field and content are required" });
    }

    if (
      field === "linkedinUrl" ||
      field === "githubUrl" ||
      field === "facebookUrl"
    ) {
      const regexUrl = /^https?:\/\/(github|linkedin|facebook)\.com\/\S+/;
      if (!regexUrl.test(content.trim())) {
        logger.debug("Received invalid URL");
        return res.status(400).json({ error: "Invalid URL" });
      }
    }

    if (field === "email") {
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regexEmail.test(content.trim())) {
        logger.debug("Received invalid email");
        return res.status(400).json({ error: "Invalid email" });
      }
    }

    const update = { [field]: content };

    const updatedUser = await User.findByIdAndUpdate(userId, update, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      logger.debug(`User not found with ID: ${userId}`);
      return res.status(404).json({ message: "User not found" });
    }

    logger.info(
      `User with the name: ${updatedUser.firstName} ${updatedUser.lastName} field "${field}" updated successfully`
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    logger.error("Failed to update user", error);
    return res.status(500).json({ message: "Failed to update user" });
  }
});

export default postUserRouter;
