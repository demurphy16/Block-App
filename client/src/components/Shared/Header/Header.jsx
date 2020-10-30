import React from "react";
import UserIcon from "../../../assets/icons/userIcon.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          <NavLink className="link" to="/">
            Local Business
          </NavLink>
          <NavLink className="link" to="/">
            Local Government
          </NavLink>
          <NavLink className="logo" to="/">
            block
          </NavLink>
          <NavLink className="link" to="/">
            Construction
          </NavLink>
          <NavLink className="link" to="/">
            Hotline
          </NavLink>
          <NavLink className="user-icon" to="/">
            <img src={UserIcon} alt="user-icon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
