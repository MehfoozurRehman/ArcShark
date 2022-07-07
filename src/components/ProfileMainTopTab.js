import React from "react";

export function ProfileMainTopTab({ selected, setSelected, children }) {
  return (
    <div className="user__profile__content__main__top__tabs__entry">
      <input
        type="radio"
        className="user__profile__content__main__top__tabs__entry__input"
        name="user__profile__content__main__top__tabs__entry"
        checked={selected === children}
        defaultChecked={selected === children}
        onChange={() => setSelected(children)}
      />
      <div className="user__profile__content__main__top__tabs__entry__content">
        {children}
      </div>
    </div>
  );
}
