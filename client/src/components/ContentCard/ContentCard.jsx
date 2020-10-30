import React from "react";
import Button from "../Shared/Button/Button";
import localGov from "../../assets/icons/localGov.svg";
import businesses from "../../assets/icons/businesses.svg";

function ContentCard(props) {
  return (
    <div className={props.cardType === true ? "resources" : "community"}>
      <h2>{props.cardType === true ? "Resources" : "Community"}</h2>
      <h3>
        {props.cardType === true
          ? "Your Voice matters, heres where you can use it."
          : "Stay involved in your neighborhood."}
      </h3>
      <Button buttonType={props.cardType === true ? localGov : businesses} />
      <Button buttonType={props.cardType} />
      <Button buttonType={props.cardType} />
    </div>
  );
}

export default ContentCard;
