import styles from "./PopupSendEmail.module.css";
export default function PopupSendEmail({ headline, content, image, onClick }) {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <h1 className={styles.headline}>{headline}</h1>
        <img className={styles.image} src={image} alt="Image" />
        <p className={styles.content}>{content}</p>
        <button className={styles.button} onClick={onClick}>
          Close
        </button>
      </div>
    </div>
  );
}
