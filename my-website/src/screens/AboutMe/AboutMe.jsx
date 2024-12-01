import React from "react";
import styles from "./AboutMe.module.css";
import Card from "../../components/Card/Card";
import Navigator from "../../components/Navigator/Navigator";
import { useAppContext } from "../../Context/AppContext";
import NotFound from "../404NotFound/404NotFound";
export default function AboutMe() {
  const { user, loading, error } = useAppContext();
  if (error) return <NotFound />;
  if (loading) return null;
  const { goToResume, goToProjects } = Navigator();
  return (
    user && (
      <section className={styles.aboutMe}>
        <div className={styles.splitSection}>
          <div className={styles.left}>
            <div className={styles.cardContainer}>
              <Card />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <h1 className={styles.title}>Hello</h1>
              <p className={styles.description}>Here's who I am & what I do</p>
              <div className={styles.buttons}>
                <button
                  className={`${styles.button} ${styles.primary}`}
                  onClick={goToResume}
                >
                  Resume
                </button>
                <button className={styles.button} onClick={goToProjects}>
                  Projects
                </button>
              </div>
              <p className={styles.description}>{user.description}</p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
