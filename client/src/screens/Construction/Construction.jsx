import React from "react";
import map from "../../assets/img/map_image.png";
import arrow from "../../assets/icons/noun_Left_1920775.png";
import {Link} from "react-router-dom"
import "../Construction/Construction.css";

function Construction(props) {
  return (
    <div>
      <div className="construction-top-text">
        <h5>Home/Construction</h5>
        <div className="link-to-home">
          <img src={arrow} alt="left-arrow" className="left-arrow" />
          <h4>
            <Link to="/home">Back to Homepage</Link>
          </h4>
        </div>
      </div>
      <div className="construction-top">
        <div className="header-map">
          <img src={map} alt="map-crown-heights" className="header-map-img" />
          <h5 className="view-map">View Map</h5>
        </div>
        <div className="title-map">
          <h2 className="construction-title">Construction</h2>
          <form>
            <input
              className="search-construction"
              name="Search"
              placeholder="Search"
              type="text"
            />
          </form>
        </div>
      </div>
      <div className="construction-middle-text">
        <h3>0 Construction Sites</h3>
        <p>
          Sort by: <strong>Date</strong>
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Construction;
