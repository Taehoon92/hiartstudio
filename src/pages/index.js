import React from "react"
import {Link} from "gatsby"

import '../../css/newStyle.css'
import '../../css/bootstrap.css'
import '../../css/responsive.css'

import '../../vendors/animate-css/animate.css'
import '../../vendors/popup/magnific-popup.css'

export default function Home() {
  return (
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Hi Art Studio</title>
	</head>,

	<body>
		<div id="header-wrapper">
			<div id="header" class="container">
				<div id="logo">
					<h1><a href="#">Hi Art Studio</a></h1>
				</div>
			</div>
		</div>	
		
		<header id="header" class="header_area">
			<div id="menu" class="main_menu">
				<nav class="navbar navbar-expand-lg navbar-light">
					<div class="container">
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>

						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto mr-auto active">
								<li class="nav-item active"><a class="nav-link" href="#">Home</a></li> 

								<li class="nav-item submenu dropdown">
									<a href="/about/" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="#">Teachers</a></li>
										<li class="nav-item"><a class="nav-link" href="#">Studio</a></li>
										<li class="nav-item"><a class="nav-link" href="#">Cirriciulum</a></li>
									</ul>
								</li>
									
								<li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>    
								<li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
								<li class="nav-item"><a class="nav-link" href="#contact_us">Contact us</a></li>   
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Makeup Lesson</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
										<li class="nav-item"><a class="nav-link" href="#">Blog Details</a></li>
									</ul>
								</li>
		
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>

		<div id="page-wrapper">
			<div id="welcome" class="container">
				<div class="title">
					<h2>Welcome to our website</h2>
				</div>
				<p>We are located at 5 Saville St. Eight Mile Plains QLD 4113</p>
			</div>
		</div>



	</body>
  )
}