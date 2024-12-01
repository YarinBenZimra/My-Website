import React from "react";
import styles from "./MainHeader.module.css";
import logo from "../../assets/bLogo.jpg";
import { useAppContext } from "../../Context/AppContext.jsx";
export default function MainHeader() {
  const { user, loading, error } = useAppContext();
  if (loading) return null; // Loading Screen TODO
  if (error) return null; // Error
  return (
    user && (
      <header className={styles.header}>
        <div className={styles.leftSideHeader}>
          <a href={"/about"}>
            <img className={styles.logo} src={logo} alt="Logo" />
          </a>
          <div className={styles.nameAndRole}>
            <p className={styles.myName}>
              {user.firstName} {user.lastName}
            </p>
            <p>/</p>
            <p className={styles.myRole}>{user.role}</p>
          </div>
        </div>
        <nav className={styles.headerRight}>
          <a href="/about" className={styles.navLink}>
            ABOUT ME
          </a>
          <a href="/resume" className={styles.navLink}>
            RESUME
          </a>
          <a href="/projects" className={styles.navLink}>
            PROJECTS
          </a>
          <a href="/contact" className={styles.navLink}>
            CONTACT
          </a>
        </nav>
      </header>
    )
  );
}
