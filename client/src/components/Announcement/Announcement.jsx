import React from "react";
import "./Announcement.css";
import { Link } from "react-router-dom";
import Button from "../Shared/Button/Button";

const Announcement = (props) => {
  return (
    <div className="announcement">
      <div className="announcement-card">
        <Link to={`/announcements/${props._id}`}>
          <img
            className="announcement-image"
            src={props.imgURL}
            alt={props.title}
          />
          <div className="announcement-category">{props.category}</div>
          <div className="announcement-title">{props.title}</div>
          <div className="announcement-content">{props.content}</div>
        </Link>
        {/* <Button></Button> */}
      </div>
      <div className="card-box"></div>
    </div>
  );
};

export default Announcement;
