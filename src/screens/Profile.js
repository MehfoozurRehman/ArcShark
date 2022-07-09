import React from "react";
import { usersigninpage } from "../assets";
import { ProfileSidebarAbout } from "../components/ProfileSidebarAbout";
import { ProfileSidebarAdditional } from "../components/ProfileSidebarAdditional";
import { ProfileSidebarCta } from "../components/ProfileSidebarCta";
import { ProfileSidebarLinks } from "../components/ProfileSidebarLinks";
import { ProfileSidebarProfile } from "../components/ProfileSidebarProfile";
import { ProfileSidebarSocials } from "../components/ProfileSidebarSocials";
import { ProfileSidebarStats } from "../components/ProfileSidebarStats";
import { ProfileMainTop } from "../components/ProfileMainTop";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "react-reveal";
import "swiper/scss";

export default function Profile({ user }) {
  return (
    <>
      <img
        src={usersigninpage}
        alt="user__profile"
        className="user__profile__img"
      />
      <div className="user__profile__content">
        <Reveal>
          <div className="user__profile__content__sidebar">
            <ProfileSidebarProfile />
            <ProfileSidebarLinks />
            <ProfileSidebarCta user={user} />
            <ProfileSidebarStats />
            <ProfileSidebarAbout />
            <ProfileSidebarSocials />
            {user ? null : <ProfileSidebarAdditional />}
          </div>
        </Reveal>
        <Reveal>
          <div className="user__profile__content__main">
            {user ? null : <ProfileMainTop />}
            <div className="user__profile__content__main__bottom">
              <div
                className="home__content"
                style={{ marginTop: 0, padding: 0 }}
              >
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
                <ProjectCard hovertext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nisi neque sit minima eaque officia dolore mollitia? Sunt, ipsam quaerat!" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
