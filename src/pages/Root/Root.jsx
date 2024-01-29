import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css";
import headerimg from "./images/header.png";
import footerimg from "./images/footer.png";
import logo from "./images/problema.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Root = () => {
  return (
    <div className={styles.Root}>
      <div className={styles.header}>
        <img src={headerimg} alt="" className={styles.headerimg} />
        <div className={styles.nav}>
          <img src={logo} alt="logo" />
          <div className={styles.bars}>
            <NavLink className={styles.link} to={"/"}>
              ГЛАВНАЯ
            </NavLink>
            <NavLink to={"/who"} className={styles.link}>
              КТО МЫ
            </NavLink>
            <NavLink to={"/doing"} className={styles.link}>
              Что мы делаем
            </NavLink>
            <NavLink to={"/projects"} className={styles.link}>
              Проекты
            </NavLink>
            <NavLink to={"/contacts"} className={styles.link}>
              Контакты
            </NavLink>
            <p to={"/"} className={styles.link}>
              РУ
              <MdOutlineKeyboardArrowDown className={styles.arrowdown} />
            </p>
          </div>
        </div>
      </div>
      <Outlet />
      <div className={styles.footer}>
        <img src={footerimg} alt="" />
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

export default Root;
