import React from "react";
import styles from "./Card.module.css";
import linkdinLogo from "../../assets/linkdinLogo.png";
import githubLogo from "../../assets/githubLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import { useAppContext } from "../../Context/AppContext.jsx";
export default function Card() {
  const { user, userError } = useAppContext();
  if (!user && !userError) return null; // Loading Screen TODO
  if (!user && userError) return null; // Error
  return (
    user &&
    !userError && (
      <div className={styles.card}>
        <img className={styles.image} src={user.image} alt="Profile Picture" />
        <h2 className={styles.firstName}>{user.firstName}</h2>
        <h2 className={styles.lastName}>{user.lastName}</h2>
        <div className={styles.line} />
        <p className={styles.description}>{user.role}</p>
        <div className={styles.footer}>
          <div className={styles.imgsContainer}>
            <a
              href={user.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkdinLogo} alt="LinkedIn Logo" />
            </a>
            <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Logo" />
            </a>
            <a
              href={user.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="Facebook Logo" />
            </a>
          </div>
        </div>
      </div>
    )
  );
}
