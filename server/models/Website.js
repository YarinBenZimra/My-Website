import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  mainColor: String,
  secondaryColor: String,
  logo: String,
});
const Website = mongoose.model("Website", websiteSchema);
export default Website;
