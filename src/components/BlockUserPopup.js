import React from "react";
import Popup from "./Popup";
import SelectInput from "./SelectInput";
import TextareaInput from "./TextareaInput";

export default function BlockUserPopup({ onClose }) {
  return (
    <Popup
      heading="Block User"
      info="Sharing more detail will increase your chances of receiving a reply"
      buttonLabel="Block"
      onClose={onClose}
      onClick={onClose}
    >
      <div className="popup__form">
        <div className="popup__form__row">
          <SelectInput
            placeholder="Reason"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        </div>
        <div className="popup__form__row">
          <TextareaInput placeholder="Write Detailed Reason" />
        </div>
      </div>
    </Popup>
  );
}
