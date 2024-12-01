import { useParams, useLocation } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import githubLogo from "../../assets/cv-icons/githubLogo.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import NotFound from "../404NotFound/404NotFound";
import { useState, useEffect } from "react";
import { fetchUserData } from "../../../API/apiService.js";

export default function ProjectDetails() {
  const [error, setError] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const projectId = useParams().id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUserData(
        `/projectDetails/${projectId}`,
        "projectDetails"
      );
      if (response.error) {
        setError(true);
      } else {
        response.data;
        const data = response.data;
        setProject(data);
        setError(false);
      }
      setLoading(false);
    };
    if (!project) {
      fetchData();
    }
  }, []);

  if (loading) {
    // Loading Screen
    return <div>Loading...</div>;
  }
  if (error) {
    return <NotFound />;
  }

  const isGitHubURL = (url) =>
    typeof url === "string" && url.startsWith("https://github.com");

  const location = useLocation();
  const { projectImg } = location.state || {};

  return (
    <div className={styles.ProjectDetails}>
      <h1 className={styles.name}>{project.name}</h1>
      <div className={styles.projImgContainer}>
        <img className={styles.projectImg} src={projectImg} alt="" />
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
  );
}
