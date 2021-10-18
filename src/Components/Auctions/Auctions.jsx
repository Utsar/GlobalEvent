import React, { useEffect, useState } from "react";
import "./Auctions.css";
import "../FullEventForms/FullEventFormsStyle.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../LandingPage/LandingPage.css";
import logoWhite from "../../Assets/logoWhite.png";
import { withRouter } from "react-router";
import { backend } from "../../BackendConnection";
import EventFormOverview from "../FullEventForms/EventFormOverview";

export const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await backend.get("/events");
      console.log(response.data);
      setAuctions(response.data);
    };
    fetchData();
  }, []);

  const [showAuction, setShowAuction] = useState({});

  const handleClick = (value) => () => {
    setShowAuction(value);

    console.log(value.auction.eventType);
  };
  console.log("thi sis showAuction", showAuction);

  return (
    <>
      <Navbar
        className="landingNav"
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img
            src={logoWhite}
            width="195px"
            height="75px"
            alt="GlobalEventAuction.com logo-white"
            className="LandingLogo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{ marginRight: "30px" }}>
            <Nav.Link href="/supplier">Home</Nav.Link>

            <Nav.Link href="/login">Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="headline">
        <Row>
          <h1>Auctions</h1>
        </Row>
        <Row>
          <h1>Info</h1>
        </Row>
      </Container>
      <Container className="auctionsContainer">
        <Row className="auctions">
          {auctions?.length > 0 ? (
            auctions.map((auction, index) => (
              <Col xs={12} key={auction._id} style={{ padding: "5px" }}>
                <div className="auctionsList">
                  <div>
                    <div style={{ minWidth: "50px" }}>
                      Name: {auction?.eventType}
                    </div>
                    <div>Location: {auction?.location}</div>
                    <div>Pax: {auction?.attendees}</div>
                    <div>Date: {auction?.datetime}</div>
                  </div>

                  <Button
                    style={{ padding: "30px" }}
                    variant="primary"
                    onClick={handleClick({ auction })}
                  >
                    View
                  </Button>
                  <Button variant="success" onClick={handleClick({ auction })}>
                    Make a Bid
                  </Button>
                </div>
              </Col>
            ))
          ) : (
            <h1>No auctions</h1>
          )}
        </Row>
        <Row className="auctionInfo">
          <div className="finalEventFormContainer auctionInfoContainer">
            <div className="eventSummary">
              <h2>Event Summary</h2>
            </div>
            <br />
            <div className="eventDescription">
              <div>
                {/* <span>Name:</span> */}
                <span>{showAuction?.auction?.eventType}</span>in
                {/* <span>Location:</span> */}
                <span>{showAuction?.auction?.location}</span>for
                {/* <span>No. :</span> */}
                <span>{showAuction?.auction?.attendees}</span>people
                {/* <span>Date:</span> */}
                <span>{showAuction?.auction?.datetime}</span>
              </div>
            </div>

            <div className="eventCategories">
              {/* <h4 className="eventGategory">Gategory 1</h4> */}
              <h5>
                Venue : <span>{showAuction?.auction?.venueType}</span>
              </h5>
              <h5>
                Description:{" "}
                <span>{showAuction?.auction?.venueDescription}</span>
              </h5>
              <h5 className="eventBudget">
                Budget: <span>£{showAuction?.auction?.venueBudget}</span>
              </h5>

              <br />
              {/* <h4 className="eventGategory">Gategory 2</h4> */}
              <h5>
                Catering: <span>{showAuction?.auction?.catererType}</span>
              </h5>
              <h5>
                Description:{" "}
                <span>{showAuction?.auction?.catererDescription}</span>
              </h5>
              <h5 className="eventBudget">
                Budget: <span>£{showAuction?.auction?.catererBudget}</span>
              </h5>
              <br />
              {/* <h4 className="eventGategory">Gategory 3</h4> */}
              <h5>
                Entertainment:{" "}
                <span>{showAuction?.auction?.entertainmentType} </span>
              </h5>
              <h5>
                Description:{" "}
                <span>{showAuction?.auction?.entertainmentDescription}</span>
              </h5>
              <h5 className="eventBudget">
                Budget:{" "}
                <span>£{showAuction?.auction?.entertainmentBudget}</span>
              </h5>
              <br />
            </div>
            {/* <input
              type="button"
              className="loginButton"
              value="Submit"
              onClick={handleSubmit}
            /> */}
          </div>
          {/* <div className="auctionInfoContainer">
            <div>Gategory 1</div>
            <div>{showAuction?.auction?.venueType}</div>
            <div>{showAuction?.auction?.venueDescription}</div>
            <div>{showAuction?.auction?.venueBudget}</div>
            <div>Gategory 2</div>
            <div>{showAuction?.auction?.catererType}</div>
            <div>{showAuction?.auction?.catererDescription}</div>
            <div>{showAuction?.auction?.catererBudget}</div>
            <div>Gategory 3</div>
            <div>{showAuction?.auction?.entertainmentType}</div>
            <div>{showAuction?.auction?.entertainmentDescription}</div>
            <div>{showAuction?.auction?.entertainmentBudget}</div>
          </div> */}
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Auctions);
