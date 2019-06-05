import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.jpeg"
import { Button } from "antd"
import "../css/header.css"

const styles = {
  link: {
    color: `Black`,
    textDecoration: `none`,
    margin: "0 0.5rem",
  },
  button: {
    margin: "0 0.5rem",
  },
  h4: {
    display: "inline",
  },
}

const Header = () => (
  <header>
    <div className="header-container">
      <span>
        <Link to="/" style={styles.link}>
          <img
            src={logo}
            style={{ height: "50px", width: "50px" }}
            alt="logo"
          />
          <h4 style={{ display: "inline", marginLeft: "0.5rem" }}>Asailor</h4>
        </Link>
      </span>
      <span>
        <span className="navlinks">
          <Link to="/packages" style={styles.link}>
            <h4 style={styles.h4}>Packages</h4>
          </Link>
          <Link to="/" style={styles.link}>
            <h4 style={styles.h4}>Why Us</h4>
          </Link>
          <Link to="/" style={styles.link}>
            <h4 style={styles.h4}>Contact Us</h4>
          </Link>
        </span>
        <span>
          <Button style={styles.button}>Plan my Trip</Button>
        </span>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
