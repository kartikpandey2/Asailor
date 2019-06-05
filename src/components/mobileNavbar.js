import React from "react"
import "../css/mobileNavbar.css"

import phone from "../images/phone-receiver.svg"
import packages from "../images/maps-and-flags.svg"
import whyUs from "../images/conversation.svg"

const MobileNavBar = () => {
  return (
    <footer>
      <div className="mobile-navbar">
        <span className="mobile-navbar-item">
          <div className="mobile-image-container">
            <img src={packages} alt="" />
          </div>
          <div>
            <h4>Packages</h4>
          </div>
        </span>
        <span className="mobile-navbar-item">
          <div className="mobile-image-container">
            <img src={whyUs} alt="" />
          </div>
          <div>
            <h4>Why Us</h4>
          </div>
        </span>
        <span className="mobile-navbar-item">
          <div className="mobile-image-container">
            <img src={phone} alt="" />
          </div>
          <div>
            <h4>Contact Us</h4>
          </div>
        </span>
      </div>
    </footer>
  )
}

export default MobileNavBar
