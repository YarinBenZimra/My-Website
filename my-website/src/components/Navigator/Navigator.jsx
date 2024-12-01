import { useNavigate } from "react-router-dom";

export default function Navigator() {
  const navigate = useNavigate();
  const goToResume = () => navigate("/resume");
  const goToProjects = () => navigate("/projects");
  const goToAbout = () => navigate("/about");
  const goToProjectDetails = (id, image) =>
    navigate(`/projects/${id}`, { state: { projectImg: image } });
  return { goToResume, goToProjects, goToAbout, goToProjectDetails };
}
