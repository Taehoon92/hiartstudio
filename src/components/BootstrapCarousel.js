import React, { Component } from 'react'  

import Carousel from 'react-bootstrap/Carousel'  

export class BootstrapCarousel extends Component {  

    render() {  
        return (  

                <div>  
                    <div className='container' >  
                        <div className="row title" style={{ marginBottom: "20px" }} >  
                        </div>  
                    </div>  
                <div className='container' >  

        <Carousel>  

            <Carousel.Item style={{'height':"300px"}} >  

                <img
                className="d-block w-100 image-carousel"  
                src={'/banner.jpg'}  />  

                <Carousel.Caption>    
                </Carousel.Caption>  

            </Carousel.Item  >  

            <Carousel.Item style={{'height':"300px"}}>  

                <img
                className="d-block w-100 image-carousel"  
                src={'/banner.jpg'}    />  

                <Carousel.Caption>   
                </Carousel.Caption>  

            </Carousel.Item>  

            <Carousel.Item style={{'height':"300px"}}>  

                <img 
                className="d-block w-100 image-carousel"  
                src={'/banner.jpg'}   />  

                <Carousel.Caption>  
                </Carousel.Caption>  

            </Carousel.Item>  

        </Carousel>  

        </div>  

        </div>
        
        )  

    }  

}  

  

export default BootstrapCarousel  