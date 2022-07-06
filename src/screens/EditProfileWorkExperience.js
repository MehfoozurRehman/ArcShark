import React from "react";
import SelectInput from "../components/SelectInput";
import TextareaInput from "../components/TextareaInput";
import TextInput from "../components/TextInput";

export default function EditProfileWorkExperience() {
  return (
    <>
      <div className="dashbaord__content__main__header">
        <div className="dashbaord__content__main__header__heading">
          Work Experience
        </div>
        <button className="dashbaord__content__main__header__button">
          Save Changes
        </button>
      </div>
      <div className="dashbaord__content__main__content">
        <div className="dashbaord__content__main__content__row">
          <TextInput placeholder="First Name" />
        </div>
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
            <TextInput placeholder="Website" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Occupation" />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <TextInput placeholder="About" />
        </div>
        <div className="dashbaord__content__main__content__row">
          <TextareaInput placeholder="Description" />
        </div>
        <div className="dashbaord__content__main__content__row">Socials</div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Facebook" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Instagram" />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Twitter" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Youtube" />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Dribble" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Behance" />
          </div>
        </div>
        <div className="dashbaord__content__main__content__row">
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Telegram" />
          </div>
          <div className="dashbaord__content__main__content__col">
            <TextInput placeholder="Pintrest" />
          </div>
        </div>
      </div>
    </>
  );
}
