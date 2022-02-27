import React from "react";
import resumePic from "../../assets/resume-new.svg";  // got this baby from undraw.co
import styles from "./Header.module.css";


// This component is the header of the application. This includes the logo, and the header text
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Make your <span>Resume</span> stand out!
        </p>
        <p className={styles.heading}>
          Get started now for <span>free!</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumePic} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
