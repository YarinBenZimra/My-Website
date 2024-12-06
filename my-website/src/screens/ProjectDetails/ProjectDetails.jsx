import { useParams } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import githubLogo from "../../assets/cv-icons/githubLogo.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import NotFound from "../404NotFound/404NotFound";
import { useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import InternalServerError from "../500InternalServerError/500InternalServerError";
import { useInView } from "react-intersection-observer";
import Loading from "../Loading/Loading";
export default function ProjectDetails() {
  const projectName = useParams().name;
  const {
    projectsDetails,
    fetchProject,
    projectsDetailsError,
    isNetworkError,
  } = useAppContext();
  const [nameRef, nameInView] = useInView({ triggerOnce: true });
  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: true,
  });
  const [projImgContainerRef, projImgContainerInView] = useInView({
    triggerOnce: true,
  });
  const [videoContainerRef, videoContainerInView] = useInView({
    triggerOnce: true,
  });
  const [imagesGridRef, imagesGridInView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!projectsDetails[projectName]) {
      fetchProject(projectName);
    }
  }, [fetchProject]);

  if (isNetworkError) return <InternalServerError />;
  if (!projectsDetails[projectName] && !projectsDetailsError[projectName]) {
    return <Loading />;
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
        <h1
          className={`${styles.name} ${nameInView ? styles.visible : ""}`}
          ref={nameRef}
        >
          {project.name}
        </h1>
        <div
          className={`${styles.projImgContainer} ${
            projImgContainerInView ? styles.visible : ""
          }`}
          ref={projImgContainerRef}
        >
          <img className={styles.projectImg} src={project.image} alt="" />
        </div>
        <h2
          className={`${styles.description} ${
            descriptionInView ? styles.visible : ""
          }`}
          ref={descriptionRef}
        >
          {project.description}
        </h2>

        {project.video && (
          <div
            className={`${styles.videoContainer} ${
              videoContainerInView ? styles.visible : ""
            }`}
            ref={videoContainerRef}
          >
            <video controls className={styles.video}>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <PhotoProvider>
            <div
              className={`${styles.imagesGrid} ${
                imagesGridInView ? styles.visible : ""
              }`}
              ref={imagesGridRef}
            >
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
