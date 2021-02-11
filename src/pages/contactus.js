import React from "react"
import '../../css/style.css'
import Header from "../components/header"
import Footer from "../components/footer"

import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'


export default function Contactus() {
  return (
    <div id="page">
      <div className="navbar">
        <div className="navbar-subheading-bottom container">
          <Navbar.Brand href="/" className="logo container">
            <img
              src='../../logo2.png'
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </div>
        <div className="navbar-subheading-top container"></div>
          <div className="navbar-subheading-bottom container">
            <p>
            VISUAL ART TUTORIAL SPECIALIST
            </p>
          </div>
          <div className="navbar-subheading-bottom-menu container">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/class">Class</Nav.Link>
            <Nav.Link href="/gallery">Artworks</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
        </div>
      </div>
      <div id="page-wrapper">
        <div className="banner-image">
          <div className = "banner-text">
            <h1 className="container">Contact Us</h1>
            <p className="container">Find the contacting options below</p>
          </div>
          <img src='/banner.jpg' />
        </div>

        <div className="blank-space"></div>

        <div className="container">

        
          <div className = "row">
            <div className="contact-box col">
                <img src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/69996523_2115980488502800_2822794296686542848_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=mXSCFdKIvT4AX_m-cgk&_nc_ht=scontent-syd2-1.xx&oh=8cedab965948fa65c4772944914b9a70&oe=601F7550" />
            </div>  

            <div className="contact-box col">
                <h3>Phone</h3>
                <p>Head-Teacher Lan Kim: (+61) 0405 068 004</p>

                <h3>Email</h3>
                <p>Hi Art Studio: hiartstudio@gmail.com</p>

                <h3>Address</h3>
                <p>5 Saville St, Eight Mile Plains QLD 4113</p>
            </div> 

          </div>

        </div>
        
      </div>
      <Footer />
    </div>
  )
}