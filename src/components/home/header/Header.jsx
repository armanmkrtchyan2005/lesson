import React, { useState } from "react";
import style from "./Header.module.css";
import bg from "../../../assets/header.png/bg.png";
import Layer1 from "../../../assets/header.png/Layer1.png";
import SimpleModal from "../simpleModal/SimpleModal";
import scales from "../../../assets/header.png/scales.png";

const Header = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <div className={style.header}>
      <div className={style.bg}>
        <img src={bg} alt="" />
      </div>
      <div className={style.word}>
        <p>У тебя есть проблема - у нас есть решение!</p>
        <button className={style.openBtn} onClick={() => setModalOpen(true)}>
          Оставить заявку
        </button>
        <SimpleModal
          isOpen={ModalOpen}
          onClose={() => setModalOpen(false)}
        ></SimpleModal>
      </div>
      <div className={style.layer}>
        <img src={Layer1} alt="" />
      </div>
      <div className={style.scalesS}>
        <img src={scales} alt="" />
      </div>
    </div>
  );
};

export default Header;
