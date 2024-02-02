import React from "react";
import style from "./Main.module.css";
import Group1 from "../../../assets/main.png/Group1.png";

export const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.thinck1}>
        <img src={Group1} alt="" />
      </div>
    </div>
  );
};
