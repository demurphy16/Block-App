import React from "react"
import Layout from "../../components/Shared/Layout/Layout"
import map from "../../assets/img/map_image.png"
import arrow from "../../assets/icons/noun_Left_1920775.png"
import "../Construction/Construction.css"

function Construction(props) {
  return (
    <Layout>
      <div className="construction-top-text">
        <h5>Home/Construction</h5>
        <div className="link-to-home">
          <img src={arrow} alt="left-arrow" className="left-arrow" />
          <h4><a href={`/home`}>Back to Homepage</a></h4>
        </div>
      </div>
      <div className="construction-top">
        <div className="header-map">
          <img src={map} alt="map-crown-heights" className="header-map-img" />
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
    </Layout>
  )
}

export default Construction