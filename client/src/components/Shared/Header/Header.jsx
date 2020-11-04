import React from "react";
import UserIcon from "../../../assets/icons/userIcon.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { signIn } = props;
  return (
    <nav>
      <div className={signIn === false ? "sign-in-nav" : "nav"}>
        <div className="links">
          <NavLink className="link" to="/businesses">
            Local Business
          </NavLink>
          <NavLink className="link" to="/home">
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
          <NavLink className="user-icon" to="/home">
            <img src={UserIcon} alt="user-icon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
