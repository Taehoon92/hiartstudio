import React from "react"
import '../../css/style.css'
import Header from "../components/header"
import Footer from "../components/footer"

import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import { Img, request } from "graphql-request"
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'


const query = `
  graphql {
    hashtag {
      edge_hashtag_to_media {
        edges {
          node {
            display_url
          }
        }
      }
    }
  }
`;

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

  return (
    <div id="page">
      <div className="navbar">
        <div className="navbar-subheading-bottom container">
          <Navbar.Brand href="/" className="logo container">
            <img
              src='../../logo2.png'
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </div>
        <div className="navbar-subheading-top"></div>
          <div className="navbar-subheading-bottom-menu container">
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
          <img src='/banner.jpg' />
        </div>
        

        <div className="blank-space"></div>


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

        <div className="container gallery-mobile">

          <div class="gallery-box col-12">
            <a href={data.allInstagramContent.edges[0].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[0].node.media_url} />
              <div className="gallery-box-description-layer">
                <p className="gallery-box-description">{data.allInstagramContent.edges[0].node.caption}</p>
              </div>
            </a>
          </div>

          <div class="gallery-box col-12">
          <a href={data.allInstagramContent.edges[1].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[1].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[1].node.caption}</p>
                </div>
              </a>
          </div>

          <div class="gallery-box col-12">
            <a href={data.allInstagramContent.edges[2].node.permalink} target="_blank"> 
              <img className="gallery-box-image" src={data.allInstagramContent.edges[2].node.media_url} />
              <div className="gallery-box-description-layer">
                <p className="gallery-box-description">{data.allInstagramContent.edges[2].node.caption}</p>
              </div>
            </a>
          </div>

          <div class="gallery-box col-12">
          <a href={data.allInstagramContent.edges[3].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[3].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[3].node.caption}</p>
                </div>
              </a>
          </div>

          <div class="gallery-box col-12">
          <a href={data.allInstagramContent.edges[4].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[4].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[4].node.caption}</p>
                </div>
              </a>
          </div>

          <div class="gallery-box col-12">
          <a href={data.allInstagramContent.edges[5].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[5].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[5].node.caption}</p>
                </div>
              </a>
          </div>

          <div class="gallery-box col-12">
          <a href={data.allInstagramContent.edges[6].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[6].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[6].node.caption}</p>
                </div>
              </a>
          </div>

          <div class="gallery-box col-12">
          <a href={data.allInstagramContent.edges[7].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[7].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[7].node.caption}</p>
                </div>
              </a>
          </div>

          <div class="gallery-box col-12">
          <a href={data.allInstagramContent.edges[8].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[8].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[8  ].node.caption}</p>
                </div>
              </a>
          </div>

        </div>

        <div className="blank-space"></div>
        
      </div>
      <Footer />
    </div>
  )
}