import React from "react";
import styles from "./MainHeader.module.css";
import logo from "../../assets/bLogo.jpg";
import { useAppContext } from "../../Context/AppContext.jsx";
import { Link } from "react-router-dom";
export default function MainHeader() {
  const { user, userError } = useAppContext();
  if (!user && !userError) return null; // Loading Screen TODO
  if (!user && userError) return null; // Error
  return (
    user &&
    !userError && (
      <header className={styles.header}>
        <div className={styles.leftSideHeader}>
          <Link to="/about">
            <img className={styles.logo} src={logo} alt="Logo" />
          </Link>
          <div className={styles.nameAndRole}>
            <p className={styles.myName}>
              {user.firstName} {user.lastName}
            </p>
            <p className={styles.myRole}>{user.role}</p>
          </div>
        </div>
        <nav className={styles.headerRight}>
          <Link to="/about" className={styles.navLink}>
            ABOUT ME
          </Link>
          <Link to="/resume" className={styles.navLink}>
            RESUME
          </Link>
          <Link to="/projects" className={styles.navLink}>
            PROJECTS
          </Link>
          <Link to="/contact" className={styles.navLink}>
            CONTACT
          </Link>
        </nav>
      </header>
    )
  );
}
