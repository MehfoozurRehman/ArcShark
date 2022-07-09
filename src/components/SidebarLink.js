import React from "react";
import { useNavigate } from "react-router-dom";
import { Reveal } from "react-reveal";

export function SidebarLink({ to, children }) {
  const navigate = useNavigate();
  return (
    <Reveal>
      <div className="dashbaord__content__sidebar__link">
        <input
          type="radio"
          className="dashbaord__content__sidebar__link__input"
          name="dashbaord__content__sidebar__link"
          onChange={() => {
            navigate(to);
          }}
          defaultChecked={window.location.pathname === to}
        />
        <div className="dashbaord__content__sidebar__link__content">
          {children}
        </div>
      </div>
    </Reveal>
  );
}
