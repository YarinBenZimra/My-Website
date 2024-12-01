import styles from "./Resume.module.css";
import CVHeader from "../../components/CVHeader/CVHeader";
import CVYearTitleDescriptionType from "../../components/CVYearTitleDescription/CVYearTitleDescription";
import NotFound from "../404NotFound/404NotFound";
import { useAppContext } from "../../Context/AppContext";
import { useEffect } from "react";
function Resume() {
  const { resume, fetchResume, loading, error } = useAppContext();
  useEffect(() => {
    fetchResume();
  }, [fetchResume]);

  if (loading) {
    // Loading Screen
    return <div>Loading...</div>;
  }
  if (error) {
    return <NotFound />;
  }
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AA- Yarin Benzimra Resume.pdf";
    link.download = "AA-Yarin_Benzimra_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    resume && (
      <div className={styles.resume}>
        <button onClick={handleDownload} className={styles.downloadButton}>
          DOWNLOAD CV
        </button>
        <div className={styles.a4}>
          <CVHeader />
          <section className={styles.section}>
            {resume && resume.length > 0 ? (
              resume.map((topic) => {
                if (topic.items && topic.items.length > 0) {
                  return (
                    <div key={topic.id} className={styles.topic}>
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
