import React from "react";

export default function TextareaInput({ options, placeholder, ...props }) {
  return (
    <div className="input__box input__box__multiline">
      <label htmlFor={placeholder} className="input__box__label">
        {placeholder}
      </label>
      <textarea
        {...props}
        placeholder={placeholder}
        className="input__box__field"
      />
    </div>
  );
}
