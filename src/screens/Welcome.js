import React from "react";
import Welcomejumbotronpic from "../assets/Welcome.png";
import Logo from "../assets/logo.svg";

function Register() {
  return (
    <div className="welcome__main__container">
      <div className="welcome__main__pic">
        <img src={Welcomejumbotronpic} alt="Architecture with clouds" />
      </div>
      <div className="welcome__main__content">
        <div className="welcome__main__content__left">
          <form action="" className="welcome__main__content__left__form">
            <div className="welcome__main__content__left__card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              beatae!
            </div>
          </form>
        </div>
        <div className="welcome__main__content__right">
          <div className="welcome__main__content__right__title">
            Welcome Back
          </div>
          <div className="welcome__main__content__right__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="welcome__main__content__right__logo">
            <img src={Logo} alt="ArcSharks Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
