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
          <SidebarLink to="/settings">Edit profile</SidebarLink>
          <SidebarLink to="/settings/changepassword">
            Change Password
          </SidebarLink>
          <SidebarLink to="/settings/jobposting">Job Postings</SidebarLink>
          <SidebarLink to="/settings/block">Block / Report</SidebarLink>
        </div>
        <div className="dashbaord__content__main">
          <Outlet />
        </div>
      </div>
    </>
  );
}
