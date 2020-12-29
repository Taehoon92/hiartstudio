import React from "react"
import '../../css/default.css'
import '../../css/fonts.css'
import '../../css/style.css'
import '../../css/responsive.css'
import '../../css/jstyle.css'

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

						<ul id="topmenu">
							<li ><a href="#">Home</a></li> 
							<li ><a href="#">About</a></li> 
							<li ><a href="#">Portfolio</a></li>    
							<li ><a href="#">FAQ</a></li>
							<li ><a href="#">Contact us</a></li>  
						</ul>

					</div>
				</nav>
			</div>
		</header>

	</body>
  )
}