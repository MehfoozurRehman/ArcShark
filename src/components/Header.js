import React, { useLayoutEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { X, Menu } from "react-feather";
import { logo, user } from "../assets";
import { Link } from "react-router-dom";

export default function Header() {
  const [isUser, setIsUser] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isMessagePanelOpen, setIsMessagePanelOpen] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  useLayoutEffect(() => {
    function navStatus() {
      if (window.innerWidth < 1000) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    }
    navStatus();
    window.addEventListener("resize", navStatus);
  }, []);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content__left">
          <Link to="/" className="header__content__left__logo">
            <img
              src={logo}
              alt="arcsharklogo"
              className="header__content__left__logo__img"
            />
          </Link>
          {isNavOpen ? (
            <div className="header__content__left__nav">
              <Link to="/" className="header__content__left__nav__link">
                Discover
              </Link>
              <Link to="/jobs" className="header__content__left__nav__link">
                Jobs
              </Link>
            </div>
          ) : null}
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
              <button
                className="header__content__right__button__icon"
                onClick={() => {
                  setIsMessagePanelOpen(!isMessagePanelOpen);
                }}
              >
                <svg
                  id="Icon_ionic-ios-mail-unread"
                  data-name="Icon ionic-ios-mail-unread"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  viewBox="0 0 31.734 23.19"
                >
                  <path
                    id="Path_683"
                    data-name="Path 683"
                    d="M33.2,10.974a3.662,3.662,0,1,1-3.662-3.662A3.662,3.662,0,0,1,33.2,10.974Z"
                    transform="translate(-1.464 -7.313)"
                    fill="currentColor"
                  />
                  <g
                    id="Group_207"
                    data-name="Group 207"
                    transform="translate(0 1.221)"
                  >
                    <path
                      id="Path_684"
                      data-name="Path 684"
                      d="M31.447,15.744a5.083,5.083,0,0,1-1.19-.145l-3.616,3.684a.147.147,0,0,0,0,.214l5.744,6.118a.99.99,0,0,1,0,1.4.994.994,0,0,1-1.4,0l-5.721-6.1a.157.157,0,0,0-.221,0l-1.4,1.419a6.142,6.142,0,0,1-4.379,1.846,6.265,6.265,0,0,1-4.47-1.9l-1.343-1.365a.157.157,0,0,0-.221,0l-5.721,6.1a.994.994,0,0,1-1.4,0,.99.99,0,0,1,0-1.4L11.85,19.5a.162.162,0,0,0,0-.214L3.634,10.923a.15.15,0,0,0-.259.107V27.759A2.448,2.448,0,0,0,5.816,30.2H32.668a2.448,2.448,0,0,0,2.441-2.441V14.181A5.061,5.061,0,0,1,31.447,15.744Z"
                      transform="translate(-3.375 -8.23)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_685"
                      data-name="Path 685"
                      d="M26.3,10.879a5.07,5.07,0,0,1,.626-2.441H5.736a2.382,2.382,0,0,0-1.51.534L16.195,21.154a4.181,4.181,0,0,0,5.965,0L28.3,14.906A5.047,5.047,0,0,1,26.3,10.879Z"
                      transform="translate(-3.303 -8.438)"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
              {isMessagePanelOpen ? (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setIsMessagePanelOpen(false);
                  }}
                >
                  <div className="header__content__right__panel header__content__right__panel__message">
                    <div className="header__content__right__panel__header">
                      <div className="header__content__right__panel__header__heading">
                        Messages
                      </div>
                      <button className="header__content__right__panel__header__button">
                        Clear All
                      </button>
                    </div>
                    <div className="header__content__right__panel__content"></div>
                  </div>
                </OutsideClickHandler>
              ) : null}
              <button
                className="header__content__right__button__icon"
                onClick={() => {
                  setIsNotificationPanelOpen(!isNotificationPanelOpen);
                }}
              >
                <svg
                  id="Icon_ionic-ios-notifications"
                  data-name="Icon ionic-ios-notifications"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="23"
                  viewBox="0 0 21.121 26.416"
                >
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M17.786,31.835c2.053,0,3.176-1.453,3.176-3.5H14.6C14.6,30.383,15.726,31.835,17.786,31.835Z"
                    transform="translate(-7.239 -5.419)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M27.614,23.493C26.6,22.153,24.6,21.367,24.6,15.366c0-6.16-2.72-8.636-5.256-9.23-.238-.059-.409-.139-.409-.39V5.555a1.611,1.611,0,1,0-3.222,0v.191c0,.244-.172.33-.409.39-2.542.6-5.256,3.07-5.256,9.23,0,6-2,6.781-3.017,8.128a1.311,1.311,0,0,0,1.05,2.1H26.571A1.311,1.311,0,0,0,27.614,23.493Z"
                    transform="translate(-6.761 -3.93)"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {isNotificationPanelOpen ? (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setIsNotificationPanelOpen(false);
                  }}
                >
                  <div className="header__content__right__panel header__content__right__panel__notifications">
                    <div className="header__content__right__panel__header">
                      <div className="header__content__right__panel__header__heading">
                        Notifications
                      </div>
                      <button className="header__content__right__panel__header__button">
                        Clear All
                      </button>
                    </div>
                    <div className="header__content__right__panel__content">
                      <PanelEntry />
                      <PanelEntry />
                      <PanelEntry />
                      <PanelEntry />
                      <PanelEntry />
                    </div>
                  </div>
                </OutsideClickHandler>
              ) : null}
              <button
                className="header__content__right__button__avatar"
                onClick={() => {
                  setIsUserPanelOpen(!isUserPanelOpen);
                }}
              >
                <img
                  src={user}
                  alt="user"
                  className="header__content__right__button__avatar__img"
                />
              </button>
              {isUserPanelOpen ? (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setIsUserPanelOpen(false);
                  }}
                >
                  <div className="header__content__right__panel header__content__right__panel__user">
                    <div className="header__content__right__panel__content">
                      <a
                        href="#"
                        className="header__content__right__panel__content__button"
                      >
                        Profile
                      </a>
                      <button className="header__content__right__panel__content__button">
                        Logout
                      </button>
                    </div>
                  </div>
                </OutsideClickHandler>
              ) : null}
            </>
          ) : (
            <>
              <Link
                to="/sign_in"
                className="header__content__right__button header__content__right__button__primary"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="header__content__right__button header__content__right__button__secondary"
              >
                Sign Up
              </Link>
            </>
          )}
          <button
            className="header__content__right__menu"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            {isNavOpen ? (
              <X size={20} color="currentcolor" />
            ) : (
              <Menu size={20} color="currentcolor" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function PanelEntry({}) {
  return (
    <a href="#" className="header__content__right__panel__content__entry">
      <div className="header__content__right__panel__content__entry__heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="header__content__right__panel__content__entry__info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed
        maxime veniam at sint vel inventore ex cum excepturi ullam?
      </div>
    </a>
  );
}
