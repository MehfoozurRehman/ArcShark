import React, { useState } from "react";
import Select from "react-select";
import { Zoom } from "react-reveal";

export function HomeScreenFilterSelect({ options, svg, ...props }) {
  const [focus, setFocus] = useState(false);
  return (
    <Zoom>
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
        <Select
          options={options}
          {...props}
          menuIsOpen={focus}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#5b58a5",
            },
          })}
        />
      </button>
    </Zoom>
  );
}
