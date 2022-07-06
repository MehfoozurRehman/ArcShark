import React from "react";
import TextInput from "../components/TextInput";

export default function SettingsChangePassword() {
  return (
    <>
      <div className="dashbaord__content__main__header">
        <div className="dashbaord__content__main__header__heading">
          Change Password
        </div>
        <button className="dashbaord__content__main__header__button">
          Save Changes
        </button>
      </div>
      <div className="dashbaord__content__main__content">
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Enter Previous Password" />
          </div>
          <div
            className="dashbaord__content__main__content__col"
            style={{ marginBottom: 0 }}
          />
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Enter New Password" />
          </div>
          <div
            className="dashbaord__content__main__content__col"
            style={{ marginBottom: 0 }}
          />
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Re-Enter New Password" />
          </div>
          <div
            className="dashbaord__content__main__content__col"
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>
    </>
  );
}
