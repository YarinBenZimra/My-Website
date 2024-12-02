import React from "react";
import styles from "./404NotFound.module.css";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>
        Go Back Home
      </Link>
    </div>
  );
}
