import React from "react";
import { ChevronRight } from "react-feather";
import { user } from "../assets";
import Popup from "./Popup";

export default function PostJobDetailsApplyPopup({ onClose }) {
  return (
    <Popup
      heading="Graphic Designer"
      buttonLabel="Post a job"
      onClose={onClose}
      onClick={onClose}
      noBoilerplate={true}
    >
      <div className="post__job__pupup__details__apply">
        <img
          src={user}
          alt="user"
          className="post__job__pupup__details__apply__avatar"
        />
        <button className="post__job__pupup__details__apply__button">
          Freelance / Project Inquiry
          <ChevronRight size={20} color="currentColor" />
        </button>
        <button className="post__job__pupup__details__apply__button">
          Start a conversation
          <ChevronRight size={20} color="currentColor" />
        </button>
      </div>
    </Popup>
  );
}
