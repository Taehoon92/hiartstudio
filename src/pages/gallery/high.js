import React, { useState, useEffect } from "react"

import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import {Navbar, Nav}  from 'react-bootstrap'
import {isMobileOnly} from 'react-device-detect'

export default function Gallery() {

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
            <h1 className="container">Artworks</h1>
            <p className="container">Take a peek at our proud students' works</p>
            </div>
            <img className="banner-image-web" src="/banner-web.jpg"/>
            <img className="banner-image-mobile" src="/banner-mobile.jpg"/>
        </div>

        <div className="blank-space"></div>
        
        </div>
    </div>
    )
}