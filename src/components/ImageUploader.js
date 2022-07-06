import React, { useState } from "react";
import { Plus } from "react-feather";

export function ImageUploader({}) {
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
