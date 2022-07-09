import React from "react";
import { sharebg } from "../assets";
import TextareaInput from "../components/TextareaInput";
import TextInput from "../components/TextInput";
import { ImageUploaderMulti } from "../components/ImageUploaderMulti";
import { ImageUploader } from "../components/ImageUploader";

export default function ShareWork() {
  return (
    <div className="share__work__container">
      <img
        src={sharebg}
        alt="sharebg"
        className="share__work__container__img"
      />
      <div className="share__work__container__overlay__wrapper">
        <div className="share__work__container__overlay">
          <div className="share__work__container__overlay__header">
            <div className="share__work__container__overlay__heading">
              Share Your Work
            </div>
            <button className="share__work__container__overlay__header__button">
              Share
            </button>
          </div>
          <div className="share__work__container__overlay__top">
            <div className="share__work__container__overlay__left">
              <div className="share__work__container__overlay__left__top">
                <TextInput placeholder="Project Name" />
              </div>
              <div className="share__work__container__overlay__left__bottom">
                <TextareaInput placeholder="Project Short Description" />
                <TextareaInput placeholder="Project Long Description" />
              </div>
            </div>
            <div className="share__work__container__overlay__right">
              <ImageUploader />
            </div>
          </div>
          <ImageUploaderMulti />
        </div>
      </div>
    </div>
  );
}
