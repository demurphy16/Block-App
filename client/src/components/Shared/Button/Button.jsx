import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button-content">
      <div className="button-background">
        <img src={props.buttonType} alt="button-img" />
      </div>
      <p>{props.buttonTitle}</p>
    </div>
  );
}

export default Button;
