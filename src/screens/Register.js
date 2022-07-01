import React from "react";
import RegisterJumbotronPic from "../assets/registerJumbotron.png";
import Logo from "../assets/logo.svg";
import Input from "../components/InputComp/Input";

function Register() {
  return (
    <div className="register__main__container">
      <div className="register__main__pic">
        <img src={RegisterJumbotronPic} alt="Architecture with clouds" />
      </div>
      <div className="register__main__content">
        <div className="register__main__content__left">
          <div className="register__main__content__left__title">
            Be a part of our team
          </div>
          <div className="register__main__content__left__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            cumque alias laudantium in quasi! Doloribus quasi sed possimus.
            Perspiciatis debitis quisquam, possimus magnam quaerat, explicabo
            tempora ullam maxime placeat, distinctio impedit suscipit minima
            voluptate recusandae repellat necessitatibus et doloribus
            voluptatibus.
          </div>
          <div className="register__main__content__left__logo">
            <img src={Logo} alt="ArcSharks Logo" />
          </div>
        </div>
        <div className="register__main__content__right"></div>
      </div>
    </div>
  );
}

export default Register;
