import React from "react";
import passwordback from "../assets/passback.png";
import { cornerbg } from "../assets";
import { Link } from "react-router-dom";

export default function Forget() {
  return (
    <div className="forget__password">
      <div className="forget__password_backimg">
        <img
          className="forget__password_backimage"
          src={passwordback}
          alt="adssad"
        />
      </div>
      <div className="forget__password__overlay">
        <div className="forget__password__overlay__left">
          <img className="cornerbg__img" src={cornerbg} alt="" />
          <div className="forget__password__overlay__left_box">
            <div className="forget__password__overlay__left__heading">
              Forgot Password
            </div>
            <div className="forget__password__overlay__left__svg_input">
              <svg
                className="forget__password__overlay__left__svg"
                id="Mail"
                xmlns="http://www.w3.org/2000/svg"
                width="18.75"
                height="15.368"
                viewBox="0 0 18.75 15.368"
              >
                <path
                  id="Path_642"
                  data-name="Path 642"
                  d="M16.406,2.561H2.344l7.031,6.4ZM0,2.561A2.467,2.467,0,0,1,2.344,0H16.406A2.467,2.467,0,0,1,18.75,2.561V12.807a2.467,2.467,0,0,1-2.344,2.561H2.344A2.467,2.467,0,0,1,0,12.807Z"
                  fill="#dfacfc"
                  fill-rule="evenodd"
                />
              </svg>

              <input
                className="forget__password__overlay__left__input"
                type="email"
                placeholder="Email"
              />
            </div>

            <Link
              to="/forgetotp"
              className="forget__password__overlay__left__sendpassword"
            >
              Send Password
            </Link>
          </div>
        </div>
        <div className="forget__password__overlay__right">
          <div className="forget__password__overlay__right_heading">
            Forgot Password
          </div>
          <div className="forget__password__overlay__right_lorem">
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
        </div>
      </div>
    </div>
  );
}
