import React from "react";
import "./Input.scss";

function Input({ placeholder, type }) {
  return (
    <div className="input__container">
      <input
        type={type}
        placeholder={placeholder}
        name={placeholder}
        required
      />
    </div>
  );
}

export default Input;
