import React from "react";
import { user as userPic } from "../assets";

export function ProfileSidebarProfile() {
  return (
    <div className="user__profile__content__sidebar__profile">
      <img
        src={userPic}
        alt="user"
        className="user__profile__content__sidebar__profile__img"
      />
      <div className="user__profile__content__sidebar__profile__content">
        <div className="user__profile__content__sidebar__profile__content__heading">
          Username
        </div>
        <div className="user__profile__content__sidebar__profile__content__info">
          Design & Art Direction
        </div>
      </div>
    </div>
  );
}
