import React from "react";
import title from "../../assets/img/crownHeights.png";
import "./title.css";
import SearchIcon from "../../assets/icons/search.svg";

function Title(props) {
  return (
    <div className="title">
      <img src={title} alt="name of neighborhood" />
      <div className="title-form">
        <form>
          <input
            className="search"
            name="Search"
            placeholder={`Explore other neighborhoods`}
            type="text"
          />
          <button className="search-submit">
            <img src={SearchIcon} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Title;
