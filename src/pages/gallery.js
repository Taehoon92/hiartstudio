import React, { useEffect } from "react"
import '../../css/style.css'
import Footer from "../components/footer"

import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'

import Media from 'react-media';

export default function Gallery() {

  const data = useStaticQuery(graphql`
  query MyQuery {
    allInstagramContent {
      edges {
        node {
          media_url
          caption
          permalink
        }
      }
    }
  }`)
  
  let arrayOfInstaImages = _get(data, 'allInstagramContent.edges.node')
  let isMobile = 1;


  if (typeof window !== `undefined`) {
    isMobile = window.innerWidth <576;

  }  

  const handleResize = () => {
    if (typeof window !== `undefined`) {
      isMobile = window.innerWidth <576;
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  

  if(isMobile) {
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
          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[0].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[0].node.media_url} />
            </a>
            <p>{data.allInstagramContent.edges[0].node.caption}</p>
          </div>

          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[1].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[1].node.media_url} />
            </a>
            <p>{data.allInstagramContent.edges[1].node.caption}</p>
          </div>

          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[2].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[2].node.media_url} />

            </a>
            <p>{data.allInstagramContent.edges[2].node.caption}</p>
          </div>
          
          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[3].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[3].node.media_url} loading="lazy"/>
            </a>
            <p>{data.allInstagramContent.edges[3].node.caption}</p>
          </div>

          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[4].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[4].node.media_url} loading="lazy"/>
            </a>
            <p>{data.allInstagramContent.edges[4].node.caption}</p>
          </div>

          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[5].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[5].node.media_url} loading="lazy"/>
            </a>
            <p>{data.allInstagramContent.edges[5].node.caption}</p>
          </div>

          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[6].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[6].node.media_url} loading="lazy"/>
            </a>
            <p>{data.allInstagramContent.edges[6].node.caption}</p>
          </div>

          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[7].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[7].node.media_url} loading="lazy"/>
            </a>
            <p>{data.allInstagramContent.edges[7].node.caption}</p>
          </div>

          <div className="gallery-box col-12">
            <a href={data.allInstagramContent.edges[8].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[8].node.media_url} loading="lazy"/>
            </a>
            <p>{data.allInstagramContent.edges[8].node.caption}</p>
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
          <div className = "row"> 
            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[0].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[0].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[0].node.caption}</p>
                </div>
              </a>
            </div>

            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[1].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[1].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[1].node.caption}</p>
                </div>
              </a>
            </div>

            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[2].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[2].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[2].node.caption}</p>
                </div>
              </a>
            </div>

            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[3].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[3].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[3].node.caption}</p>
                </div>
              </a>
            </div>

            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[4].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[4].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[4].node.caption}</p>
                </div>
              </a>
            </div>

            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[5].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[5].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[5].node.caption}</p>
                </div>
              </a>
            </div>

            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[6].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[6].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[6].node.caption}</p>
                </div>
              </a>
            </div>

            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[7].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[7].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[7].node.caption}</p>
                </div>
              </a>
            </div>

            <div className="gallery-box col-4">
              <a href={data.allInstagramContent.edges[8].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[8].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[8].node.caption}</p>
                </div>
              </a>
            </div>

          </div>
        </div>

        <div className="blank-space"></div>
        
      </div>
      <Footer />
    </div>
    )
  }
}