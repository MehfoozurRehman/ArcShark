import React from "react";

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

function SettingsJobPostingListEntry({}) {
  return (
    <div className="dashbaord__content__main__table__list">
      <div className="dashbaord__content__main__table__list__entry">
        Helma Void
      </div>
      <div className="dashbaord__content__main__table__list__entry">
        6/5/2002
      </div>
      <div className="dashbaord__content__main__table__list__entry">
        Any Reason Here You Can Write that is valid
      </div>
      <div className="dashbaord__content__main__table__list__entry">
        <button className="dashbaord__content__main__table__list__entry__button dashbaord__content__main__table__list__entry__button__secondary">
          Unlock
        </button>
      </div>
    </div>
  );
}
