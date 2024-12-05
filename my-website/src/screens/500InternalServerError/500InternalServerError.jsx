import React from "react";
import styles from "./500InternalServerError.module.css";
import errorImage from "../../../src/assets/internal-server-error-icons/errorImage.png";
export default function InternalServerError() {
  return (
    <div className={styles.InternalServerError}>
      <h1>Internal Server Error</h1>
      <img src={errorImage} alt={"Not Found"} />
      <p>Oops! Something went wrong, please try again later</p>
    </div>
  );
}
