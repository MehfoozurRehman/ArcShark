import React from "react";
import { user } from "../assets";
import Popup from "./Popup";

export default function PostJobDetailsPopup({ onClose }) {
  return (
    <Popup
      heading="Graphic Designer"
      buttonLabel="Post a job"
      onClose={onClose}
      onClick={onClose}
    >
      <div className="post__job__pupup__details">
        <div className="post__job__pupup__details__left">
          <div className="post__job__pupup__details__left__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit labore numquam quasi obcaecati sequi consequuntur
            dignissimos in! Veritatis, magni cumque, placeat deserunt porro quae
            aut rem reiciendis ipsum et veniam maiores provident quod
            reprehenderit dignissimos dolorem! Similique earum eum, eius sed
            quod nulla. Molestias, debitis amet! Odit delectus ipsa assumenda
            quod nulla. Molestias, debitis amet! Odit delectus ipsa assumenda
            quidem nemo, dolorem necessitatibus perferendis nisi laudantium amet
            quod nulla. Molestias, debitis amet! Odit delectus ipsa assumenda
            quidem nemo, dolorem necessitatibus perferendis nisi laudantium amet
            quidem nemo, dolorem necessitatibus perferendis nisi laudantium amet
          </div>
          <div className="post__job__pupup__details__left__company">
            <img
              src={user}
              alt="user"
              className="post__job__pupup__details__left__company__logo"
            />
            <div className="post__job__pupup__details__left__company__content">
              <div className="post__job__pupup__details__left__company__content__heading">
                Company
              </div>
              <div className="post__job__pupup__details__left__company__content__location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.284"
                  height="17.548"
                  viewBox="0 0 12.284 17.548"
                >
                  <path
                    id="Icon_material-location-on"
                    data-name="Icon material-location-on"
                    d="M13.642,3A6.137,6.137,0,0,0,7.5,9.142c0,4.606,6.142,11.406,6.142,11.406s6.142-6.8,6.142-11.406A6.137,6.137,0,0,0,13.642,3Zm0,8.335a2.194,2.194,0,1,1,2.194-2.194A2.194,2.194,0,0,1,13.642,11.335Z"
                    transform="translate(-7.5 -3)"
                    fill="#5b58a5"
                  />
                </svg>
                Pakistan, punjab
              </div>
            </div>
          </div>
        </div>
        <div className="post__job__pupup__details__right">
          <div className="post__job__pupup__details__right__entry">
            <div className="post__job__pupup__details__right__entry__heading">
              Job Type
            </div>
            <div className="post__job__pupup__details__right__entry__info">
              Full Time
            </div>
          </div>
          <div className="post__job__pupup__details__right__entry">
            <div className="post__job__pupup__details__right__entry__heading">
              Job Type
            </div>
            <div className="post__job__pupup__details__right__entry__info">
              Full Time
            </div>
          </div>
          <div className="post__job__pupup__details__right__entry">
            <div className="post__job__pupup__details__right__entry__heading">
              Job Type
            </div>
            <div className="post__job__pupup__details__right__entry__info">
              Full Time
            </div>
          </div>
          <div className="post__job__pupup__details__right__entry">
            <div className="post__job__pupup__details__right__entry__heading">
              Job Type
            </div>
            <div className="post__job__pupup__details__right__entry__info">
              Full Time
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
