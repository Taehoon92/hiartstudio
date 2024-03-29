import React from "react"
import '../../css/style.css'

import Footer from "../components/footer"

import {Navbar, Nav}  from 'react-bootstrap'


export default function Class() {
  return (
    <div id="page">
      <div className="navbar">
        <div className="navbar-subheading-bottom container">
          <Navbar.Brand href="/" className="logo">
            <img
              src='../../logo2.png'
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </div>
        <div className="navbar-subheading-top"></div>
          <div className="navbar-subheading-bottom-menu">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/class">Class</Nav.Link>
            <Nav.Link href="/gallery">Artworks</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
        </div>
      </div>

      <div id="page-wrapper">

        <div className="banner-image container">
          <div className = "banner-text">
            <h1 className="container">Class Information</h1>
            <p className="container banner-subheading">Please find the information about our classes and curriculum</p>
          </div>
          <img className="banner-image-web" src="/banner-web.jpg"/>
          <img className="banner-image-mobile" src="/banner-mobile.jpg"/>
        </div>

        <div className="container content-padding">

          <div className="row">
            <div className="col-md-10 class-left-col">

              <p className="class-heading-top">
                10~20 classes per a week
                <div newline></div>
                Classes by Level and styles, not only by age group so please contact us for free level test.
              </p>

              <p className="class-heading">
                * 1 Hour classes / 1.5 hour classes for Fun Classes
              </p>

              <p className="class-text">
                Kids should finish each of artworks within a lesson.
                <div newline></div>
                Learning how to improve their skills, broaden their creativity, focus on their goal, and time management.
              </p>

              <p className="class-heading">
                We teach:
              </p>

              <p className="class-text">
                - Crafting / Different Surfaces
                <div newline></div>
                - Technical/Topic Drawing 
                <div newline></div>
                - Technical/Topic Painting
                <div newline></div>
                - Free drawing - students can choose freely topic and supplies.
              </p>

              <p className="class-heading">
                * 2 Hour classes for Competition, Portfolio, Scholarship, Highshoolers, or Adults
                <div newline></div>
                Suitable for more serious artists:
              </p>

              <p className="class-text">
                - Developing unique style with private concertation with head teacher like art university.
                <div newline></div>
                - The best results and reputation for Competition/portfolio/schoolarship in Brisbane.
                <div newline></div>
                - Anime/Portrait/Modern illustration/Digital drawing lesson available too.
              </p>

              <div className = "blank-space">
              </div>

            </div>

            {/*
            <div className="col-2 class-right-col">

            </div>
            */}

            

          </div>
        </div>

        

        
        
      </div>

      <Footer />
    </div>
  )
}