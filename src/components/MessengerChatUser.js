import React from "react";
import { user } from "../assets";

export function MessengerChatUser({ defaultChecked }) {
  return (
    <div className="messenger__content__sidebar__content__entry">
      <input
        type="radio"
        className="messenger__content__sidebar__content__entry__input"
        name="messenger__content__sidebar__content__entry"
        defaultChecked={defaultChecked}
      />
      <div className="messenger__content__sidebar__content__entry__content">
        <img
          src={user}
          alt="user"
          className="messenger__content__sidebar__content__entry__img"
        />
        <div className="messenger__content__sidebar__content__entry__content__content">
          <div className="messenger__content__sidebar__content__entry__content__heading">
            Username
          </div>
          <div className="messenger__content__sidebar__content__entry__content__info">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </div>
  );
}
