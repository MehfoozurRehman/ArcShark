import React from "react";
import { Zoom } from "react-reveal";

export function HomeScreenRoleFilter({
  selectedRole,
  setSelectedRole,
  label,
  ...props
}) {
  return (
    <Zoom>
      <div className="home__jumbotron__overlay__form__top__role">
        <input
          type="radio"
          name="home__jumbotron__overlay__form__top__role"
          className="home__jumbotron__overlay__form__top__role__input"
          defaultChecked={selectedRole === label}
          checked={selectedRole === label}
          onChange={() => {
            setSelectedRole(label);
          }}
          {...props}
        />
        <div className="home__jumbotron__overlay__form__top__role__content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.761"
            height="21.761"
            viewBox="0 0 21.761 21.761"
          >
            <path
              id="Icon_awesome-check-circle"
              data-name="Icon awesome-check-circle"
              d="M22.323,11.443A10.88,10.88,0,1,1,11.443.563,10.88,10.88,0,0,1,22.323,11.443ZM10.184,17.2l8.073-8.073a.7.7,0,0,0,0-.993l-.993-.993a.7.7,0,0,0-.993,0L9.688,13.729,6.614,10.656a.7.7,0,0,0-.993,0l-.993.993a.7.7,0,0,0,0,.993L9.192,17.2A.7.7,0,0,0,10.184,17.2Z"
              transform="translate(-0.563 -0.563)"
              fill="#fff"
            />
          </svg>
          {label}
        </div>
      </div>
    </Zoom>
  );
}
