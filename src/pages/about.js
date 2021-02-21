import React from "react"
import '../../css/style.css'

import Footer from "../components/footer"

import {Navbar, Nav}  from 'react-bootstrap'


export default function About() {
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
            <h1 className="container">About us</h1>
            <p className="container">Take a look at our art studio</p>
          </div>
          <img className="banner-image-web" src="/banner-web.jpg"/>
          <img className="banner-image-mobile" src="/banner-mobile.jpg"/>
        </div>

        <div className="container content-padding">

          <h3 className="aboutus-quote-margin">
            "The best art experience with reasonable price."
          </h3>

          <div className="row">
            <div className="col-md-7 aboutus-left-col">

              <p className="aboutus-text">
                1. 18 years teaching experience for portfolio university in Australia, UK, USA, and South Korea.
              </p>

              <p className="aboutus-text">
                2. The best Portfolio & Competition history in Brisbane  
              </p>

              <p className="aboutus-text">
                3. Professional Art Materials and tools you can hire for free -
                <div newline></div>
                Winsor and Newtons, Daniel smith, Arches, Golden, Prismacolour, iMac n Wacom Cintique, etc. (20,000+$ for buying)
              </p>

              <p className="aboutus-text">
                4. Safe, Clean, Separated with strangers and Air conditioning studio
              </p>

              <p className="aboutus-text">
                5. All inclusive price is around 17-25$ per an hour - Nothing to to bring or buy.
              </p>

              <p className="aboutus-text">
                6. Purchasing agent for art supplies - The cheapest price match available. 
              </p>

              <div className = "blank-space">
              </div>

            </div>
            
            {/*\
            <div className="col-md-5">
              
              <img className="aboutus-image" src='/aboutus-01.jpg' />
              <img className="aboutus-image" src='/aboutus-02.jpg' />
              <img className="aboutus-image" src='/aboutus-03.jpg' />
              <img className="aboutus-image" src='/aboutus-04.jpeg' />
              <img className="aboutus-image" src='/aboutus-05.jpg' />
            </div>
            */}

            
          </div>
        </div>

        

        
        
      </div>

      <Footer />
    </div>
  )
}