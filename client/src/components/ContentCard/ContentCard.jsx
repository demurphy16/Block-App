import React from "react";
import Button from "../Shared/Button/Button";
import localGov from "../../assets/icons/localGov.svg";
import businesses from "../../assets/icons/businesses.svg";
import hotline from "../../assets/icons/hotline.svg";
import buildings from "../../assets/icons/buildings.svg";
import construction from "../../assets/icons/construction.svg";
import event from "../../assets/icons/event.svg";

function ContentCard(props) {
  return (
    <div className={props.cardType === true ? "resources" : "community"}>
      <h2>{props.cardType === true ? "Resources" : "Community"}</h2>
      <h3>
        {props.cardType === true
          ? "Your Voice matters, heres where you can use it."
          : "Stay involved in your neighborhood."}
      </h3>
      <Button
        buttonType={props.cardType === true ? localGov : businesses}
        buttonTitle={
          props.cardType === true ? "Local Government" : "Businesses"
        }
      />
      <Button
        buttonType={props.cardType === true ? hotline : buildings}
        buttonTitle={props.cardType === true ? "Hotline" : "Brooklyn"}
      />
      <Button
        buttonType={props.cardType === true ? construction : event}
        buttonTitle={props.cardType === true ? "Construction" : "Events"}
      />
    </div>
  );
}

export default ContentCard;
