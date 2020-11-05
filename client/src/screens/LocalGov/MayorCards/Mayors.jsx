import React, { useState } from 'react'
import './Mayors.css'
import deblasio from '../../../assets/img/deblasio.png'
import neil from '../../../assets/img/neil.png'
import tyler from '../../../assets/img/tyler.png'

function MayorCards() {
  
  const [mayor, setMayor] = useState("Bill de Blasio")

  return (
    <div classname="mayors-container">
      <div className="all-mayors">
      <div className="deblasio-container mayors">
      <img className="mayor-img" src={deblasio} alt="deblasio" />
      <h4 className="mayor-name">{mayor}</h4>
      <p className="mayor-title">Mayor, New York City</p>
      <p className="mayor-description">109th Mayor of New York City, Bill de Blasio, came into office
        in 2014 determined to ensure that this city remains a place for everyone
      </p>
      <div className="mayor-button-container">
      <button className="mayor-button mayor-contact">Contact Me</button>
      <button className="mayor-button mayor-learnmore">Learn More</button>
        </div>
        </div>
        <div className="neil-container mayors">
          <img className="mayor-img"src={tyler}/>
          <h4 className="mayor-name">Tyler Hartrich</h4>
          <p className="mayor-title">Mayor, General Assembly</p>
          <p className="mayor-description">Tyler Loves trees, he believes that GA should go completely
          green. Tyler also believes in the banning of all androids
          </p>
          <div className="mayor-button-container">
      <button className="mayor-button mayor-contact">Contact Me</button>
      <button className="mayor-button mayor-learnmore">Learn More</button>
        </div>
        </div>
        <div className="tyler-container mayors">
          <img className="mayor-img" src={neil}/>
          <h4 className="mayor-name">Neil Kahn</h4>
          <p className="mayor-title">Mayor, General Assembly</p>
          <p className="mayor-description">Neil loves fibonacci styled poker games and shipping container metaphors</p>
          <div className="mayor-button-container">
          <button className="mayor-button mayor-contact">Contact Me</button>
          <button className="mayor-button mayor-learnmore">Learn More</button>
        </div>
        </div>
      </div>
    </div>

  )
}

export default MayorCards