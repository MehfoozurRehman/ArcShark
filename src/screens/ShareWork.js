import React, { useEffect, useState } from "react";
import { sharebg } from "../assets";
import TextareaInput from "../components/TextareaInput";
import TextInput from "../components/TextInput";
import { Plus } from "react-feather";

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
          <div className="share__work__container__overlay__heading">
            Share Your Work
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

function ImageUploader({}) {
  const [image, setImage] = useState(null);
  return (
    <div className="share__work__container__overlay__right__upload">
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
        className="share__work__container__overlay__right__upload__input"
      />

      {image === null ? (
        <div className="share__work__container__overlay__right__upload__content">
          <Plus size={20} color="#fff" />
          Project Thumbnail
        </div>
      ) : (
        <>
          <img
            src={URL.createObjectURL(image)}
            alt={image}
            className="share__work__container__overlay__right__upload__content"
          />
        </>
      )}
    </div>
  );
}

function ImageUploaderMulti({}) {
  return (
    <div className="share__work__container__overlay__right__upload">
      <input
        type="file"
        multiple
        className="share__work__container__overlay__right__upload__input"
      />

      <div className="share__work__container__overlay__right__upload__content">
        <Plus size={20} color="#fff" />
        Project Images
      </div>
    </div>
  );
}
