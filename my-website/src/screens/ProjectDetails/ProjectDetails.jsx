import { useParams } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import githubLogo from "../../assets/cv-icons/githubLogo.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import NotFound from "../404NotFound/404NotFound";
import { useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";

export default function ProjectDetails() {
  const projectName = useParams().name;

  const { projectsDetails, fetchProject, projectsDetailsError } =
    useAppContext();
  useEffect(() => {
    if (!projectsDetails[projectName]) {
      fetchProject(projectName);
    }
  }, [fetchProject]);

  if (!projectsDetails[projectName] && !projectsDetailsError[projectName]) {
    // Loading Screen
    return <div>Loading...</div>;
  }
  if (!projectsDetails[projectName] && projectsDetailsError[projectName]) {
    return <NotFound />;
  }

  const project = projectsDetails[projectName];
  const isGitHubURL = (url) =>
    typeof url === "string" && url.startsWith("https://github.com");
  return (
    projectsDetails[projectName] &&
    !projectsDetailsError[projectName] && (
      <div className={styles.ProjectDetails}>
        <h1 className={styles.name}>{project.name}</h1>
        <div className={styles.projImgContainer}>
          <img className={styles.projectImg} src={project.image} alt="" />
        </div>
        <h2 className={styles.description}>{project.description}</h2>

        {project.video && (
          <div className={styles.videoContainer}>
            <video controls className={styles.video}>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <PhotoProvider>
            <div className={styles.imagesGrid}>
              {project.images.map((image, index) => (
                <PhotoView className={styles.image} key={index} src={image}>
                  <img
                    className={styles.image}
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                  />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        )}

        {isGitHubURL(project.githubURL) && (
          <a
            href={project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <img src={githubLogo} alt="GitHub" />
            View on GitHub
          </a>
        )}
      </div>
    )
  );
}
