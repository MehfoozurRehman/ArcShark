import React from "react";
import Popup from "./Popup";
import TextInput from "./TextInput";

export default function HireTalentPopup({ onClose }) {
  return (
    <Popup
      heading="Hire the Talent You Need"
      info="Start Hiring From Millions Of Creative Professionals"
      buttonLabel="Next"
      onClose={onClose}
      onClick={onClose}
      headerCenter
      small={true}
    >
      <div className="popup__form">
        <div className="popup__form__row">
          First, what company is this job for?
        </div>
        <div className="popup__form__row">
          <TextInput placeholder="To" type="text" />
        </div>
      </div>
    </Popup>
  );
}
