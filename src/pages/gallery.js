import React, { useState, useEffect } from "react"
import '../../css/style.css'
import Footer from "../components/footer"

import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import {Navbar, Nav, Button}  from 'react-bootstrap'
import AddGallery from "../components/AddGallery"
import {isMobileOnly} from 'react-device-detect'

export default function Gallery() {


  const data = useStaticQuery(graphql`
  query MyQuery {
    allInstagramContent (sort: {fields: timestamp, order: DESC}) {
      edges {
        node {
          media_url
          caption
          permalink
        }
      }
    }
  }`)
  
  const [images, setImages] = useState(0);
  useEffect(() => {

    setImages(_get(data, 'allInstagramContent.edges'));    
  },[])

  let isMobileResize = 0;

  if(isMobileOnly) {
    isMobileResize = 1;
  }
 
  if (typeof window != `undefined`) {
    isMobileResize = window.innerWidth <576;
  }  

  const handleResize = () => {
    if (typeof window != `undefined`) {
      isMobileResize = window.innerWidth <576;
    }
  }

  const fetchMoreData = () => {
/*
    if (state.items.length >= {images}.images.length) {
      this.setState({ hasMore: false });
      return;
    }*/
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      /*this.setState({
        items: this.state.items.concat(Array.from({ length: 10 }))
      });*/
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  if({images}.images.length !== undefined){
    if(isMobileResize) {
      return (
        <div id="page">
        <div className="navbar">
          <div className="navbar-subheading-bottom container">
            <Navbar.Brand href="/" className="logo">
              <img
                src='../../logo2.png'
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </div>
          <div className="navbar-subheading-top"></div>
            <div className="navbar-subheading-bottom-menu">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/class">Class</Nav.Link>
              <Nav.Link href="/gallery">Artworks</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
          </div>
        </div>
  
        <div id="page-wrapper">       
          <div className="banner-image container">
            <div className = "banner-text">
              <h1 className="container">Artworks</h1>
              <p className="container">Take a peek at our proud students' works</p>
            </div>
            <img className="banner-image-web" src="/banner-web.jpg"/>
            <img className="banner-image-mobile" src="/banner-mobile.jpg"/>
          </div>
  
          <div className="container gallery-mobile">
            <div className="filter-button">
              <a href="/gallery">
                <Button variant="primary">All</Button>
              </a>
              <a href="/gallery/adult">
                <Button variant="outline-primary">Adult</Button>
              </a>
              <a href="/gallery/high">
                <Button variant="outline-primary">High School</Button>
              </a>
              <a href="/gallery/primary">
                <Button variant="outline-primary">Primary</Button>
              </a>
            </div>
            <div className = "row">               
                {{images}.images.map(image => (
                  //<AddGallery isMobile={true} caption={image.node.caption} permalink={image.node.id} media_url={image.node.original}/>         
                  <AddGallery isMobile={true} caption={image.node.caption} permalink={image.node.permalink} media_url={image.node.media_url}/>          
                ))}
            </div>
          </div>
  
          <div className="blank-space"></div>
          
        </div>
        <Footer />
      </div>
      )
    }
    else {
      return (
        <div id="page">
        <div className="navbar">
          <div className="navbar-subheading-bottom container">
            <Navbar.Brand href="/" className="logo">
              <img
                src='../../logo2.png'
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </div>
          <div className="navbar-subheading-top"></div>
            <div className="navbar-subheading-bottom-menu">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/class">Class</Nav.Link>
              <Nav.Link href="/gallery">Artworks</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
          </div>
        </div>
  
        <div id="page-wrapper">       
          <div className="banner-image container">
            <div className = "banner-text">
              <h1 className="container">Artworks</h1>
              <p className="container">Take a peek at our proud students' works</p>
            </div>
            <img className="banner-image-web" src="/banner-web.jpg"/>
            <img className="banner-image-mobile" src="/banner-mobile.jpg"/>
          </div>

          <div className="container gallery-desktop">
            <div className="filter-button">
              <a href="/gallery">
                <Button variant="primary">All</Button>
              </a>
              <a href="/gallery/adult">
                <Button variant="outline-primary">Adult</Button>
              </a>
              <a href="/gallery/high">
                <Button variant="outline-primary">High School</Button>
              </a>
              <a href="/gallery/primaryp">
                <Button variant="outline-primary">Primary</Button>
              </a>
            </div>
            <div className = "row">           
                {{images}.images.map(image => (
                  //<AddGallery isMobile={false} caption={image.node.caption} permalink={image.node.id} media_url={image.node.original}/>          
                  <AddGallery isMobile={false} caption={image.node.caption} permalink={image.node.permalink} media_url={image.node.media_url}/>          
                  ))}
            </div>
          </div>
  
          <div className="blank-space"></div>
          
        </div>
        <Footer />
      </div>
      )
    }
  }

  else {
    return (
      <div id="page">
      <div className="navbar">
        <div className="navbar-subheading-bottom container">
          <Navbar.Brand href="/" className="logo">
            <img
              src='../../logo2.png'
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </div>
        <div className="navbar-subheading-top"></div>
          <div className="navbar-subheading-bottom-menu">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/class">Class</Nav.Link>
            <Nav.Link href="/gallery">Artworks</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
        </div>
      </div>

      <div id="page-wrapper">       
        <div className="banner-image container">
          <div className = "banner-text">
            <h1 className="container">Artworks</h1>
            <p className="container">Take a peek at our proud students' works</p>
          </div>
          <img className="banner-image-web" src="/banner-web.jpg"/>
          <img className="banner-image-mobile" src="/banner-mobile.jpg"/>
        </div>

        <div className="blank-space"></div>
        
      </div>
      <Footer />
    </div>
    )
  }
}