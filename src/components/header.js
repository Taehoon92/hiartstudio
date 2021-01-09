import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../../css/newStyle.css'


const Header = ({ siteTitle }) => (
  <header id="header" className="header_area">
    <div id="menu" className="main_menu">
      <nav className="navbar navbar-expand-md fixed-top">
        <a className="logo navbar-brand logo" href="/">
          <img src='../../logo.png' />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>


        </div>

      </nav>
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
