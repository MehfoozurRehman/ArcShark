import React, { useState } from "react";
import { X, Menu } from "react-feather";
import { logo } from "../assets";

export default function Header() {
  const [isUser, setIsUser] = useState(false);
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content__left">
          <a href="#" className="header__content__left__logo">
            <img
              src={logo}
              alt="arcsharklogo"
              className="header__content__left__logo__img"
            />
          </a>
          <div className="header__content__left__nav">
            <a href="#" className="header__content__left__nav__link">
              Discover
            </a>
            <a href="#" className="header__content__left__nav__link">
              Jobs
            </a>
          </div>
        </div>
        <div className="header__content__right">
          {isUser ? (
            <>
              <a
                href="#"
                className="header__content__right__button header__content__right__button__outline"
              >
                Share your work
              </a>
            </>
          ) : (
            <>
              <a
                href="#"
                className="header__content__right__button header__content__right__button__primary"
              >
                Sign In
              </a>
              <a
                href="#"
                className="header__content__right__button header__content__right__button__secondary"
              >
                Sign Up
              </a>
            </>
          )}
          <button className="header__content__right__menu">
            <X size={20} color="currentcolor" />
            <Menu size={20} color="currentcolor" />
          </button>
        </div>
      </div>
    </div>
  );
}
