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



//const [isDarkMode, setIsDarkMode] = useState(() => false);


const IndexPage = () => (
	<div className="index">
		<Header />
		<div id="page-wrapper">
			<div id="welcome" className="col-md-12">

				<div className="title">
					<h2>Welcome to our website</h2>
				</div>
				<p>We are located at 5 Saville St. Eight Mile Plains QLD 4113</p>

				<div className="container">
					<table>
						<thead>
						<tr>
							<th>No.</th>
							<th>Title</th>
							<th>Date</th>
							<th>Views</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>1</td>
							<td>First Post.</td>
							<td>2020-10-25</td>
							<td>6</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Second Post.</td>
							<td>2020-10-25</td>
							<td>5</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Third Post.</td>
							<td>2020-10-25</td>
							<td>1</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Fourth Post.</td>
							<td>2020-10-25</td>
							<td>2</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Fifth Post.</td>
							<td>2020-10-25</td>
							<td>4</td>
						</tr>
						</tbody>
					</table>

					<button>
						Write Post
					</button>

				</div>
			
			</div>
		</div>
		
		<Footer />
	</div>
);

export default IndexPage;
