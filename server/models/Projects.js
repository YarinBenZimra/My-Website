import mongoose from "mongoose";
const projectsSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  image: String,
  description: String,
  githubUrl: String,
  video: String,
  images: [String],
});

const Projects = mongoose.model("Projects", projectsSchema);
export default Projects;
