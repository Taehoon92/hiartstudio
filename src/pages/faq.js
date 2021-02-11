import React from "react"
import '../../css/style.css'
import Header from "../components/header"
import Footer from "../components/footer"

import {Card, Button, Accordion}  from 'react-bootstrap';
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'


export default function faq() {
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
        <div className="navbar-subheading-top container"></div>
          <div className="navbar-subheading-bottom container">
            <p>
            VISUAL ART TUTORIAL SPECIALIST
            </p>
          </div>
          <div className="navbar-subheading-bottom-menu container">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/class">Class</Nav.Link>
            <Nav.Link href="/gallery">Artworks</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
        </div>
      </div>

      <div id="page-wrapper">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
          />
        </head>

        {/*
        <div className="banner-image">
          <div className = "banner-text">
            <h1 className="container">Frequently Asked Questions</h1>
            <p className="container">How can we help you?</p>
          </div>
          <img src='/banner.jpg' />
        </div>
        */}

        <div className ="container accordianfont">
          <Accordion>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h2 className="accordianquestion"> <i className="fas fa-plus fa"></i> How much for classes? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">

                <Card.Body>
                  <p>
                  It varies depends on which class you choose.
                  </p>

                  <div newline>
                  </div>

                  <p>
                    You need to contact mobile below. Please check the subsequent FAQ.
                  </p>
                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <h2 className="accordianquestion"> <i className="fas fa-plus fa"></i> Which classes is for me?  </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                
                <Card.Body>
                  Please send a text message to 0405-068-004 or email below.
                  <div newline>
                  </div>
                  Students’ name, age/grade in school, and pictures of artworks as many as possible we need.
                  <div newline>
                  </div>
                  Head Teacher Lan Kim will call you back after classes to explain recommended options.
                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <h2 className="accordianquestion"> <i className="fas fa-plus fa"></i> How can I book make up lesson? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                
                <Card.Body>
                  Please send a text message to 0405-068-004 with "Which day you can’t attend" and "Which day you want" for a make up lesson.
                  <div newline>
                  </div>
                  Head Teacher Lan Kim will reply you back in 24 hours with recommended “date and time” for the make up lesson.
                  <div newline>
                  </div>
                  We recommend to book within the week for same topic with classmates or on school holiday season.
                  <div newline>
                  </div>
                  Make up request needs at least 24 hours earlier before the class time to book others’ make up lesson for your spot.
                  <div newline>
                  </div>
                  No day/Late notices by personal reason will be accepted due to group lesson ratio (3-5 students per 1 teacher)
                  <div newline>
                  </div>
                  All the professional artists are hired weeks ago and should be paid.
                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                
                <h2 className="accordianquestion"> <i className="fas fa-plus fa"></i> Emergency happened. What can I do? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">

                <Card.Body>
                  Hi Art Studio allows some exceptional cases for make up and credit.
                  <div newline>
                  </div>
                  Hospital issue (Dr,Certificate required), Oversea travel (Ticket required), Natural disaster like heavy rain or covid19 out break, or any reasons by studio.
                  <div newline>
                  </div>
                  Please leave a text message asap. We will try our best, better than terms and conditions if it was not repeated.
                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                
                <h2 className="accordianquestion"> <i className="fas fa-plus fa"></i> Can I have a trial lessons? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">

                <Card.Body>
                  Sorry, We can’t offer any trial lesson due to lack of spots.
                  <div newline>
                  </div>
                  Waiting list is so common for us but  please never hesitate to contact us for frequently changing spots.
                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                
                <h2 className="accordianquestion"> <i className="fas fa-plus fa"></i> How much pay for your classes? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">

                <Card.Body>
                  We have 4 terms for 13wks per a year(52wks).
                  <div newline>
                  </div>
                  Each of term period and cost will be sent on envelope with terms and conditions paper.
                  <div newline>
                  </div>
                  All inclusive tuition fee including supplies varies depends on the classes but 16~25$ per an hour.
                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                
                <h2 className="accordianquestion"> <i className="fas fa-plus fa"></i> How many students and teachers? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">

                <Card.Body>
                  10~20 classes, 150~200 students, 6+ teachers per a week.
                  <div newline>
                  </div>
                  Ratio is 3~5 students per 1 teacher.
                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                
                <h2 className="accordianquestion"> <i className="fas fa-plus fa"></i> Opening on public holiday? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">

                <Card.Body>
                  Head Teacher Lan Kim has always opened 365 but closing on public holiday from 2021 for other teachers.
                  <div newline>
                  </div>
                  Make up lessons and credit available.
                </Card.Body>

              </Accordion.Collapse>
            </Card>

          </Accordion>
          
        </div>
      </div>

      <div className="blank-space"></div>

      <Footer />
    </div>



  )
}