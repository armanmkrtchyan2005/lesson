import React from "react";
import styles from "./Tech.module.css";
import techimage from "./Illustration.png"


const Tech = () => {
  return (
    <div className={styles.Tech}>
      <div className={styles.textnimage}>
        <div>
        <p className={styles.techtext}>На сайте ведуться</p>
        <p className={styles.techtext}>технические работы</p>
        </div>
<img src={techimage} />
      </div>
    </div>
  );
};

export default Tech;
