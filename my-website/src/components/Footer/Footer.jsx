import styles from "./Footer.module.css";
import linkdinLogo from "../../assets/linkdinLogo.png";
import githubLogo from "../../assets/githubLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import { useAppContext } from "../../Context/AppContext.jsx";

export default function Footer() {
  const { user, loading, error } = useAppContext();
  if (loading) return null; // Loading Screen TODO
  if (error) return null; // Error
  return (
    user && (
      <div className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {user.firstName} {user.lastName}
          <br /> All rights reserved.
        </p>
        <p className={styles.call}>
          <strong>Call</strong>
          <br />
          {user.phone}
        </p>
        <p className={styles.contact}>
          <strong> Write:</strong>
          <br />
          <a
            href={`mailto:${user.email}`}
            style={{ color: "#545454", fontWeight: "normal" }}
          >
            {user.email}
          </a>
        </p>
        <div className={styles.socialMedia}>
          <a href={user.linkdinUrl} target="_blank" rel="noopener noreferrer">
            <img src={linkdinLogo} alt="LinkedIn Logo" />
          </a>
          <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
          <a href={user.facebookUrl} target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook Logo" />
          </a>
        </div>
      </div>
    )
  );
}
