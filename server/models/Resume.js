import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  title: String,
  direction: String,
  items: [
    {
      years: String,
      title: String,
      description: [String],
      descriptionType: String,
      resumeFile: String,
    },
  ],
});

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
