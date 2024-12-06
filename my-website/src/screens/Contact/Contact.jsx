import styles from "./Contact.module.css";
import letsTalkIcon from "../../assets/contact-icons/let'sTalk.png";
import Form from "../../components/Form/Form.jsx";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [iconAndTitleRef, iconAndTitleInView] = useInView({
    triggerOnce: true,
  });
  const [formContainerRef, formContainerInView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={styles.contact}>
      <div
        className={`${styles.iconAndTitle} ${
          iconAndTitleInView ? styles.visible : ""
        }`}
        ref={iconAndTitleRef}
      >
        <div className={styles.imgContainer}>
          <img
            className={styles.letsTalkIcon}
            src={letsTalkIcon}
            alt="Contact Icon"
          ></img>
        </div>
        <h1 className={styles.title}>
          Let's <span style={{ color: "white" }}>Talk</span>
        </h1>
      </div>
      <div
        className={`${styles.formContainer} ${
          formContainerInView ? styles.visible : ""
        }`}
        ref={formContainerRef}
      >
        <Form />
      </div>
    </div>
  );
}
