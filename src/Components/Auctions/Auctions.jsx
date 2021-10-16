import React, { useEffect, useState } from "react";
import "./Auctions.css";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
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

  const [showAuction, setShowAuction] = useState(false);

  const handleClick = (value) => () => {
    setShowAuction(value);

    console.log(value.auction.eventType);
  };

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
      <Container className="Auctions">
        <Row>
          <h1>Auctions</h1>
        </Row>
        <Row>
          {auctions?.length > 0 ? (
            auctions.map((auction, index) => (
              <Col xs={12} key={auction._id}>
                <div className="auctionsList">
                  <div>
                    <span>Name: {auction?.eventType}</span>
                    <span>Location: {auction?.location}</span>
                    <span>Pax: {auction?.attendees}</span>
                    <span>Date: {auction?.datetime}</span>
                    <Button
                      variant="primary"
                      onClick={handleClick({ auction })}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <h1>No auctions</h1>
          )}
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Auctions);
