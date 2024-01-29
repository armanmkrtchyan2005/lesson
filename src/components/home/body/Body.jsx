import React, { useState } from "react";
import style from "./Body.module.css";
import SimpleModal from "../simpleModal/SimpleModal";
import Documents from "../../../assets/body.png/Documents.png";
import Layer2 from "../../../assets/body.png/Layer2.png";
import Vector9 from "../../../assets/body.png/Vector9.png";
import Layer3 from "../../../assets/body.png/Layer3.png";
import Line from "../../../assets/body.png/Line.png";
import instagram from "../../../assets/body.png/instagram.png";
import facebook from "../../../assets/body.png/facebook.png";

const Body = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <div className={style.body}>
      <div className={style.bodyP}>
        <p>Получи помощь полностью бесплатно за три шага!</p>
      </div>
      <div className={style.elipsBckcolor}>
        <div className={style.elips1}>
          <div>
            <div className={style.elipsSmol1}>
              <p>1 ШАГ</p>
            </div>
            <div className={style.elipsBig1}>
              <p>У меня есть проблема с</p>
              <img src={Documents} alt="" />
            </div>
          </div>
          <div>
            <p className={style.step1}>
              Если Ты не хочешь тратить сотни и даже тысячи евро на консультацию
              адвоката, нажми здесь и заполни форму.
            </p>
            <button
              className={style.openBtn}
              onClick={() => setModalOpen(true)}
            >
              Оставить заявку
            </button>
            <SimpleModal
              isOpen={ModalOpen}
              onClose={() => setModalOpen(false)}
            ></SimpleModal>
          </div>
        </div>
        <div className={style.elips2}>
          <img className={style.elipsLine} src={Line} alt="" />
          <p className={style.step2}>
            Наша команда рассмотрит предоставленную информацию в течение 3 дней
            и сообщит о дальнейших действиях.
          </p>
          <div>
            <div className={style.elips2P}>
              <div className={style.elipsSmol2}>
                <p>2 ШАГ</p>
              </div>
              <div className={style.elipsBig2}>
                <img className={style.photo1} src={Layer2} alt="" />
              </div>
            </div>
          </div>
          <img className={style.photo} src={Vector9} alt="" />
        </div>
        <div className={style.elips3}>
          <div className={style.elipsSm3}>
            <div className={style.elipsSmol3}>
              <p>3 ШАГ</p>
            </div>
            <div className={style.elipsBig3}>
              <img src={Layer3} alt="" />
            </div>
          </div>
          <div>
            <p className={style.step3}>
              В тесном сотрудничестве с Тобой наша команда решает проблемную
              ситуацию.
            </p>
          </div>
        </div>
      </div>
      <div className={style.netWork}>
        <p>Мы в социальных сетях</p>
        <div className={style.instFb}>
          <a href="https://www.instagram.com/">
            <div className={style.inst}>
              <img src={instagram} alt="" />
            </div>
          </a>
          <a href="https://www.instagram.com/">
            <span>INSTAGRAM</span>
          </a>
          <a href="https://www.facebook.com/">
            <div className={style.fb}>
              <img src={facebook} alt="" />
            </div>
          </a>
          <a href="https://www.facebook.com/">
            <span>FACEBOOK</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
