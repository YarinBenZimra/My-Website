import styles from "./CVHeader.module.css";
import githubLogo from "../../assets/cv-icons/githubLogo.png";
import linkdinLogo from "../../assets/cv-icons/linkdinLogo.png";
import home from "../../assets/cv-icons/home.png";
import phone from "../../assets/cv-icons/phone.png";
import mail from "../../assets/cv-icons/mail.png";
import { useAppContext } from "../../Context/AppContext.jsx";
export default function CVHeader() {
  const { user, userError } = useAppContext();
  if (!user && !userError) return null; // Loading Screen TODO
  if (!user && userError) return null; // Error
  return (
    user &&
    !userError && (
      <div className={styles.header}>
        <div className={styles.nameAndIcons}>
          <div className={styles.nameAndUnderline}>
            <p className={styles.name}>
              <strong>{user.firstName}</strong>
              {user.lastName}
            </p>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.socialIcons}>
            <a
              href={user.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.linkedinIcon}
                src={linkdinLogo}
                alt="LinkedIn"
              />
            </a>
            <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
              <img
                className={styles.githubIcon}
                src={githubLogo}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoTxtAndIcon}>
            <p className={styles.infoTxt}>{user.phone}</p>
            <img className={styles.infoIcons} src={phone} alt="phone" />
          </div>
          <div className={styles.infoTxtAndIcon}>
            <p className={styles.infoTxt}> {user.email}</p>
            <img className={styles.infoIcons} src={mail} alt="mail" />
          </div>
          <div className={styles.infoTxtAndIcon}>
            <p className={styles.infoTxt}> {user.address}</p>
            <img className={styles.infoIcons} src={home} alt="adress" />
          </div>
        </div>
      </div>
    )
  );
}
