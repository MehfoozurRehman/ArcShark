import React, { useState } from "react";
import { ProfileMainTopContentLanguages } from "./ProfileMainTopContentLanguages";
import { ProfileMainTopContentAwards } from "./ProfileMainTopContentAwards";
import { ProfileMainTopContentSkills } from "./ProfileMainTopContentSkills";
import { ProfileMainTopContentEducation } from "./ProfileMainTopContentEducation";
import { ProfileMainTopContentWorkExperience } from "./ProfileMainTopContentWorkExperience";
import { ProfileMainTopTab } from "./ProfileMainTopTab";

export function ProfileMainTop({}) {
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
          <ProfileMainTopContentWorkExperience />
        ) : selectedTab === "Education" ? (
          <ProfileMainTopContentEducation />
        ) : selectedTab === "Skills" ? (
          <ProfileMainTopContentSkills />
        ) : selectedTab === "Awards" ? (
          <ProfileMainTopContentAwards />
        ) : selectedTab === "Languages" ? (
          <ProfileMainTopContentLanguages />
        ) : null}
      </div>
    </div>
  );
}
