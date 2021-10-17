import React, { useEffect, useState } from "react";
import "./Auctions.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../LandingPage/LandingPage.css";
import logoWhite from "../../Assets/logoWhite.png";
import { withRouter } from "react-router";
import { backend } from "../../BackendConnection";

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

            <Nav.Link href="/supplier">Sign out</Nav.Link>
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
          <div>
            <div>{showAuction?.auction?.eventType}</div>
            <div>{showAuction?.auction?.eventType}</div>
            <div>{showAuction?.auction?.eventType}</div>
            <div>{showAuction?.auction?.eventType}</div>
            <div>{showAuction?.auction?.eventType}</div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Auctions);
