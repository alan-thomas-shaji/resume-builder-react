import React from "react";

import styles from "./InputControl.module.css";


// this is for those repetitive fields that I don't wanna do again and again.
function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
