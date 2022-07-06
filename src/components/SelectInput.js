import React from "react";
import Select from "react-select";

export default function SelectInput({ placeholder, ...props }) {
  return (
    <div className="input__box" style={{ borderWidth: 1 }}>
      <label htmlFor={placeholder} className="input__box__label">
        {placeholder}
      </label>
      <Select
        {...props}
        placeholder={placeholder}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#524eb8",
            primary: "#5b58a5",
            neutral0: "white",
            neutral30: "white",
          },
        })}
      />
    </div>
  );
}
