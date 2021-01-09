import React from "react"
import '../../css/newStyle.css'
import Header from "../components/header"

import {Card, Button, Accordion}  from 'react-bootstrap';


export default function faq() {
  return (
    <div id="page-wrapper">


      <Header />

      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        />
      </head>

      <div className="about-image">
        <div className = "about-text">
          <h1 className="container">Frequently Asked Questions</h1>
          <p className="container">Short Paragraph Here</p>
        </div>
        <img src="https://cdn.decoist.com/wp-content/uploads/2017/04/Art-studio-with-a-desk-in-the-center-of-the-room-.jpeg" />
      </div>
      


      <div className ="container accordianfont">
        <Accordion defaultActiveKey="0">

          <Card class="accordianfont">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <i class="fas fa-plus fa-lg"></i> WHAT HAPPENS IF I MISS A CLASS?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <i class="fas fa-plus fa-lg"></i> Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>
      </div>
    </div>



  )
}