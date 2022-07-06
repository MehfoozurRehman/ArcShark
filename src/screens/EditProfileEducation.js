import React from "react";
import { Plus } from "react-feather";
import SelectInput from "../components/SelectInput";
import TextareaInput from "../components/TextareaInput";
import TextInput from "../components/TextInput";

export default function EditProfileEducation() {
  return (
    <>
      <div className="dashbaord__content__main__header">
        <div className="dashbaord__content__main__header__heading">
          Education
        </div>
        <button className="dashbaord__content__main__header__button">
          Save Changes
        </button>
      </div>
      <div className="dashbaord__content__main__content">
        <div className="dashbaord__content__main__content__row">
          <TextInput placeholder="School or University" />
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Degree" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Website" />
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
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Start from" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Ended at" />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <TextareaInput placeholder="Details" />
        </div>
        <div className="dashbaord__content__main__content__row">
          <button className="dashbaord__content__main__content__row__button">
            <Plus size={20} color="currentColor" />
            Add Education
          </button>
        </div>
      </div>
    </>
  );
}
