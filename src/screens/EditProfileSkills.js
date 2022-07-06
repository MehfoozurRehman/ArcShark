import React from "react";
import { Plus } from "react-feather";
import TextInput from "../components/TextInput";

export default function EditProfileSkills() {
  return (
    <>
      <div className="dashbaord__content__main__header">
        <div className="dashbaord__content__main__header__heading">Skills</div>
        <button className="dashbaord__content__main__header__button">
          Save Changes
        </button>
      </div>
      <div className="dashbaord__content__main__content">
        <div className="dashbaord__content__main__content__row">
          <TextInput placeholder="Skill Name" />
        </div>
        <div className="dashbaord__content__main__content__row">
          <button className="dashbaord__content__main__content__row__button">
            <Plus size={20} color="currentColor" />
            Add Language
          </button>
        </div>
      </div>
    </>
  );
}
