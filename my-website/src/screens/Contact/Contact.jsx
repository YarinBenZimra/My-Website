import styles from "./Contact.module.css";
import letsTalkIcon from "../../assets/contact-icons/let'sTalk.png";
import Form from "../../components/Form/Form.jsx";
export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.iconAndTitle}>
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
      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
  );
}
