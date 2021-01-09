import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../../css/newStyle.css'


const Header = ({ siteTitle }) => (
  <header id="header" className="header_area">
    <div id="menu" className="main_menu">
      <div id="logo">
        <Link to ="/">
          <img src='../../logo.png' />
        </Link>
      </div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul className="nav navbar-nav menu_nav ml-auto mr-auto active">
                        <li className="nav-item submenu dropdown">
                          <a href="/about/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item"><a className="nav-link" href="#">Teachers</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Studio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Curriciulum</a></li>
                          </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>    
                        <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>   
                        <li className="nav-item submenu dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Makeup Lesson</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Blog Details</a></li>
                            </ul>
                        </li>
  
                    </ul>
                </div>
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
