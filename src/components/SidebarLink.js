import React from "react";
import { useNavigate } from "react-router-dom";

export function SidebarLink({ to, children }) {
  const navigate = useNavigate();
  return (
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
  );
}
