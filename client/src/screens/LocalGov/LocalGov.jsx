import { useState } from "react";
import "./LocalGov.css";
import Nydia from "../../assets/img/nydia.jpeg";
import Hakeem from "../../assets/img/hakeem.png";

function LocalGov() {
  const [rep1, setRep1] = useState("Nydia M. Velazquez");
  const [rep2, setRep2] = useState("Hakeem Jeffries");

  return (
    <div className="page-container">
      <h1 className="gov-title">Local Government</h1>
      <form className="gov-form">
        <input
          className="gov-search"
          name="Search"
          placeholder="Search"
          type="text"
        />
      </form>
      <div className="gov-button-container">
        <button className="gov-button">Neighborhood</button>
        <button className="gov-button">Zipcode</button>
        <button className="gov-button">City</button>
        <button className="gov-button">Topic</button>
        <button className="gov-button">Position</button>
      </div>
      <div className="rep-container">
        <div className="rep rep1">
          <div className="info-container">
            <img src={Nydia} className="rep-img nydia" />
            <h4>{rep1}</h4>
            <p className="district">Representitive, 7th District</p>
            <button className="rep-button">Contact Me</button>
            <button className="rep-button">Learn More</button>
          </div>
          <p className="rep-description">
            Congresswoman Velaquez is dedicated to ensuring that New York City
            residents have housing options that are both affordable and
            acessible. Renters and home ownders in the 7th Congressional
            District face critical housing needs, with most paying more than
            half their income in rent or mortgage payments and many living in
            unacceptable conditions.
          </p>
        </div>
        <div className="rep rep2">
          <div className="info-container">
            <img src={Hakeem} className="rep-img hakeem" />
            <h4>{rep2}</h4>
            <p className="district">Representitive, 8th District</p>
            <button className="rep-button">Contact Me</button>
            <button className="rep-button">Learn More</button>
          </div>
          <p className="rep-description">
            Whether at home in New York or in Washington, DC, my job is to fight
            for the people of the 8th Congressional District. That means working
            to create more affordable housing, reform our broken criminal
            justice system, lower prescription drug prices and ensure all
            Americans have acces to a high quality education.
          </p>
        </div>
      </div>
      <div className="mayor"></div>
      <div className="carrossel"></div>
    </div>
  );
}

export default LocalGov;
