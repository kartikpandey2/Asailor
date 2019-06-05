import PropTypes from "prop-types"
import React from "react"
import { Button } from "antd"
import premium from "../images/ruby.svg"
import rupee from "../images/rupee-indian.svg"
import modify from "../images/pencil.svg"
import support from "../images/support.svg"
import "../css/service.css"

const styles = {
  h4: {
    color: `Black`,
    textDecoration: `none`,
    margin: "0 0.5rem",
  },
  button: {
    margin: "0 0.5rem",
  },
  image: {
    height: "30px",
    width: "30px",
  },
}

const Service = () => (
  <div className="service-container">
    <div className="inner-service-container">
      <span className="service-span">
        <img src={rupee} alt="" style={styles.image} />
        <h4>Lowest Price</h4>
      </span>
      <span className="service-span">
        <img src={premium} alt="" style={styles.image} />
        <h4>Premium Trips In Budget</h4>
      </span>
      <span className="service-span">
        <img src={modify} alt="" style={styles.image} />
        <h4>Free Modification</h4>
      </span>
      <span className="service-span">
        <img src={support} alt="" style={styles.image} />
        <h4>24/7 Support</h4>
      </span>
    </div>
  </div>
)

export default Service
