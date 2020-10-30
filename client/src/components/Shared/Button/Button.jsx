import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button-content">
      <div className="button-background">
        <img src={props.buttonType} alt="button-img" />
      </div>
      <p className="button-title">{props.buttonTitle}</p>
    </div>
  );
}

export default Button;
