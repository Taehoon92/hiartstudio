import React from "react"
import '../../css/newStyle.css'
import Header from "../components/header"


export default function Contactus() {
  return (
    <div id="page-wrapper">


      <Header />

      <div class="about-image">
        <div class = "about-text">
          <h1 class="container">Contact Us</h1>
          <p class="container">Find the contacting options below</p>
        </div>
        <img src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/12804615_844351048999090_7366405912543968522_n.jpg?_nc_cat=109&ccb=2&_nc_sid=6e5ad9&_nc_ohc=D2wN4XsJWwgAX_tF7p5&_nc_ht=scontent-syd2-1.xx&oh=302c9917bb8833ddf790ab3dd403e33b&oe=602201FC" />
      </div>

      <div class = "col">

        <div class="contact-box col-md-4 ">
          <div class="test"></div>
        </div>  


        <div class="contact-box col-md-4">
            <h3>Phone</h3>
            <p>Head-Teacher Lan Kim: (+61) 0405 068 004</p>

            <h3>Email</h3>
            <p>Hi Art Studio: hiartstudio@gmail.com</p>

            <h3>Address</h3>
            <p>5 Saville St, Eight Mile Plains QLD 4113</p>
        </div>  
        
      </div>



      
    </div>
  )
}