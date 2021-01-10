import React from "react"
import '../../css/style.css'

import Header from "../components/header"


export default function About() {
  return (
    <div id="page-wrapper">


      <Header />

      <div class="about-image">
        <div class = "about-text">
          <h1 class="container">About us</h1>
          <p class="container">Short Paragraph Here</p>
        </div>
        <img src="https://cdn.decoist.com/wp-content/uploads/2017/04/Art-studio-with-a-desk-in-the-center-of-the-room-.jpeg" />
      </div>

      <div class = "col-md-12">
        <div class="about-box col-md-3 ">
          <div class="test"></div>
        </div>  
        <div class="col-md-3 about-box"></div>  
        <div class="col-md-3 about-box"></div>  
      </div>
    </div>
  )
}