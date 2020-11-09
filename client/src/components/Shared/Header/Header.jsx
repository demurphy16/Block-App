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
          <NavLink className="link" to="/businesses">
            Local Business
          </NavLink>
          <NavLink className="link" to="/localgov">
            Local Government
          </NavLink>
          <NavLink className="logo" to="/home">
            block
          </NavLink>
          <NavLink className="link" to="/construction">
            Construction
          </NavLink>
          <NavLink className="link" to="/home">
            Hotline
          </NavLink>
          <NavLink className="user-icon" to="/">
            <button onClick={deleteStorage}>
              <img src={UserIcon} alt="user-icon" />
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
