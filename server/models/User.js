import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  id: String,
  role: String,
  image: String,
  phone: String,
  email: String,
  address: String,
  aboutMeDescription: String,
  resumeUrl: String,
  linkedinUrl: String,
  githubUrl: String,
  facebookUrl: String,
  sendEmailUrl: String,
});
const User = mongoose.model("User", userSchema);
export default User;
