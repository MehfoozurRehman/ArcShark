import React from "react";

export default function Aboutcards({ img, title, text }) {
  return (
    <div className="about__heading__here__cards">
      <div className="about__heading__here__cards__img">{img}</div>
      <div className="about__heading__here__cards__heading">{title}</div>
      <div className="about__heading__here__cards__text">{text}</div>
    </div>
  );
}
