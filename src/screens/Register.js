import React, { useState } from "react";
import RegisterJumbotronPic from "../assets/registerJumbotron.png";
import Logo from "../assets/logo.svg";
import Input from "../components/InputComp/Input";
import Checkbox from "../components/CheckBox/CheckBox";
import fbIcon from "../assets/FbIcon.png";
import AppleIcon from "../assets/appleIcon.png";
import GoogleIcon from "../assets/google.png";

export default function Register() {
  const [isChecked, setIschecked] = useState(false);

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
        <div className="register__main__content__right">
          <div className="regiester__main__content__right__content">
            <div className="register__main__content__right__title">
              Create an Account
            </div>
            <form action="" className="regiester__main__content__right__form">
              <div className="register__main__content__right__row">
                <div className="register__main__content__right__column">
                  <Input type="text" placeholder="FirstName" />
                </div>
                <div className="register__main__content__right__column">
                  <Input type="text" placeholder="LastName" />
                </div>
              </div>
              <Input type="email" placeholder="Email" />
              <div className="register__main__content__right__column">
                <Input type="date" placeholder="Date of Birth" />
              </div>
              <div className="register__main__content__right__row">
                <div className="register__main__content__right__column">
                  <Input type="password" placeholder="Password" />
                </div>
                <div className="register__main__content__right__column">
                  <Input type="password" placeholder="Confirm Password" />
                </div>
              </div>
              <div className="register__main__content__right__country">
                Country/Region
              </div>
              <div className="register__main__content__right__row">
                <div className="register__main__content__right__column">
                  <Input type="text" placeholder="City" />
                </div>
                <div className="register__main__content__right__column">
                  <Input type="text" placeholder="Country" />
                </div>
              </div>
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
                  className="register__main__content__right__label"
                >
                  I agree to the <a href="#">Terms & Conditions</a>
                </label>
              </div>
            </form>
            <div className="register__main__content__right__signup__button">
              <a href="#">Sign Up</a>
            </div>
            <div className="register__main__content__right__signin">
              Already have an account? <a href="#">Sign In</a>
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
          </div>
        </div>
      </div>
    </div>
  );
}
