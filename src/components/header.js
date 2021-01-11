import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../../css/style.css'

import {Navbar, Nav, NavDropdown}  from 'react-bootstrap';


const Header = ({ siteTitle }) => (
  <Navbar expand="md" sticky="top">
    <Navbar.Brand href="/" className="logo">
      <img
        src='../../logo.png'
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">          
      <Nav className="ml-auto">
        <NavDropdown title="About" id="collasible-nav-dropdown" href="/about" className="show">
          <NavDropdown.Item href="/about">About</NavDropdown.Item>
          <NavDropdown.Item href="about/teacher">Teachers</NavDropdown.Item>
          <NavDropdown.Item href="about/studio">Studio</NavDropdown.Item>
          <NavDropdown.Item href="about/curriciulum">Curriciulum</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/gallery">Portfolio</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
        <Nav.Link href="/contactus">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
