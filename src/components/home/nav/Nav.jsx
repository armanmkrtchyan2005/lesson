import React from "react";
import style from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../../assets/nav.png/logo1.png";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.group}>
        <div className={style.logo}>
          <img src={logo1} alt="" />
        </div>
        <div className={style.group1}>
          <div className={style.main}>
            <NavLink to="/">Главная</NavLink>
          </div>
          <div className={style.whoAre}>
            <NavLink to="/Who">Кто мы</NavLink>
          </div>
          <div className={style.whatWeDu}>
            <NavLink to="/Doing">Что мы делаем</NavLink>
          </div>
          <div className={style.projects}>
            <NavLink to="/Projects">Проекты</NavLink>
          </div>
          <div className={style.contacts}>
            <a href="#">Контакты</a>
          </div>
        </div>
        <div className={style.lang}>
          <select>
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Nav;
