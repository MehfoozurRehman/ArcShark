import React, { useEffect } from "react";
import { X, Plus } from "react-feather";
import { user } from "../assets";
import { Reveal } from "react-reveal";

function openImage(url) {
  window.open(url, "_blank");
}

export default function ProjectDetails({ onClose }) {
  const imageArray = [
    "https://images.unsplash.com/photo-1657311277146-7ea9e88a3701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1657382451966-3448f72ea564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    "https://images.unsplash.com/photo-1657381870981-254e9d08256f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="project__details__container">
      <button
        className="project__details__container__content__close"
        onClick={onClose}
      >
        <X size={22} color="currentColor" />
      </button>
      <div className="project__details__container__content">
        <div className="project__details__container__content__heading">
          Project Name Here
        </div>
        <div className="project__details__container__content__info">
          Artist name here
        </div>
        <div className="project__details__container__content__info__main">
          <div className="project__details__container__content__info__main__images">
            {imageArray.map((image) => (
              <Reveal>
                <img
                  src={image}
                  alt="unsplash"
                  className="project__details__container__content__img"
                  onClick={() => {
                    openImage(image);
                  }}
                />
              </Reveal>
            ))}
            <div className="project__details__container__content__form">
              <div className="project__details__container__content__form__left">
                <div className="project__details__container__content__form__left__heading">
                  Comments
                </div>
                <div className="project__details__container__content__form__left__form">
                  <img
                    src={user}
                    alt=""
                    className="project__details__container__content__form__left__form__img"
                  />
                  <div className="project__details__container__content__form__left__form__right">
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="What are your thoughts on this process?"
                      className="project__details__container__content__form__left__form__input"
                    />
                    <button className="project__details__container__content__form__left__form__right__button">
                      Post
                    </button>
                  </div>
                </div>
                <div className="project__details__container__content__form__left__comments">
                  <CommentsEntry />
                  <CommentsEntry />
                  <CommentsEntry />
                  <CommentsEntry />
                  <CommentsEntry />
                  <CommentsEntry />
                </div>
              </div>
              <div className="project__details__container__content__form__right">
                <div className="project__details__container__content__form__right__user">
                  <img
                    src={user}
                    alt=""
                    className="project__details__container__content__form__right__user__img"
                  />
                  <div className="project__details__container__content__form__right__user__content">
                    <div className="project__details__container__content__form__right__user__content__heading">
                      Hammad Habib
                    </div>
                    <div className="project__details__container__content__form__right__user__content__info">
                      Faisalabad, Pakistan
                    </div>
                  </div>
                </div>
                <div className="project__details__container__content__form__right__stats">
                  <div className="project__details__container__content__form__right__stats__entry">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.024"
                      height="12.297"
                      viewBox="0 0 19.024 12.297"
                    >
                      <path
                        id="Path_1494"
                        data-name="Path 1494"
                        d="M426.669,45.3a2.551,2.551,0,0,1-.716,1.084,16.723,16.723,0,0,1-4.736,3.794,9,9,0,0,1-3.363,1.016,8.29,8.29,0,0,1-4.083-.706,14.146,14.146,0,0,1-4.131-2.815c-.576-.551-1.113-1.143-1.647-1.734a1.236,1.236,0,0,1-.04-1.677,17.022,17.022,0,0,1,4.673-4.018,9.788,9.788,0,0,1,3.559-1.251,8.02,8.02,0,0,1,4.015.536,13.339,13.339,0,0,1,4.249,2.729c.655.609,1.258,1.276,1.862,1.939a3.1,3.1,0,0,1,.358.657Zm-9.515,3.868a4.09,4.09,0,1,0-4.08-4.1A4.083,4.083,0,0,0,417.154,49.165Z"
                        transform="translate(-407.645 -38.926)"
                        fill="#5b58a5"
                      />
                    </svg>
                    <span>2043</span>
                    views
                  </div>
                  <div className="project__details__container__content__form__right__stats__entry">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.001"
                      height="17.001"
                      viewBox="0 0 17.001 17.001"
                    >
                      <path
                        id="Icon_awesome-thumbs-up"
                        data-name="Icon awesome-thumbs-up"
                        d="M3.453,7.438H.8a.8.8,0,0,0-.8.8V16.2a.8.8,0,0,0,.8.8H3.453a.8.8,0,0,0,.8-.8V8.235A.8.8,0,0,0,3.453,7.438ZM2.125,15.673a.8.8,0,1,1,.8-.8A.8.8,0,0,1,2.125,15.673ZM12.751,2.7c0,1.408-.862,2.2-1.1,3.139h3.378A1.984,1.984,0,0,1,17,7.773a2.4,2.4,0,0,1-.645,1.634l0,0a2.774,2.774,0,0,1-.309,2.639,2.626,2.626,0,0,1-.544,2.482,1.763,1.763,0,0,1-.2,1.482c-.678.974-2.357.987-3.778.987h-.094a9.532,9.532,0,0,1-3.97-1.053A5.226,5.226,0,0,0,5.7,15.41a.4.4,0,0,1-.391-.4v-7.1a.4.4,0,0,1,.118-.283c1.315-1.3,1.881-2.676,2.959-3.756a4.021,4.021,0,0,0,.843-1.956C9.381,1.3,9.69,0,10.36,0,11.157,0,12.751.266,12.751,2.7Z"
                        fill="#5b58a5"
                      />
                    </svg>
                    <span>2043</span>
                    likes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project__details__container__content__sidebar">
            <Reveal>
              <button className="project__details__container__content__sidebar__user">
                <img
                  src={user}
                  alt="user"
                  className="project__details__container__content__sidebar__user__img"
                />
                <div className="project__details__container__content__sidebar__user__button">
                  <Plus size={18} color="currentColor" />
                </div>
                <div className="project__details__container__content__sidebar__user__text">
                  Follow
                </div>
              </button>
            </Reveal>
            <Reveal>
              <button className="project__details__container__content__sidebar__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                >
                  <path
                    id="Icon_material-thumb-up"
                    data-name="Icon material-thumb-up"
                    d="M1.5,31.5h6v-18h-6ZM34.5,15a3.009,3.009,0,0,0-3-3H22.035L23.46,5.145l.045-.48a2.258,2.258,0,0,0-.66-1.59L21.255,1.5l-9.87,9.885A2.933,2.933,0,0,0,10.5,13.5v15a3.009,3.009,0,0,0,3,3H27a2.98,2.98,0,0,0,2.76-1.83L34.29,19.1A2.964,2.964,0,0,0,34.5,18V15.135l-.015-.015Z"
                    transform="translate(-1.5 -1.5)"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </Reveal>
            <Reveal>
              <button className="project__details__container__content__sidebar__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33.182"
                  height="33.182"
                  viewBox="0 0 33.182 33.182"
                >
                  <g
                    id="Icon_feather-edit"
                    data-name="Icon feather-edit"
                    transform="translate(-1.5 -1.318)"
                  >
                    <path
                      id="Path_3189"
                      data-name="Path 3189"
                      d="M16.5,6H6A3,3,0,0,0,3,9V30a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V19.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_3190"
                      data-name="Path 3190"
                      d="M27.75,3.75a3.182,3.182,0,0,1,4.5,4.5L18,22.5,12,24l1.5-6Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentsEntry({}) {
  return (
    <div className="project__details__container__content__form__left__comments__entry">
      <img
        src={user}
        alt="user"
        className="project__details__container__content__form__left__comments__entry__img"
      />
      <div className="project__details__container__content__form__left__comments__entry__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis
        fuga et libero ea velit? Numquam quas veritatis ipsa at explicabo odio
      </div>
    </div>
  );
}
