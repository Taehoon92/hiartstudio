import React from "react"
import '../../css/style.css'

import Header from "../components/header"


export default function About() {
  return (
    <div>
      <Header />
      <div id="page-wrapper">
        <div className="banner-image">
          <div className = "banner-text">
            <h1 className="container">About us</h1>
            <p className="container">Short Paragraph Here</p>
          </div>
          <img src="https://cdn.decoist.com/wp-content/uploads/2017/04/Art-studio-with-a-desk-in-the-center-of-the-room-.jpeg" />
        </div>

        <div className = "col-md-12">
          <div className="about-box col-md-3 ">
            <div className="test"></div>
          </div>  
          <div className="col-md-3 about-box"></div>  
          <div className="col-md-3 about-box"></div>  
        </div>
      </div>
    </div>
  )
}