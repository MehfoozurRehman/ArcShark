import React, { useEffect, useState } from "react";
import { ProfileMainTopContentLanguages } from "./ProfileMainTopContentLanguages";
import { ProfileMainTopContentAwards } from "./ProfileMainTopContentAwards";
import { ProfileMainTopContentSkills } from "./ProfileMainTopContentSkills";
import { ProfileMainTopContentEducation } from "./ProfileMainTopContentEducation";
import { ProfileMainTopContentWorkExperience } from "./ProfileMainTopContentWorkExperience";
import { ProfileMainTopTab } from "./ProfileMainTopTab";

export function ProfileMainTop({}) {
  const [slidesPerPage, setSlidesPerPage] = useState(5);
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setSlidesPerPage(1);
    } else if (window.innerWidth <= 700) {
      setSlidesPerPage(2);
    } else if (window.innerWidth <= 800) {
      setSlidesPerPage(3);
    } else if (window.innerWidth <= 900) {
      setSlidesPerPage(1);
    } else if (window.innerWidth <= 1070) {
      setSlidesPerPage(2);
    } else if (window.innerWidth <= 1300) {
      setSlidesPerPage(3);
    } else {
      setSlidesPerPage(4);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 700) {
        setSlidesPerPage(2);
      } else if (window.innerWidth <= 800) {
        setSlidesPerPage(3);
      } else if (window.innerWidth <= 900) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 1070) {
        setSlidesPerPage(2);
      } else if (window.innerWidth <= 1300) {
        setSlidesPerPage(3);
      } else {
        setSlidesPerPage(4);
      }
    });
  }, []);
  const [selectedTab, setSelectedTab] = useState("Work Experience");
  console.log(selectedTab);
  return (
    <div className="user__profile__content__main__top">
      <div className="user__profile__content__main__top__tabs">
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Work Experience
        </ProfileMainTopTab>
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Education
        </ProfileMainTopTab>
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Skills
        </ProfileMainTopTab>
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Awards
        </ProfileMainTopTab>
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Languages
        </ProfileMainTopTab>
      </div>
      <div className="user__profile__content__main__top__content">
        {selectedTab === "Work Experience" ? (
          <ProfileMainTopContentWorkExperience slidesPerPage={slidesPerPage} />
        ) : selectedTab === "Education" ? (
          <ProfileMainTopContentEducation slidesPerPage={slidesPerPage} />
        ) : selectedTab === "Skills" ? (
          <ProfileMainTopContentSkills slidesPerPage={slidesPerPage} />
        ) : selectedTab === "Awards" ? (
          <ProfileMainTopContentAwards slidesPerPage={slidesPerPage} />
        ) : selectedTab === "Languages" ? (
          <ProfileMainTopContentLanguages slidesPerPage={slidesPerPage} />
        ) : null}
      </div>
    </div>
  );
}
