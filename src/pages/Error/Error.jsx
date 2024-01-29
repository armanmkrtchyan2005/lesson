import { NavLink } from "react-router-dom"
import styles from "./Error.module.css"
import React from "react";
import headerimg from "./images/header.png"
import footerimg from "./images/footer.png";
import logo from "./images/problema.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import human from "./images/human.png"



const Error = () => {
    return (
      <div className={styles.Root}>
      <div className={styles.header}>
        <img src={headerimg} alt="image" className={styles.headerimg} />
        <div className={styles.nav}>
          <img src={logo} alt="logo" />
          <div className={styles.bars}>
            <NavLink className={styles.link} to={"/home"}>
              ГЛАВНАЯ
            </NavLink>
            <NavLink to={"/who"} className={styles.link}>
              КТО МЫ
            </NavLink>
            <NavLink to={"/chto"} className={styles.link}>
              Что мы делаем
            </NavLink>
            <NavLink to={"/proect"} className={styles.link}>
              Проекты
            </NavLink>
            <NavLink to={"/"} className={styles.link}>
              Контакты
            </NavLink>
            <p to={"/"} className={styles.link}>
              РУ
              <MdOutlineKeyboardArrowDown className={styles.arrowdown} />
            </p>
          </div>
        </div>
      </div>
      <div className={styles.error}>
      <div className={styles.texterror}><div><p className={styles.errortext}>Ошибка</p>
      <p className={styles.errornumber}>404</p>
      <p className={styles.pnd}>Страница не найдена</p>
      <NavLink className={styles.tomain} to={"/"}>На главную</NavLink></div></div>
      <div className={styles.imageerror}><img src={human} /></div></div>
      <div className={styles.footer}>
        <img src={footerimg} alt="image" />
        <div className={styles.footerbars}>
          <NavLink className={styles.footerlink} to={"/faq"}>
            FAQ
          </NavLink>

          <NavLink className={styles.footerlink} to={"/team"}>
            Политика сотрудничества{" "}
          </NavLink>

          <NavLink className={styles.footerlink} to={"/conf"}>
            Политика конфиденциальности
          </NavLink>
        </div>
      </div>
      </div>
    );
  };
  
  export default Error;
  