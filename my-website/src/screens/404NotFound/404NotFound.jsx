import React from "react";
import styles from "./404NotFound.module.css";
import { Link } from "react-router-dom";
import notFoundImage from "../../../src/assets/not-found-icon/404.png";
export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>Page Not Found</h1>
      <img src={notFoundImage} alt={"Not Found"} />
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>
        Go Back Home
      </Link>
    </div>
  );
}
