import React, {useState} from "react"
//import {Link} from "gatsby"
//import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

//게시판 table


import '../../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../../vendors/animate-css/animate.css'
import '../../vendors/popup/magnific-popup.css'
//after RESET code

import BootstrapCarousel from '../components/BootstrapCarousel'  

import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'


//const [isDarkMode, setIsDarkMode] = useState(() => false);


const IndexPage = () => (
	<div id ="page" className="index">

		<div className="navbar">
			<div className="navbar-subheading-bottom">
				<Navbar.Brand href="/" className="logo">
					<img
						src='../../logo2.png'
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
			</div>
			<div className="navbar-subheading-top"></div>
				{/*<div className="navbar-subheading-bottom container">
					<p>
					VISUAL ART TUTORIAL SPECIALIST
					</p>
				</div>*/}
				<div className="navbar-subheading-bottom-menu">
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/class">Class</Nav.Link>
					<Nav.Link href="/gallery">Artworks</Nav.Link>
					<Nav.Link href="/faq">FAQ</Nav.Link>
			</div>
		</div>
		
		<div id="page-wrapper">
			<div id="welcome" className="col-md-12">

				<div className="title">
					<h2>Welcome to our website</h2>
				</div>
				<p>We are located at 5 Saville St. Eight Mile Plains QLD 4113</p>

				<div className="container">
					<BootstrapCarousel></BootstrapCarousel>  
				</div>
			
			</div>
		</div>

		<div className="blank-space">
			
		</div>

		
		
		<Footer />
	</div>
);

export default IndexPage;
