import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Navbar, Nav, NavDropdown}  from 'react-bootstrap';

import '../../css/style.css'
//import '../../css/newStyle.css'


const Header = ({ siteTitle }) => (
  <header id="header" className="header_area">
    <div id="menu" className="main_menu">
      <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top">
        <Navbar.Brand href="/" className="logo">
          <img
            src='../../logo.png'
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">          
          <Nav className="mr-auto">
            <NavDropdown title="About" id="collasible-nav-dropdown" href="/about">
              <NavDropdown.Item href="#">Teachers</NavDropdown.Item>
              <NavDropdown.Item href="#">Studio</NavDropdown.Item>
              <NavDropdown.Item href="#">Curriciulum</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
