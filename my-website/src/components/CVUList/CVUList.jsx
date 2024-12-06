import React from "react";
import styles from "./CVUList.module.css";
export default function CVUList({ strList = [] }) {
  return (
    <ul className={styles.list}>
      {strList.map((str, index) => (
        <li key={index + 1}>{str}</li>
      ))}
    </ul>
  );
}
