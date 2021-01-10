import React from "react"
import '../../css/style.css'
import Header from "../components/header"


export default function Gallery() {
  return (
    <div id="page-wrapper">


      <Header />

      <div class="banner-image">
        <div class = "banner-text">
          <h1 class="container">Gallery</h1>
          <p class="container">Take a peek at our proud students' works</p>
          <p class="container">Click on the image to enlarge</p>
        </div>
        <img src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/12804615_844351048999090_7366405912543968522_n.jpg?_nc_cat=109&ccb=2&_nc_sid=6e5ad9&_nc_ohc=D2wN4XsJWwgAX_tF7p5&_nc_ht=scontent-syd2-1.xx&oh=302c9917bb8833ddf790ab3dd403e33b&oe=602201FC" />
      </div>

      <div class = "col">

        <div class="gallery-box col-md-3 ">
        
        </div>  


        <div class="gallery-box col-md-3">
            
        </div>  


        <div class="gallery-box col-md-3">
            
        </div>  

        <div class="gallery-box col-md-3">
            
        </div>  

        
      </div>



      
    </div>
  )
}