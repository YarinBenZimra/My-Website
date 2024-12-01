import styles from "./CVHeadlineSection.module.css";
export default function CVHeadlineSection(props) {
  return (
    <div className={styles.headline}>
      <hr className={styles.line} />
      <h2 className={styles.headlineTxt}>{props.title}</h2>
      <hr className={`${styles.line} ${styles.rightLine}`} />
    </div>
  );
}
