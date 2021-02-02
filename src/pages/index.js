import React, {useState} from "react"
//import {Link} from "gatsby"
//import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
 

import '../../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../../vendors/animate-css/animate.css'
import '../../vendors/popup/magnific-popup.css'
//after RESET code

import ThemeToggler from 'gatsby-plugin-dark-mode'
import DarkModeToggle from "react-dark-mode-toggle";
import {ToggleButton, ToggleTrack, ToggleThumb} from 'react-toggle-button'


//const [isDarkMode, setIsDarkMode] = useState(() => false);


const IndexPage = () => (
	<div className="index">
		<div className="title">
			<img src='../../logo_b.png' className="index-image"/>
		</div>
		<Header />
		<div id="page-wrapper">
			<div id="welcome" className="col-md-12">
				<div className="title">
					<h2>Welcome to our website</h2>
				</div>
				<p>We are located at 5 Saville St. Eight Mile Plains QLD 4113</p>
			
			</div>
		</div>
		
		<Footer />
	</div>
);

export default IndexPage;
