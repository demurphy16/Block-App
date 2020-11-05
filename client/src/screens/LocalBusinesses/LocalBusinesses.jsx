import React from "react"
import Button from "../../components/Shared/Button/Button"
import Layout from "../../components/Shared/Layout/Layout"
import arrow from "../../assets/icons/noun_Left_1920775.png"
import bars from "../../assets/icons/bars.svg"
import beauty from "../../assets/icons/beauty.svg"
import groceries from "../../assets/icons/groceries.svg"
import health from "../../assets/icons/health.svg"
import restaurants from "../../assets/icons/restaurants.svg"
import retail from "../../assets/icons/businesses.svg"
import "../LocalBusinesses/LocalBusinesses.css"

function LocalBusinesses(props) {
  return (
    <Layout>
      <div className="business-top-text">
        <h5>Home/Local Businesses</h5>
        <div className="business-to-home">
          <img src={arrow} alt="left-arrow" className="left-arrow-business" />
          <h4><a href={`/home`}>Back to Homepage</a></h4>
        </div>
      </div>
      <div className="title-business">
          <h2 className="business-title">Local Businesses</h2>
          <div className="business-search-container"> 
            <form>
              <input
                className="search-business"
                name="Search"
                placeholder="Search"
                type="text"
              />
            </form>
          < button type="submit" className="business-button">Filter</button>
          </div> 
      </div>
      <div className="business-button-container">
        <Button buttonType={bars} buttonTitle="Bars" />
        <Button buttonType={restaurants} buttonTitle="Restaurants" />
        <Button buttonType={health} buttonTitle="Health" />
        <Button buttonType={groceries} buttonTitle="Groceries" />
        <Button buttonType={retail} buttonTitle="Retail" />
        <Button buttonType={beauty} buttonTitle="Beauty" />
      </div>
    </Layout>
  )
}

export default LocalBusinesses