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

          <h3 className="faq-quote-margin">
            "How can we help you?"
          </h3>

        <div className ="container accordianfont content-padding">
          <Accordion>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h2 className="accordianquestion"> How much for classes? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">

                <Card.Body>
                  <p className="accordian-answer">
                  It varies depends on which class you choose.
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer accordian-answer-lastline">
                    You need to contact mobile below. Please check the subsequent FAQ.
                  </p>
                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <h2 className="accordianquestion"> Which classes is for me?  </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                
                <Card.Body>

                <p className="accordian-answer">
                  Please send a text message to 0405-068-004 or email below.
                </p>
                  
                <div newline>
                </div>

                <p className="accordian-answer">
                  Students’ name, age/grade in school, and pictures of artworks as many as possible we need.
                </p>

                <div newline>
                </div>

                <p className="accordian-answer accordian-answer-lastline">
                  Head Teacher Lan Kim will call you back after classes to explain recommended options.
                </p>

                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <h2 className="accordianquestion"> How can I book make up lesson? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                
                <Card.Body>

                  <p className="accordian-answer">
                    Please send a text message to 0405-068-004 with "Which day you can’t attend" and "Which day you want" for a make up lesson.
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer">
                    Head Teacher Lan Kim will reply you back in 24 hours with recommended “date and time” for the make up lesson.
                  </p>
                  
                  <div newline>
                  </div>

                  <p className="accordian-answer">
                    We recommend to book within the week for same topic with classmates or on school holiday season.
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer">
                    Make up request needs at least 24 hours earlier before the class time to book others’ make up lesson for your spot.
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer">
                    No day/Late notices by personal reason will be accepted due to group lesson ratio (3-5 students per 1 teacher)
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer accordian-answer-lastline">
                    All the professional artists are hired weeks ago and should be paid.
                  </p>

                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                
                <h2 className="accordianquestion"> Emergency happened. What can I do? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">

                <Card.Body>

                <p className="accordian-answer">
                  Hi Art Studio allows some exceptional cases for make up and credit.
                </p>

                <div newline>
                </div>

                <p className="accordian-answer">
                  Hospital issue (Dr,Certificate required), Oversea travel (Ticket required), Natural disaster like heavy rain or covid19 out break, or any reasons by studio.
                </p>

                <div newline>
                </div>

                <p className="accordian-answer accordian-answer-lastline">
                  Please leave a text message asap. We will try our best, better than terms and conditions if it was not repeated.
                </p>

                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                
                <h2 className="accordianquestion"> Can I have a trial lessons? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">

                <Card.Body>

                  <p className="accordian-answer">
                    Sorry, We can’t offer any trial lesson due to lack of spots.
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer accordian-answer-lastline">
                    Waiting list is so common for us but  please never hesitate to contact us for frequently changing spots.
                  </p>

                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                
                <h2 className="accordianquestion"> How much pay for your classes? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">

                <Card.Body>

                  <p className="accordian-answer">
                    We have 4 terms for 13wks per a year(52wks).
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer">
                    Each of term period and cost will be sent on envelope with terms and conditions paper.
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer accordian-answer-lastline">
                    All inclusive tuition fee including supplies varies depends on the classes but 16~25$ per an hour.
                  </p>

                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                
                <h2 className="accordianquestion"> How many students and teachers? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">

                <Card.Body>

                  <p className="accordian-answer">
                    10~20 classes, 150~200 students, 6+ teachers per a week.
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer accordian-answer-lastline">
                    Ratio is 3~5 students per 1 teacher.
                  </p>

                </Card.Body>

              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                
                <h2 className="accordianquestion"> Opening on public holiday? </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">

                <Card.Body>

                  <p className="accordian-answer">
                    Head Teacher Lan Kim has always opened 365 but closing on public holiday from 2021 for other teachers.
                  </p>

                  <div newline>
                  </div>

                  <p className="accordian-answer accordian-answer-lastline">
                    Make up lessons and credit available.
                  </p>

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