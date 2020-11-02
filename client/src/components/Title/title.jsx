import React from "react";
import title from "../../assets/img/crownHeights.png";
import "./title.css";

function Title(props) {
  // const [title, setTitle] = useState("Crown Heights");
  return (
    <div className="title">
      <img src={title} alt="name of neighborhood" />
      <form>
        <input
          name="Search"
          placeholder="Explore other neighborhoods"
          type="text"
        />
      </form>
    </div>
  );
}

export default Title;
