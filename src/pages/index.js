import React from "react"
import { Link } from "gatsby"
import { Carousel } from "antd"
import "antd/dist/antd.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Service from "../components/service"
import sunset from "../images/gatsby-astronaut.png"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpeg"
import pic4 from "../images/pic4.jpg"
import "../css/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Carousel autoplay dots={true}>
        <div className="image-container">
          <img src={pic1} alt="sunset" className="carousel-image" />
        </div>
        <div className="image-container">
          <img src={pic2} alt="sunset" className="carousel-image" />
        </div>
        <div className="image-container">
          <img src={pic3} alt="sunset" className="carousel-image" />
        </div>
        <div className="image-container">
          <img src={pic4} alt="sunset" className="carousel-image" />
        </div>
      </Carousel>
      <Service />
    </div>
  </Layout>
)

export default IndexPage
