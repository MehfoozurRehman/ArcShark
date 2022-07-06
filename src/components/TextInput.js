import React from "react";

export default function TextInput({ options, placeholder, ...props }) {
  return (
    <div className="input__box">
      <label htmlFor={placeholder}>{placeholder}</label>
      <input
        {...props}
        placeholder={placeholder}
        name={placeholder}
        id={placeholder}
        list={placeholder + "s"}
        className="input__box__field"
      />
      {options ? (
        <datalist id={placeholder + "s"}>
          {options.map((option) => (
            <option value={option} />
          ))}
        </datalist>
      ) : null}
    </div>
  );
}
