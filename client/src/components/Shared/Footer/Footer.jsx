import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Header(props) {
  const { user } = props;

  return (
    <footer>
      <div className={user === null ? "hidden" : "nav"}>
        <div className="logo-container">
          <Link className="logo-footer" to="/home">
            block
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/businesses">
            Local Business
          </Link>
          <Link className="link" to="/home">
            Local Government
          </Link>
          <Link className="link" to="/home">
            Local Events
          </Link>
          <Link className="link" to="/home">
            Crown Heights Info
          </Link>
          <Link className="link" to="/home">
            About
          </Link>
          <Link className="link" to="/home">
            Need Help?
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Header;
