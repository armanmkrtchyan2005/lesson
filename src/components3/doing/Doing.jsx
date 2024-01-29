import React, { useState } from "react";
import style from "./Doing.module.css";
import Vectordoing from "../../assets/doing.png/Vectordoing.png";
import photo1 from "../../assets/doing.png/photo1.png";
import photo2 from "../../assets/doing.png/photo2.png";
import photo3 from "../../assets/doing.png/photo3.png";
import photo4 from "../../assets/doing.png/photo4.png";
import photo5 from "../../assets/doing.png/photo5.png";
import photo6 from "../../assets/doing.png/photo6.png";
import photo7 from "../../assets/doing.png/photo7.png";
import photo8 from "../../assets/doing.png/photo8.png";
import photo9 from "../../assets/doing.png/photo9.png";
import SimpleModal from "../../components/home/simpleModal/SimpleModal";

const Doing = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className={style.headerDoing}>
        <p>Наша работа - ценный вклад в качество твоей жизни</p>
      </div>
      <div className={style.whatWe}>
        <div className={style.boxes}>
          <div className={style.frontBack}>
            <div className={style.box1}>
              <img src={photo1} alt="" />
              <p>Споры с работодателем</p>
            </div>
            <div className={style.backBox}>
              <p>Споры с работодателем</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
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
          <div className={style.frontBack}>
            <div className={style.box2}>
              <img src={photo2} alt="" />
              <p>Штрафы полиции и других учреждений</p>
            </div>
            <div className={style.backBox}>
              <p>Штрафы полиции и других учреждений</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
              <button
                className={style.openBtn}
                onClick={() => setModalOpen(true)}
              >
                Оставить заявку
              </button>
              {/* <SimpleModal
                isOpen={ModalOpen}
                onClose={() => setModalOpen(false)}
              ></SimpleModal> */}
            </div>
          </div>

          <div className={style.frontBack}>
            <div className={style.box3}>
              <img src={photo3} alt="" />
              <p>Решение споров в государственных учреждениях</p>
            </div>

            <div className={style.backBox}>
              <p>Решение споров в государственных учреждениях</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
              <button
                className={style.openBtn}
                onClick={() => setModalOpen(true)}
              >
                Оставить заявку
              </button>
              {/* <SimpleModal
                isOpen={ModalOpen}
                onClose={() => setModalOpen(false)}
              ></SimpleModal> */}
            </div>
          </div>
        </div>
        <div className={style.boxes}>
          <div className={style.frontBack}>
            <div className={style.secBox1}>
              <img src={photo4} alt="" />
              <p>Возмещение убытков и морального ущерба</p>
            </div>
            <div className={style.backBox}>
              <p>Возмещение убытков и морального ущерба</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
              <button
                className={style.openBtn}
                onClick={() => setModalOpen(true)}
              >
                Оставить заявку
              </button>
              {/* <SimpleModal
                isOpen={ModalOpen}
                onClose={() => setModalOpen(false)}
              ></SimpleModal> */}
            </div>
          </div>
          <div className={style.frontBack}>
            <div className={style.secBox2}>
              <img src={photo5} alt="" />
              <p>Возврат долгов</p>
            </div>
            <div className={style.backBox}>
              <p>Возврат долгов</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
              <button
                className={style.openBtn}
                onClick={() => setModalOpen(true)}
              >
                Оставить заявку
              </button>
              {/* <SimpleModal
                isOpen={ModalOpen}
                onClose={() => setModalOpen(false)}
              ></SimpleModal> */}
            </div>
          </div>
          <div className={style.frontBack}>
            <div className={style.secBox3}>
              <img src={photo6} alt="" />
              <p>Представление интерсов в суде и конституционные жалобы</p>
            </div>

            <div className={style.backBox}>
              <p>Представление интерсов в суде и конституционные жалобы</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
              <button
                className={style.openBtn}
                onClick={() => setModalOpen(true)}
              >
                Оставить заявку
              </button>
              {/* <SimpleModal
                isOpen={ModalOpen}
                onClose={() => setModalOpen(false)}
              ></SimpleModal> */}
            </div>
          </div>
        </div>
        <div className={style.boxes}>
          <div className={style.frontBack}>
            <div className={style.endBox1}>
              <img src={photo7} alt="" />
              <p>Право потребителя</p>
            </div>

            <div className={style.backBox}>
              <p>Право потребителя</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
              <button
                className={style.openBtn}
                onClick={() => setModalOpen(true)}
              >
                Оставить заявку
              </button>
              {/* <SimpleModal
                isOpen={ModalOpen}
                onClose={() => setModalOpen(false)}
              ></SimpleModal> */}
            </div>
          </div>
          <div className={style.frontBack}>
            <div className={style.endBox2}>
              <img src={photo8} alt="" />
              <p>Защита прав учащихся</p>
            </div>

            <div className={style.backBox}>
              <p>Защита прав учащихся</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
              <button
                className={style.openBtn}
                onClick={() => setModalOpen(true)}
              >
                Оставить заявку
              </button>
              {/* <SimpleModal
                isOpen={ModalOpen}
                onClose={() => setModalOpen(false)}
              ></SimpleModal> */}
            </div>
          </div>
          <div className={style.frontBack}>
            <div className={style.endBox3}>
              <img src={photo9} alt="" />
              <p>Нестандартные ситуации</p>
            </div>

            <div className={style.backBox}>
              <p>Нестандартные ситуации</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quam dolor, sed tempus placerat. Cursus aliquet
                ullamcorper enim dolor faucibus faucibus. Praesent ut duis
                suspendisse at velit, tellus. Donec egestas interdum venenatis
                quis. Quam commodo ac tellus augue in quam eleifend elit. Id
                auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel.
                Sed cras tellus id fames pellentesque. Sed eu magna eget gravida
                sit. Urna lectus vulputate egestas aliquam ornare etiam nec
                orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim
                morbi.
              </span>
              <button
                className={style.openBtn}
                onClick={() => setModalOpen(true)}
              >
                Оставить заявку
              </button>
              {/* <SimpleModal
                isOpen={ModalOpen}
                onClose={() => setModalOpen(false)}
              ></SimpleModal> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doing;
