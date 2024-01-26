import React from "react";
import style from "./Main.module.css";
import thinck from "../../../assets/main.png/thinck.png";
// import Vecto1 from "../../assets/main.png/Vecto1.png";
import Vector1 from "../../../assets/main.png/Vector1.png";
// import Vecto2 from "../../assets/main.png/Vecto2.png";
import Vector2 from "../../../assets/main.png/Vector2.png";
// import Vecto3 from "../../assets/main.png/Vecto3.png";
import Vector3 from "../../../assets/main.png/Vector3.png";
// import Vecto4 from "../../assets/main.png/Vecto4.png";
import Vector4 from "../../../assets/main.png/Vector4.png";
// import Vecto5 from "../../assets/main.png/Vecto5.png";
import Vector5 from "../../../assets/main.png/Vector5.png";
// import Vecto6 from "../../assets/main.png/Vecto6.png";
import Vector6 from "../../../assets/main.png/Vector6.png";
// import Vecto7 from "../../assets/main.png/Vecto7.png";
import Vector7 from "../../../assets/main.png/Vector7.png";
// import Vecto8 from "../../assets/main.png/Vecto8.png";
import Vector8 from "../../../assets/main.png/Vector8.png";

export const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.mainContent}>
        <div className={style.vector123456}>
          <div className={style.vector14}>
            {/* <div className={style.vect1}> */}
            <div className={style.vector1}>
              <p>
                Магазин отказывается вернуть деньги за некачественный товар?
              </p>
              {/* <img src={Vecto1} alt="" /> */}
              <img className={style.vec1} src={Vector1} alt="" />
            </div>
            {/* <div className={style.vec}>
              </div> */}
            {/* </div> */}
            <div className={style.vector4}>
              <p>Преподаватель неверно оценил Твою работу?</p>
              {/* <img src={Vecto4} alt="" /> */}
              <img className={style.vec4} src={Vector4} alt="" />
            </div>
          </div>
          <div className={style.vector25}>
            <div className={style.vector2}>
              <p>
                Работодатель не выплачивает заработную плату или производит
                удержания?
              </p>
              {/* <img src={Vecto2} alt="" /> */}
              <img className={style.vec2} src={Vector2} alt="" />
            </div>
            <div className={style.vector5}>
              <p>Кто-то не возвращает долг?</p>
              {/* <img src={Vecto5} alt="" /> */}
              <img className={style.vec5} src={Vector5} alt="" />
            </div>
          </div>
          <div className={style.vector36}>
            <div className={style.vector3}>
              <p>Тебя без основания уволили?</p>
              {/* <img src={Vecto3} alt="" /> */}
              <img className={style.vec3} src={Vector3} alt="" />
            </div>
            <div className={style.vector6}>
              <p>Полиция Тебя оштрафовала?</p>
              {/* <img src={Vecto6} alt="" /> */}
              <img className={style.vec6} src={Vector6} alt="" />
            </div>
          </div>
        </div>

        <div className={style.vector87}>
          <div className={style.vector78}>
            <div className={style.vector7}>
              <p>Государственное учреждение не отвечает на заявку?</p>
              {/* <img src={Vecto7} alt="" /> */}
              <img className={style.vec7} src={Vector7} alt="" />
            </div>
            <div className={style.vector8}>
              <p>Ты столкнулся с другой юридической проблемой?</p>
              {/* <img src={Vecto8} alt="" /> */}
              <img className={style.vec8} src={Vector8} alt="" />
            </div>
          </div>
        </div>
      </div>
        <div className={style.thinck1}>
          <img src={thinck} alt="" />
        </div>
    </div>
  );
};
