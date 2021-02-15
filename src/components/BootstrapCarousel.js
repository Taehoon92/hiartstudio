import React, { Component } from 'react'  

import Carousel from 'react-bootstrap/Carousel'  

export class BootstrapCarousel extends Component {  

    render() {  
        return (  

        <Carousel className="carousel-image container">  

            <Carousel.Item>  
                <img
                className=""  
                src={'/banner-web.jpg'}  />  
            </Carousel.Item  >  

            <Carousel.Item>  
                <img
                className=""  
                src={'/banner-web.jpg'}    />  
            </Carousel.Item>  

            <Carousel.Item>  
                <img 
                className=""  
                src={'/banner-web.jpg'}   />  
            </Carousel.Item>  

        </Carousel>  
        
        )  

    }  

}  

  

export default BootstrapCarousel  