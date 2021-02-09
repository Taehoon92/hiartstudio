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
    <div id="navbar">
      <Navbar expand="md" sticky="top" className="navbar-padding container">
        
        {/*
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">          
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/class">Class</Nav.Link>
            <Nav.Link href="/gallery">Artworks</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        */}

        <Navbar.Brand href="/" className="logo ml-auto">
          <img
            src='../../logo2.png'
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        
      </Navbar> 

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
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
