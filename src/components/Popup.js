import React, { memo, useEffect } from "react";
import { X } from "react-feather";
import { Reveal } from "react-reveal";

function Popup({
  heading,
  children,
  onClose,
  info,
  buttonLabel,
  onClick,
  headerCenter,
  large,
  noBoilerplate,
  small,
}) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="popup">
      <Reveal>
        <div
          className="popup__content"
          style={large ? { maxWidth: 1000 } : small ? { maxWidth: 600 } : null}
        >
          <button className="popup__content__close" onClick={onClose}>
            <X size={20} color="currentColor" />
          </button>
          {noBoilerplate ? null : (
            <div
              className={
                headerCenter
                  ? "popup__content__header popup__content__header__center"
                  : "popup__content__header"
              }
              style={info ? null : { marginBottom: 0 }}
            >
              <div className="popup__content__header__heading">{heading}</div>
              {info ? (
                <div className="popup__content__header__info">{info}</div>
              ) : null}
            </div>
          )}
          <div className="popup__content__children__wrapper">{children}</div>
          {noBoilerplate ? null : (
            <div className="popup__content__buttons" onClick={onClick}>
              <button className="popup__content__buttons__button">
                {buttonLabel}
              </button>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}
export default memo(Popup);
