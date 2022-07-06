import React, { useState } from "react";
import Popup from "./Popup";
import SelectInput from "./SelectInput";
import TextareaInput from "./TextareaInput";
import TextInput from "./TextInput";

export default function HireTalentPopup({ onClose }) {
  const [stage, setStage] = useState(1);
  return (
    <>
      {stage === 1 ? (
        <Popup
          heading="Hire the Talent You Need"
          info="Start Hiring From Millions Of Creative Professionals"
          buttonLabel="Next"
          onClose={onClose}
          onClick={() => {
            setStage(2);
          }}
          headerCenter
          small
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
      ) : stage === 2 ? (
        <Popup
          heading="Hire the Talent You Need"
          info="Start Hiring From Millions Of Creative Professionals"
          buttonLabel="Next"
          onClose={onClose}
          onClick={() => {
            setStage(3);
          }}
          headerCenter
        >
          <div className="popup__form">
            <div className="popup__form__row">Enter Job Details</div>
            <div className="popup__form__row">
              <div className="popup__form__col">
                <SelectInput
                  placeholder="Type of Job"
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                />
              </div>
              <div className="popup__form__col" style={{ minWidth: "70%" }}>
                <TextInput placeholder="Job Title" type="text" />
              </div>
            </div>
            <div className="popup__form__row">
              <TextInput placeholder="Write short description here" />
            </div>
            <div className="popup__form__row">
              <TextareaInput placeholder="Write details description here" />
            </div>
          </div>
        </Popup>
      ) : stage === 3 ? (
        <Popup
          heading="Hire the Talent You Need"
          info="Start Hiring From Millions Of Creative Professionals"
          buttonLabel="Next"
          onClose={onClose}
          onClick={onClose}
          headerCenter
        >
          <div className="popup__form" style={{ height: 300 }}>
            <div className="popup__form__row">Enter Other Details</div>
            <div className="popup__form__row">
              <SelectInput
                placeholder="Keywords"
                isMulit
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            </div>
            <div className="popup__form__row">
              <div className="popup__form__col">
                <SelectInput
                  placeholder="Job Location"
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                />
              </div>
              <div className="popup__form__col">
                <SelectInput
                  placeholder="Country"
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                />
              </div>
              <div className="popup__form__col">
                <SelectInput
                  placeholder="City"
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                />
              </div>
            </div>
          </div>
        </Popup>
      ) : null}
    </>
  );
}
