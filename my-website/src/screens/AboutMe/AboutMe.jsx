import React from "react";
import styles from "./AboutMe.module.css";
import Card from "../../components/Card/Card";
import Navigator from "../../components/Navigator/Navigator";
import { useAppContext } from "../../Context/AppContext";
import NotFound from "../404NotFound/404NotFound";
import InternalServerError from "../500InternalServerError/500InternalServerError";
import { useInView } from "react-intersection-observer";
import Loading from "../Loading/Loading";
export default function AboutMe() {
  const { goToResume, goToProjects } = Navigator();
  const { user, userError, isNetworkError } = useAppContext();
  const [cardRef, cardInView] = useInView({ triggerOnce: true });
  const [rightContentRef, rightContentInView] = useInView({
    triggerOnce: true,
  });
  if (isNetworkError) return <InternalServerError />;
  if (!user && !userError) return <Loading />;
  if (!user && userError) return <NotFound />;
  return (
    user &&
    !userError && (
      <section className={styles.aboutMe}>
        <div className={styles.splitSection}>
          <div className={styles.left}>
            <div
              className={`${styles.cardContainer} ${
                cardInView ? styles.visible : ""
              }`}
              ref={cardRef}
            >
              <Card />
            </div>
          </div>
          <div className={styles.right}>
            <div
              className={`${styles.rightContent}  ${
                rightContentInView && styles.visible
              }`}
              ref={rightContentRef}
            >
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
              <p className={styles.aboutMeDescription}>
                {user.aboutMeDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
