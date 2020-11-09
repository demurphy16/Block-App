import React from "react";
import Button from "../../components/Shared/Button/Button";
import arrow from "../../assets/icons/noun_Left_1920775.png";
import bakery from "../../assets/img/German_s Soup.png";
import bars from "../../assets/icons/bars.svg";
import beauty from "../../assets/icons/beauty.svg";
import fish from "../../assets/img/Local Business Page_Bed-Stuy.png";
import groceries from "../../assets/icons/groceries.svg";
import health from "../../assets/icons/health.svg";
import lobster from "../../assets/img/Local Restaurants_Crabby Shack.png";
import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/phone.svg";
import restaurants from "../../assets/icons/restaurants.svg";
import retail from "../../assets/icons/businesses.svg";
import { Link } from "react-router-dom";
import "../LocalBusinesses/LocalBusinesses.css";

function LocalBusinesses(props) {
  return (
    <div>
      <div className="business-top-text">
        <h5>Home/Local Businesses</h5>
        <div className="business-to-home">
          <img src={arrow} alt="left-arrow" className="left-arrow-business" />
          <h4>
            <Link to={`/home`}>Back to Homepage</Link>
          </h4>
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
          <button type="submit" className="business-button">
            Filter
          </button>
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
      <h2 className="business-title-popular">Popular Near You</h2>
      <div className="popular">
        <div className="popular-container">
          <img
            src={bakery}
            alt="german-beer-garden"
            className="popular-image"
          />
          <div className="popular-name-icons">
            <h3 className="popular-name">German's Soup</h3>
            <div className="popular-icons">
              <img src={mail} alt="email-icon" className="email-icon" />
              <img src={phone} alt="phone-icon" className="phone-icon" />
            </div>
          </div>
          <p className="popular-first-line">
            410 Utica Ave, Brooklyn, NY 11213
          </p>
          <p className="popular-second-line">Guyanese | Hours: 9AM-8PM</p>
          <button type="submit" className="see-more-button">
            See More
          </button>
        </div>
        <div className="popular-container">
          <img src={fish} alt="fish-fry" className="popular-image" />
          <div className="popular-name-icons">
            <h3 className="popular-name">Bed-Stuy Fish Fry</h3>
            <div className="popular-icons">
              <img src={mail} alt="email-icon" className="email-icon" />
              <img src={phone} alt="phone-icon" className="phone-icon" />
            </div>
          </div>
          <p className="popular-first-line">
            827 Nostrand Ave, Brooklyn, NY 11225
          </p>
          <p className="popular-second-line">Soul Food | Hours: 9AM-8PM</p>
          <button type="submit" className="see-more-button">
            See More
          </button>
        </div>
        <div className="popular-container">
          <img src={lobster} alt="fish-fry" className="popular-image" />
          <div className="popular-name-icons">
            <h3 className="popular-name">The Crabby Shack</h3>
            <div className="popular-icons">
              <img src={mail} alt="email-icon" className="email-icon" />
              <img src={phone} alt="phone-icon" className="phone-icon" />
            </div>
          </div>
          <p className="popular-first-line">
            613 Franklin Ave, Brooklyn, NY 11238
          </p>
          <p className="popular-second-line">Seafood | Hours: 12PM-10PM</p>
          <button type="submit" className="see-more-button">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default LocalBusinesses;
