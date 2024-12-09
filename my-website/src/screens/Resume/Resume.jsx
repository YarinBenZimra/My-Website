import styles from "./Resume.module.css";
import CVHeader from "../../components/CVHeader/CVHeader";
import CVYearTitleDescriptionType from "../../components/CVYearTitleDescription/CVYearTitleDescription";
import NotFound from "../404NotFound/404NotFound";
import { useAppContext } from "../../Context/AppContext";
import { useEffect } from "react";
import InternalServerError from "../500InternalServerError/500InternalServerError";
import { useInView } from "react-intersection-observer";
import Loading from "../Loading/Loading";
function Resume() {
  const { user, resume, fetchResume, resumeError, isNetworkError } =
    useAppContext();
  const [buttonRef, buttonInView] = useInView({ triggerOnce: true });
  const [a4Ref, a4InView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!resume) {
      fetchResume();
    }
  }, [resume]);

  if (isNetworkError) return <InternalServerError />;
  if (!resume && !resumeError) {
    return <Loading />;
  }
  if (!resume && resumeError) {
    return <NotFound />;
  }
  const handleDownload = () => {
    if (user && user.resumeUrl) {
      const link = document.createElement("a");
      link.href = user.resumeUrl;
      link.download = "AA-Yarin_Benzimra_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    resume &&
    !resumeError && (
      <div className={styles.resume}>
        {user && (
          <button
            onClick={handleDownload}
            className={`${styles.downloadButton} ${
              buttonInView ? styles.visible : ""
            }`}
            ref={buttonRef}
          >
            DOWNLOAD CV
          </button>
        )}
        <div
          className={`${styles.a4} ${a4InView ? styles.visible : ""}`}
          ref={a4Ref}
        >
          <CVHeader />
          <section className={styles.section}>
            {resume && resume.length > 0 ? (
              resume.map((topic, index) => {
                if (topic.items && topic.items.length > 0) {
                  return (
                    <div key={index + 1} className={styles.topic}>
                      <CVYearTitleDescriptionType
                        title={topic.title}
                        direction={topic.direction}
                        items={topic.items}
                      />
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <p>No data available</p>
            )}
          </section>
        </div>
      </div>
    )
  );
}

export default Resume;
