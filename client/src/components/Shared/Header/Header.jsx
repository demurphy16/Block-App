import React from "react";
import UserIcon from "../../../assets/icons/userIcon.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { deleteStorage, user } = props;
  return (
    <nav>
      <div className={user === null ? "sign-in-nav" : "nav"}>
        <div className="links">
          <div className="left-links">
            <NavLink className="link" to="/businesses">
              Local Business
            </NavLink>
            <NavLink className="link" to="/localgov">
              Local Government
            </NavLink>
          </div>
          <NavLink className="logo" to="/home">
            block
          </NavLink>
          <div className="right-links">
            <NavLink className="link" to="/construction">
              Construction
            </NavLink>
            <NavLink className="link" to="/hotline">
              Hotline
            </NavLink>
          </div>
        </div>
        <button className="user-icon" onClick={deleteStorage}>
          <img src={UserIcon} alt="user-icon" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
