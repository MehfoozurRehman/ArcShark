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

function SettingsJobPostingListEntry({}) {
  return (
    <div className="dashbaord__content__main__table__list">
      <div className="dashbaord__content__main__table__list__entry">
        Marketing
      </div>
      <div className="dashbaord__content__main__table__list__entry">
        9 / 9 /2022
      </div>
      <div className="dashbaord__content__main__table__list__entry">Open</div>
      <div className="dashbaord__content__main__table__list__entry">54</div>
      <div className="dashbaord__content__main__table__list__entry">65</div>
      <div className="dashbaord__content__main__table__list__entry">
        <button className="dashbaord__content__main__table__list__entry__button dashbaord__content__main__table__list__entry__button__primary">
          Details
        </button>
      </div>
    </div>
  );
}
