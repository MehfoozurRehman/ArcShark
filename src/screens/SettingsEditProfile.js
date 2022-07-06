import React from "react";
import SelectInput from "../components/SelectInput";
import TextInput from "../components/TextInput";

export default function SettingsEditProfile() {
  return (
    <>
      <div className="dashbaord__content__main__header">
        <div className="dashbaord__content__main__header__heading">
          Edit profile
        </div>
        <button className="dashbaord__content__main__header__button">
          Save Changes
        </button>
      </div>
      <div className="dashbaord__content__main__content">
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="First Name" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Last Name" />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Username" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Email" />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <SelectInput
              placeholder="City"
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          </div>
          <div className="dashbaord__content__main__content__col">
            <SelectInput
              placeholder="Country"
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <TextInput placeholder="Date of birth" />
        </div>
      </div>
    </>
  );
}
