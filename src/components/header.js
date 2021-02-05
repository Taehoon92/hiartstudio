import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"

import '../../css/style.css'

import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'

/*
버튼부분

<div>
  <ToggleButton onClick={toggleTheme}>
    <ToggleTrack>
      <div className="moon" />
      <div className="sun" />
      <ToggleThumb themeName={theme} />
    </ToggleTrack>
  </ToggleButton>
</div>

*/
const Header = ({ siteTitle }) => {
  let websiteTheme
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Navbar expand="md" sticky="top" className="navbar-padding">
      <Navbar.Brand href="/" className="logo">
        <img
          src='../../logo2.png'
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">          
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
