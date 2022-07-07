import React from "react";
import { SettingsJobPostingListEntry } from "../components/SettingsJobPostingListEntry";

export default function SettingsJobPosting() {
  return (
    <>
      <div className="dashbaord__content__main__header">
        <div className="dashbaord__content__main__header__heading">
          Job Postings
        </div>
      </div>
      <div className="dashbaord__content__main__table">
        <div className="dashbaord__content__main__table__header">
          <div className="dashbaord__content__main__table__header__entry">
            Job Name
          </div>
          <div className="dashbaord__content__main__table__header__entry">
            Date Posted
          </div>
          <div className="dashbaord__content__main__table__header__entry">
            Status
          </div>
          <div className="dashbaord__content__main__table__header__entry">
            Views
          </div>
          <div className="dashbaord__content__main__table__header__entry">
            Applied
          </div>
          <div className="dashbaord__content__main__table__header__entry"></div>
        </div>
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
        <SettingsJobPostingListEntry />
      </div>
    </>
  );
}
