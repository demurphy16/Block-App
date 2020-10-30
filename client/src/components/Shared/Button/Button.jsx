import React from "react";
import localGov from "../../../assets/icons/localGov.svg";

function Button(props) {
  return (
    <div className="button-container">
      <div className="button-background">
        <img src={props.buttonType} alt="button-img" />
      </div>
    </div>
  );
}

export default Button;
