import React from "react";
import styles from "./CVUList.module.css";
export default function CVUList(props = []) {
  return (
    <ul className={styles.projects}>
      {props.projects.map((project) => {
        return <li key={project.id}>{project.description}</li>;
      })}
    </ul>
  );
}
