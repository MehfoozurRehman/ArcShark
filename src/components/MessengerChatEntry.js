import React from "react";
import { user } from "../assets";

export function MessengerChatEntry({ isUser, data }) {
  return (
    <div
      className={
        isUser
          ? "messenger__content__main__chat__entry messenger__content__main__chat__entry__user"
          : "messenger__content__main__chat__entry"
      }
    >
      <img
        src={user}
        alt="user"
        className="messenger__content__main__chat__entry__img"
      />
      <div className="messenger__content__main__chat__entry__text">{data}</div>
    </div>
  );
}
