import React from "react";

function Button(props) {
  return (
    <div className="button-container">
      <div className="button-background">
        <img
          src={
            (props.buttonType = true
              ? "../../../assets/icons/localGov.svg"
              : "../../../assets/icons/businesses.svg")
          }
          alt="button-img"
        />
      </div>
    </div>
  );
}

export default Button;
