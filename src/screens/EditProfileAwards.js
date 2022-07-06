import React from "react";
import { Plus } from "react-feather";
import SelectInput from "../components/SelectInput";
import TextareaInput from "../components/TextareaInput";
import TextInput from "../components/TextInput";

export default function EditProfileAwards() {
  return (
    <>
      <div className="dashbaord__content__main__header">
        <div className="dashbaord__content__main__header__heading">Awards</div>
        <button className="dashbaord__content__main__header__button">
          Save Changes
        </button>
      </div>
      <div className="dashbaord__content__main__content">
        <div className="dashbaord__content__main__content__row">
          <TextInput placeholder="Organization Name" />
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Award" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Website" />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Date Recieved" />
          </div>
          <div
            className="dashbaord__content__main__content__col"
            style={{ marginBottom: 0 }}
          />
        </div>
        <div className="dashbaord__content__main__content__row">
          <button className="dashbaord__content__main__content__row__button">
            <Plus size={20} color="currentColor" />
            Add Award
          </button>
        </div>
      </div>
    </>
  );
}
