import React from "react";
import styles from "./Main.module.css";
import hands from "./images/hands.png";
import mail from "./images/clarity_email-solid.png";
import instagram from "./images/ant-design_instagram-filled.png"
import telegram from "./images/akar-icons_telegram-fill.png"

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.firsttext}>
        <p className={styles.bigtxt}>Пиши и получи быстрый ответ</p>
        <p className={styles.smalltxt}>Команда IRproblema.lv </p>
      </div>
        <div className={styles.contacts}>
          <div className={styles.rounds}>
        <div className={styles.centermain}>
        <div className={styles.round}><img src={mail} alt="" />
        </div>
        <p className={styles.context}>Электронная почта:</p>
        <p className={styles.smallcontext}>irproblemalv@yandex.ru</p></div>
        <div className={styles.centermain}>
        <div className={styles.round}><img src={instagram} alt="" /></div>
        <p className={styles.context}>Свяжитесь с нами в Instagram:</p>
        <p className={styles.smallcontext}>irproblemalv</p></div>
        <div className={styles.centermain}>
        <div className={styles.round}><img src={telegram} alt="" /></div>
        <p className={styles.context}>Свяжитесь с нами в Messenger:</p>
        <p className={styles.smallcontext}>+37491362313</p></div></div></div>
        
      <img className={styles.hands} src={hands} alt="image" />
    </div>
  );
};

export default Main;
