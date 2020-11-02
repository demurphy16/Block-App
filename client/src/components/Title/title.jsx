import React, { useState } from "react";
import "./title.css";
// import crownHeights from "../../../src/assets/img/crown_heights.png"
import search from "../../assets/icons/search.svg";

function Title(props) {
  const [title, setTitle] = useState("Crown Heights");
  return (
    <div className="title">
      <h1>{title}</h1>

      <form>
        <input
          className="search"
          name="Search"
          placeholder="Explore other neighborhoods"
          type="text"
        />
      </form>
    </div>
  );
}

export default Title;
