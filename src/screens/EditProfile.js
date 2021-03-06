import React from "react";
import { editprofile } from "../assets";
import { Outlet } from "react-router-dom";
import { SidebarLink } from "../components/SidebarLink";

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
