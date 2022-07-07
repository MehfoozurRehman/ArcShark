import React from "react";

export function ProfileSidebarStatsEntry({ icon, value, label }) {
  return (
    <div className="user__profile__content__sidebar__stats__entry">
      <div className="user__profile__content__sidebar__stats__entry__icon">
        {icon}
      </div>
      <div className="user__profile__content__sidebar__stats__entry__content">
        <div className="user__profile__content__sidebar__stats__entry__content__heading">
          {value}
        </div>
        <div className="user__profile__content__sidebar__stats__entry__content__info">
          {label}
        </div>
      </div>
    </div>
  );
}
