import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <footer>
      <div className="nav">
        <div className="logo-container">
          <Link className="logo-footer">block</Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            Local Business
          </Link>
          <Link className="link" to="/">
            Local Government
          </Link>
          <Link className="link" to="/">
            Local Events
          </Link>
          <Link className="link" to="/">
            Crown Heights Info
          </Link>
          <Link className="link" to="/">
            About
          </Link>
          <Link className="link" to="/">
            Need Help?
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Header;
