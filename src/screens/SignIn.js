import React, { useState } from "react";
import SignInBG from "../assets/signin__bg.png";
import Logo from "../assets/logo.svg";
import Input from "../components/InputComp/Input";
import Checkbox from "../components/CheckBox/CheckBox";
import fbIcon from "../assets/FbIcon.png";
import AppleIcon from "../assets/appleIcon.png";
import GoogleIcon from "../assets/google.png";
import Curve from "../assets/sign__in__curve.png";

function SignIn() {
  const [isChecked, setIschecked] = useState(false);

  return (
    <div className="register__main__container">
      <div className="register__main__pic">
        <img src={SignInBG} alt="Architecture with clouds" />
      </div>
      <div className="register__main__content sign_in__main__content">
        <div className="register__main__content__left sign_in_main__content__left">
          <div className="sign_in_main__content__left__container">
            <div className="register__main__content__left__title">
              Weclcome Back
            </div>
            <div className="register__main__content__left__text sign_in_main__content__left__text">
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
        </div>
        <div className="register__main__content__right sign__in__main__content__right">
          <div className="regiester__main__content__right__content sign__in__main__content__right__content">
            <div className="register__main__content__right__title">Sign In</div>
            <form action="" className="regiester__main__content__right__form">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <div className="register__main__content__right__checkbox__container">
                <Checkbox
                  value={isChecked}
                  label=""
                  labelColor="#000"
                  checkedColor=""
                  unCheckedColor="transparent"
                  iconColor="#ffffff"
                  onChange={() => {
                    isChecked ? setIschecked(false) : setIschecked(true);
                  }}
                />
                <label
                  htmlFor="terms"
                  className="register__main__content__right__label">
                  Remember Me
                </label>
              </div>
            </form>
            <div className="register__main__content__right__signup__button">
              <a href="#">Sign In</a>
            </div>

            <div className="register__main__content__right__icons">
              <div className="  register__main__content__right__icon">
                <a href="#">
                  <img src={fbIcon} alt="Facebook Icon" />
                </a>
              </div>
              <div className="  register__main__content__right__icon">
                <a href="#">
                  <img src={GoogleIcon} alt="Google Icon" />
                </a>
              </div>
              <div className="  register__main__content__right__icon">
                <a href="#">
                  <img src={AppleIcon} alt="Apple Icon" />
                </a>
              </div>
            </div>
            <div className="register__main__content__right__signin">
              Don't have an account? <a href="#">Create Account</a>
            </div>
            <div className="sign__in__main__content__right__curve">
              <img src={Curve} alt="Curve" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;