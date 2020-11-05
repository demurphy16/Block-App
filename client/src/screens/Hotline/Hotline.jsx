import { Link } from 'react-router-dom'
import './Hotline.css'

function Hotline() {


  return (

      <div className="hotline-container">
        <div className="hotline-header">
          <div className="header-text-container">
          <h2>Community Hotline</h2>
          <p>Experiencing disruptions?</p>
          </div>
        </div>
        <div className="white-space">
          <p className="grey-text">Home/ Community Hotline</p>
          <Link to="/">
          <p className="back-to-home">Back to Homepage</p>
          </Link>
        </div>
        <div className="contact-div">
          <h2>Neighborhood Complaints</h2>
          <div className="complaints underlines">
            <p>Submit a Complaint</p> 
            <p>Complaint Forms</p>
          </div>
          <h2>Local Government</h2>
          <div className="local-gov underlines">
            <p>Contact your local representitive</p>
            <p>Contact your local representitive</p>
          </div>
          <h2>Local Corporations</h2>
          <div className="local-corporations underlines">
          <p>Contact local corporations</p>
          </div>
        </div>
        <div className="emergency-services">
          <h2>Emergency Services</h2>
          <p className="emer-servs">Fire Department (000-000-0000)</p>
          <p className="emer-servs">Police Department (000-000-0000)</p>
          <p className="emer-servs">Poison Control (000-000-0000)</p>
          <p className="emer-servs">Suicide Hotline (000-000-0000)</p>
          <p className="emer-servs last">Overdose Hotline (000-000-0000)</p>
        </div>
      </div>

  )
}

export default Hotline