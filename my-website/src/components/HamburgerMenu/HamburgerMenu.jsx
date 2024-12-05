import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "../../../src/assets/main-header-icon/menu.png";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <div
        className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <Link to="/about" onClick={toggleMenu}>
          About Me
        </Link>
        <Link to="/resume" onClick={toggleMenu}>
          Resume
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
