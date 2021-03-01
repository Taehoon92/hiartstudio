import React, { Component } from 'react'  

import Carousel from 'react-bootstrap/Carousel'  

export class CarouselAbout extends Component {  

    render() {  
        return (  

        <Carousel className="about-carousel-banner container">  

            <Carousel.Item interval={1000}>  
                <img
                className=""  
                src={'/banner-about-mobile1.jpg'}  />  
            </Carousel.Item  >  

            <Carousel.Item interval={1000}>  
                <img
                className=""  
                src={'/banner-about-mobile2.jpg'}    />  
            </Carousel.Item>  

            <Carousel.Item interval={1000}>  
                <img 
                className=""  
                src={'/banner-about-mobile3.jpg'}   />  
            </Carousel.Item>  

        </Carousel>  
        
        )  

    }  

}  

  

export default CarouselAbout  