import React from "react";
import "./Announcement.css";
import { Link } from "react-router-dom";
import heart from "../../assets/icons/heart.svg";
import comment from "../../assets/icons/comment.svg";
import saveIcon from "../../assets/icons/saveicon.svg";
import randomIcon from "../../assets/icons/randomicon.svg";
import repost from "../../assets/icons/Repost.svg";

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
          <div className="announcement-buttons">
            <img src={heart} alt="heart-icon" />
            <img src={comment} alt="comment-icon" />
            <img src={saveIcon} alt="save-icon" />
            <img src={randomIcon} alt="random-icon" />
            <img src={repost} alt="repost-icon" />
          </div>
        </Link>
      </div>
      <div className="card-box"></div>
    </div>
  );
};

export default Announcement;
