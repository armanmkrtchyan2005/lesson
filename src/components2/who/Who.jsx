import React, { useState } from "react";
import style from "./Who.module.css";
import Group32 from "../../assets/who.png/Group32.png";
import Peaple from "../../assets/who.png/Peaple.png";
import SimpleModal from "../../components/home/simpleModal/SimpleModal";

const Who = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <div className={style.who}>
      <div className={style.word}>
        <p>Молодые специалисты - наша формула победы</p>
        <button className={style.openBtn} onClick={() => setModalOpen(true)}>
          Оставить заявку
        </button>
        <SimpleModal
          isOpen={ModalOpen}
          onClose={() => setModalOpen(false)}
        ></SimpleModal>
      </div>
      <div className={style.vector1}>
        <img className={style.group32} src={Group32} alt="" />
        <img className={style.peaple} src={Peaple} alt="" />
        <div className={style.words}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            quam dolor, sed tempus placerat. Cursus aliquet ullamcorper enim
            dolor faucibus faucibus. Praesent ut duis suspendisse at velit,
            tellus. Donec egestas interdum venenatis quis. Quam commodo ac
            tellus augue in quam eleifend elit. Id auctor leo commodo nibh
            vitae. Massa sed odio diam ipsum vel. Sed cras tellus id fames
            pellentesque. Sed eu magna eget gravida sit. Urna lectus vulputate
            egestas aliquam ornare etiam nec orci. Sed amet vitae id vitae.
            Ipsum, at est purus dui et enim morbi. Nulla tempor massa et
            suscipit ac tempus lobortis. Tellus interdum eleifend a risus amet
            vulputate vitae arcu erat. Orci quam neque neque laoreet sed. Massa,
            in diam neque, mi volutpat enim scelerisque sed. Amet diam fermentum
            mattis faucibus ultricies in urna nec. Feugiat viverra vel pretium
            lorem. Libero, nibh velit pulvinar purus velit neque, nunc quis.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            quam dolor, sed tempus placerat. Cursus aliquet ullamcorper enim
            dolor faucibus faucibus. Praesent ut duis suspendisse at velit,
            tellus. Donec egestas interdum venenatis quis. Quam commodo ac
            tellus augue in quam eleifend elit. Id auctor leo commodo nibh
            vitae. Massa sed odio diam ipsum vel. Sed cras tellus id fames
            pellentesque. Sed eu magna eget gravida sit. Urna lectus vulputate
            egestas aliquam ornare etiam nec orci. Sed amet vitae id vitae.
            Ipsum, at est purus dui et enim morbi. Nulla tempor massa et
            suscipit ac tempus lobortis. Tellus interdum eleifend a risus amet
            vulputate vitae arcu erat. Orci quam neque neque laoreet sed. Massa,
            in diam neque, mi volutpat enim scelerisque sed. Amet diam fermentum
            mattis faucibus ultricies in urna nec. Feugiat viverra vel pretium
            lorem. Libero, nibh velit pulvinar purus velit neque, nunc quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;
