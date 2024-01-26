import React from "react";
import Modal from "react-modal";
import style from "./SimpleModal.module.css";
import xclose from "../../../assets/header.png/xclose.png";

const SimpleModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={style.modalOverlay}
      className={`${style.modalContent} ${!isOpen ? style.close : ""}`}
      closeTimeoutMS={700}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <button className={style.modalCloseBtn} onClick={() => onClose()}>
        <img className={style.imgXclose} src={xclose} alt="" />
      </button>
      <h2>Заполни эту форму и получи ответ в течении трёх дней</h2>
      <div className={style.modalInput}>
        <form action="#">
          <input
            className={style.nameSrname}
            type="text"
            placeholder="Имя, Фамилия"
            maxLength={25}
            name="name1"
            id="name1"
          />

          <div className={style.modalInput1}>
            <input
              className={style.email}
              type="email"
              placeholder="Э-почта"
              maxLength="30"
              name="name2"
              id=""
            />

            <input
              className={style.telNumber}
              type="tel"
              placeholder="Номер телефона"
              maxLength={15}
              name="name3"
              id=""
            />
          </div>

          <input
            className={style.problem}
            type="text" /* chem hishum u chem karum gtnem shat texti hamar incha drvum */
            placeholder="Описание проблемы"
            maxLength={150}
            name="name4"
            id=""
          />
        </form>
      </div>
      <div className={style.check1}>
        <input type="checkbox" name="" id="" />
        <label htmlFor="check1">Согласен с правилами сотрудничества</label>
      </div>
      <div className={style.check2}>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Согласен получать новости по э-почте</label>
      </div>
      <span className={style.modalSpan}>
        Мы используем ваши персональные данные, чтобы посредством настоящего
        веб-сайта информировать вас и лучшим образом представить наши услуги, а
        именно:
      </span>
      {children}
      <button className={style.modalSubmitBtn} onClick={() => onClose()}>
        Оставить заявку
      </button>
    </Modal>
  );
};

export default SimpleModal;
