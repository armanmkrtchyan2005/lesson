import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ title, content, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={styles.accordion_item}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={styles.accordion_title}>
        <div className={styles.title}>
          <span>{index}.</span>
          {title}
        </div>
      </div>
      {isActive && <div className={styles.accordion_content}>{content}</div>}
    </div>
  );
};

export default Accordion;
