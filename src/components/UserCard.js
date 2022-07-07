import React from "react";
import { user } from "../assets";
import fbicon from "../assets/fb.png";
import linkedinicon from "../assets/linkedin.png";
import beicon from "../assets/be.png";
import twittericon from "../assets/twitter.png";
import instagrameicon from "../assets/instag.png";
import youtubeicon from "../assets/youtube.png";
import pinteresticon from "../assets/pinterest.png";

export function UserCard({}) {
  return (
    <a href="#" className="home__content__card__entry">
      <div className="home__content__entry__content">
        <img src={user} width={70} height={70} alt="user" />
      </div>
      <div className="home__content__card__entry__user__detail">
        <div className="home__content__card__entry__name__heading">
          Hammad Habib
        </div>
        <div className="home__content__card__entry__name__subheading">
          Graphic designer from google
        </div>

        <div className="home__content__card__entry__location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="18"
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
          <div className="home__content__card__entry__location__country__name">
            Pakistan, punjab
          </div>
        </div>
        <div className="home__content__card__entry__follower">
          <div className="home__content__card__entry__follower__entry">
            <div className="home__content__card__entry__follower__entry__counter">
              50.3K
            </div>
            <div>Followers</div>
          </div>
          <div className="home__content__card__entry__follower__entry">
            <div className="home__content__card__entry__follower__entry__counter">
              50.3K
            </div>
            <div>Following</div>
          </div>
          <div className="home__content__card__entry__follower__entry">
            <div className="home__content__card__entry__follower__entry__counter">
              112
            </div>
            <div>Projects</div>
          </div>
        </div>
        <div className="home__content__card__entry__social__content">
          <img src={fbicon} alt="/" />
          <img src={linkedinicon} alt="/" />
          <img src={beicon} alt="/" />
          <img src={twittericon} alt="/" />
          <img src={instagrameicon} alt="/" />
          <img src={youtubeicon} alt="/" />
          <img src={pinteresticon} alt="/" />
        </div>
        <div className="home__content__card__buttons">
          <button className="home__content__card__buttons__btn__follow">
            Follow
          </button>
          <button className="home__content__card__buttons__btn__hire__me">
            Hire Me
          </button>
        </div>
      </div>
    </a>
  );
}
