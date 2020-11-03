import { useState } from "react"
import Layout from "../../components/Shared/Layout/Layout"
import "./LocalGov.css"
import Nydia from "../../assets/img/nydia.jpeg";

function LocalGov() {

  const [rep1, setRep1] = useState("Nydia M. Velazquez")
  const [rep2, setRep2] = useState("Hakeem Jeffries")

  

  return (
    <Layout>
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
            <img src={Nydia} className="nydia"/>
            <h4>{rep1}</h4>
            <p>Representitive, 7th District</p>
            <button className="rep-button">Contact Me</button>
            <button className="rep-button">Learn More</button>
            </div>
            <p className="rep-description">Congresswoman Velaquez is dedicated to ensuring that New York City
             residents have housing options that are both affordable and acessible.
              Renters and home ownders in the 7th congressional District face critical 
              housing needs, with most paying more than half their income in rent or 
              mortgage payments and many living in unacceptable conditions.
            </p>
          </div>
          <div className="rep rep2">
            {rep2}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LocalGov