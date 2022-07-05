import React, { useState } from "react";
import Select from "react-select";

export function HomeScreenFilterSelect({ options, svg, ...props }) {
  const [focus, setFocus] = useState(false);
  return (
    <button
      className="home__jumbotron__overlay__form__bottom__entry"
      onClick={() => {
        setFocus(!focus);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      type="button"
    >
      {svg}
      <Select options={options} isMulti {...props} menuIsOpen={focus} />
    </button>
  );
}
