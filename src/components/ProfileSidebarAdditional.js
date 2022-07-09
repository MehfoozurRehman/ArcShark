import React, { useContext } from "react";
import { BlockUserPopupContext } from "../App";

export function ProfileSidebarAdditional({}) {
  const setBlockUserPopupVisible = useContext(BlockUserPopupContext);
  return (
    <div className="user__profile__content__sidebar__additional">
      <div className="user__profile__content__sidebar__additional__info">
        Member Since
      </div>
      <button
        className="user__profile__content__sidebar__additional__button"
        onClick={() => {
          setBlockUserPopupVisible(true);
        }}
      >
        Block | Report
      </button>
    </div>
  );
}
