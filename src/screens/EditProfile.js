import React from "react";
import { editprofile } from "../assets";
import { useNavigate, Outlet } from "react-router-dom";

export default function EditProfile() {
  return (
    <>
      <img
        src={editprofile}
        alt="editprofile"
        className="dashbaord__jumbotron"
      />
      <div className="dashbaord__content">
        <div className="dashbaord__content__sidebar">
          <div className="dashbaord__content__sidebar__heading">
            Edit Profile
          </div>
          <SidebarLink to="/editprofile">Basic Details</SidebarLink>
          <SidebarLink to="/editprofile/experiance">
            Work Experience
          </SidebarLink>
          <SidebarLink to="/editprofile/award">Awards</SidebarLink>
          <SidebarLink to="/editprofile/education">Education</SidebarLink>
          <SidebarLink to="/editprofile/skills">Skills</SidebarLink>
          <SidebarLink to="/editprofile/languages">Languages</SidebarLink>
        </div>
        <div className="dashbaord__content__main">
          <Outlet />
        </div>
      </div>
    </>
  );
}

function SidebarLink({ to, children }) {
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
