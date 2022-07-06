import React from "react";
import Popup from "./Popup";
import SelectInput from "./SelectInput";
import TextareaInput from "./TextareaInput";
import TextInput from "./TextInput";

export default function FreelanceProjectInquiryPopup({ onClose }) {
  return (
    <Popup
      heading="Freelance/Project Inquiry"
      info="Sharing more detail will increase your chances of receiving a reply"
      buttonLabel="Send Inquiry"
      onClose={onClose}
      onClick={onClose}
    >
      <div className="popup__form">
        <div className="popup__form__row">
          <TextInput placeholder="Your Company" type="text" />
        </div>
        <div className="popup__form__row">
          <div className="popup__form__col" style={{ minWidth: "70%" }}>
            <TextInput
              placeholder="Your Budget"
              type="text"
              options={["$0 - $100", "$100 - $200", "$200 - $300"]}
            />
          </div>
          <div className="popup__form__col">
            <SelectInput
              placeholder="USD -$"
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          </div>
        </div>
        <div className="popup__form__row">
          <SelectInput
            placeholder="Timeline"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        </div>
        <div className="popup__form__row">
          <TextareaInput placeholder="Message" />
        </div>
      </div>
    </Popup>
  );
}
