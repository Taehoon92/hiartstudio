import React from "react"

import '../../css/jstyle.css'
import '../../css/bootstrap.css'


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
								<li class="nav-item"><a class="nav-link" href="#">About</a></li> 
								<li class="nav-item"><a class="nav-link" href="#">Portfolio</a></li>    
								<li class="nav-item"><a class="nav-link" href="#">FAQ</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Contact us</a></li>   
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

	</body>
  )
}