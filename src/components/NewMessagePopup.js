import React from "react";
import Popup from "./Popup";
import TextareaInput from "./TextareaInput";
import TextInput from "./TextInput";

export default function NewMessagePopup({ onClose }) {
  return (
    <Popup
      heading="New Message"
      info="Sharing more detail will increase your chances of receiving a reply"
      buttonLabel="Send"
      onClose={onClose}
      onClick={onClose}
      headerCenter
    >
      <div className="popup__form">
        <div className="popup__form__row">
          <TextInput placeholder="To" type="text" />
        </div>
        <div className="popup__form__row">
          <TextareaInput placeholder="Message" />
        </div>
      </div>
    </Popup>
  );
}
