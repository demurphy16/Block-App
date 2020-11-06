import React from "react";
import title from "../../assets/img/crownHeights.png";
import "./title.css";
// import crownHeights from "../../../src/assets/img/crown_heights.png"
// import search from "../../assets/icons/search.svg";

function Title(props) {
  // const [title, setTitle] = useState("Crown Heights");
  return (
    <div className="title">
      <img src={title} alt="name of neighborhood" />
      <form>
        <input
          className="search" //fix meeeeeeeeee :(
          name="Search"
          placeholder="Explore other neighborhoods"
          type="text"
        />
      </form>
    </div>
  );
}

export default Title;
