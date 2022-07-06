import React from "react";
import Popup from "./Popup";
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
      <TextInput placeholder="Your Company" type="text" />
      <TextInput
        placeholder="Your Budget"
        type="text"
        options={["$0 - $100", "$100 - $200", "$200 - $300"]}
      />
    </Popup>
  );
}
