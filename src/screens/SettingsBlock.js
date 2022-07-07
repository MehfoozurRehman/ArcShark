import React from "react";
import { SettingsJobPostingListEntry } from "./SettingsJobPostingListEntry";

export default function SettingsBlock() {
  return (
    <>
      <div className="dashbaord__content__main__header">
        <div className="dashbaord__content__main__header__heading">
          Block / Report
        </div>
      </div>
      <div className="dashbaord__content__main__table">
        <div className="dashbaord__content__main__table__header">
          <div className="dashbaord__content__main__table__header__entry">
            Person Name
          </div>
          <div className="dashbaord__content__main__table__header__entry">
            Date Blocked
          </div>
          <div className="dashbaord__content__main__table__header__entry">
            Reason
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
