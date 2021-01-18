import React from "react"
import '../../css/style.css'
import Header from "../components/header"
import Footer from "../components/footer"

import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import { Img, request } from "graphql-request"


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
/*
  request("https://www.instagram.com/explore/tags/hooonstagram/?__a=1", query).then((data1)=>
    console.log(data1)
  )
  */
  return (
    <div>
      <Header />
      <div id="page-wrapper">
        <div className="banner-image">
          <div className = "banner-text">
            <h1 className="container">Gallery</h1>
            <p className="container">Take a peek at our proud students' works</p>
            <p className="container">Click on the image to enlarge</p>
          </div>
          <img src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/12804615_844351048999090_7366405912543968522_n.jpg?_nc_cat=109&ccb=2&_nc_sid=6e5ad9&_nc_ohc=D2wN4XsJWwgAX_tF7p5&_nc_ht=scontent-syd2-1.xx&oh=302c9917bb8833ddf790ab3dd403e33b&oe=602201FC" />
        </div>

        <div className="blank-space"></div>


        <div className="container">

        
          <div className = "row"> 
          <div className="gallery-box col-3">
              <a href={data.allInstagramContent.edges[0].node.permalink} target="_blank"> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[0].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[0].node.caption}</p>
                </div>
              </a>
            </div>  

            <div className="gallery-box col-3">
              <a href={data.allInstagramContent.edges[1].node.permalink}> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[1].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[1].node.caption}</p>
                </div>
              </a>
            </div>  


            <div className="gallery-box col-3">
              <a href={data.allInstagramContent.edges[2].node.permalink}> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[2].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[2].node.caption}</p>
                </div>
              </a>
            </div>  

            <div className="gallery-box col-3">
              <a href={data.allInstagramContent.edges[3].node.permalink}> 
                <img className="gallery-box-image" src={data.allInstagramContent.edges[3].node.media_url} />
                <div className="gallery-box-description-layer">
                  <p className="gallery-box-description">{data.allInstagramContent.edges[3].node.caption}</p>
                </div>
              </a>
            </div>  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}