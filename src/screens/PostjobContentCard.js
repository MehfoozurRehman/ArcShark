import React from "react";
import { user } from "../assets";

export function PostjobContentCard({ setPostJobDetailsPopupVisible }) {
  return (
    <button
      className="postjob__card__entry"
      onClick={() => {
        setPostJobDetailsPopupVisible(true);
      }}
    >
      <div className="postjob__card__entry__user__detail">
        <div className="postjob__card__entry__user__detail__name__heading">
          Hammad Habib
        </div>
        <div className="postjob__card__entry__name__subheading">
          <div className="postjob__card__entry__name__subheading__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.029"
              height="20.131"
              viewBox="0 0 20.029 20.131"
              fill="#5b57a4"
            >
              <path
                id="Icon_awesome-shopping-bag"
                data-name="Icon awesome-shopping-bag"
                d="M15.737,6.291V5.033C15.737,2.258,13.17,0,10.014,0S4.292,2.258,4.292,5.033V6.291H0V16.986a3.382,3.382,0,0,0,3.577,3.146H16.452a3.382,3.382,0,0,0,3.577-3.146V6.291ZM7.153,5.033a2.709,2.709,0,0,1,2.861-2.516,2.709,2.709,0,0,1,2.861,2.516V6.291H7.153Zm7.153,4.718a1.015,1.015,0,0,1-1.073-.944,1.082,1.082,0,0,1,2.146,0A1.015,1.015,0,0,1,14.306,9.751Zm-8.584,0A1.015,1.015,0,0,1,4.65,8.807a1.015,1.015,0,0,1,1.073-.944A1.015,1.015,0,0,1,6.8,8.807,1.015,1.015,0,0,1,5.723,9.751Z"
              />
            </svg>
            Part-time
          </div>
          <div className="postjob__card__entry__name__subheading__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.627"
              height="18.141"
              viewBox="0 0 20.627 18.141"
              fill="#5b57a4"
            >
              <g
                id="Group_539"
                data-name="Group 539"
                transform="translate(-163.397 -1)"
              >
                <path
                  id="Icon_ionic-ios-time"
                  data-name="Icon ionic-ios-time"
                  d="M13.689,3.375c-5.7,0-10.314,4.06-10.314,9.071s4.616,9.071,10.314,9.071S24,17.456,24,12.446,19.386,3.375,13.689,3.375Zm.694,9.855a.658.658,0,0,1-.694.611H8.928a.616.616,0,1,1,0-1.221h4.066V6.864a.7.7,0,0,1,1.388,0Z"
                  transform="translate(160.022 -2.375)"
                />
              </g>
            </svg>
            2 hour ago
          </div>
        </div>

        <div className="postjob__card__entry__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum s simply dummy text of the printing Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum s simply dummy text of the printing
        </div>

        <div className="home__content__card__entry__company__name">
          <div className="home__content__card__entry__company__name__avatar">
            <img src={user} alt="user" />
          </div>
          <div className="home__content__card__entry__company__name__heading">
            <div>Company Name</div>
            <div className="home__content__card__entry__company__name__heading__location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                viewBox="0 0 13.241 16.636"
              >
                <path
                  id="Icon_material-location-on"
                  data-name="Icon material-location-on"
                  d="M14.121,3C10.46,3,7.5,5.6,7.5,8.823c0,4.367,6.621,10.813,6.621,10.813s6.621-6.446,6.621-10.813C20.741,5.6,17.781,3,14.121,3Zm0,7.9a2.237,2.237,0,0,1-2.364-2.08,2.237,2.237,0,0,1,2.364-2.08,2.237,2.237,0,0,1,2.364,2.08A2.237,2.237,0,0,1,14.121,10.9Z"
                  transform="translate(-7.5 -3)"
                  fill="currentColor"
                />
              </svg>
              <div className="home__content__card__entry__company__name__heading__location__text">
                Pakistan, punjab
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
