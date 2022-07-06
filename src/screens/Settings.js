import React from "react";
import { editprofile } from "../assets";
import { Outlet } from "react-router-dom";
import { SidebarLink } from "../components/SidebarLink";

export default function Settings() {
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
          <SidebarLink to="/settings">Basic Details</SidebarLink>
          <SidebarLink to="/settings/experiance">Work Experience</SidebarLink>
          <SidebarLink to="/settings/award">Awards</SidebarLink>
          <SidebarLink to="/settings/education">Education</SidebarLink>
          <SidebarLink to="/settings/skills">Skills</SidebarLink>
          <SidebarLink to="/settings/languages">Languages</SidebarLink>
        </div>
        <div className="dashbaord__content__main">
          <Outlet />
        </div>
      </div>
    </>
  );
}
