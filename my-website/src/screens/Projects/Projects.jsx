import React from "react";
import styles from "./Projects.module.css";
import Navigator from "../../components/Navigator/Navigator";
import comingSoon from "../../assets/projects-images/comingSoon.jpg";
import { useEffect } from "react";
import NotFound from "../404NotFound/404NotFound";
import { useAppContext } from "../../Context/AppContext";
export default function Projects() {
  const { projects, fetchProjects, loading, error } = useAppContext();
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects, projects]);

  if (loading) {
    // Loading Screen
    return <div>Loading...</div>;
  }
  if (error) {
    return <NotFound />;
  }
  const { goToProjectDetails } = Navigator();

  return (
    projects && (
      <div className={styles.projects}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => goToProjectDetails(project.id, project.image)}
            >
              <img
                src={project.image}
                alt={project.name}
                className={styles.image}
              />
              <h3 className={styles.title}>{project.name}</h3>
            </div>
          ))}
          <div className={styles.card} key={projects.length + 1}>
            <img
              src={comingSoon}
              alt={"Coming Soon"}
              className={styles.image}
            />
            <h3 className={styles.title}>Coming Soon</h3>
          </div>
        </div>
      </div>
    )
  );
}
