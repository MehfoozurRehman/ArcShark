import React from "react";
import { Plus } from "react-feather";

export function ImageUploaderMulti() {
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
