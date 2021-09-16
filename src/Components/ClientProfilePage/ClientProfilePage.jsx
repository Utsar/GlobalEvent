import React from "react";
import "./ClientProfilePage.css";
import { Container, Row, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { BsList } from "react-icons/bs";

import logoWhite from "../../Assets/logoWhite.png";

export const ClientProfilePage = () => {
  return (
    <>
      <Container fluid className="clientProfilePageContainer">
        <Row>
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
              <Nav className="ms-auto">
                <Nav.Link href="#ClientLogIn">Create new event</Nav.Link>
                <NavDropdown
                  className="landingNavDrop"
                  title="Suppliers Log In"
                  id="collasible-nav-dropdown"
                  href="#SupplierLogIn"
                >
                  <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Become a Supplier
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Support
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <BsList className="clientProfileSideMenuButton" />
          </Col>
          <Col className="clientProfileHero" xs={12} md={4}>
            I'm hero profile page
          </Col>
          <Col xs={12} md={4}>
            I'm newsfeed
          </Col>
        </Row>
      </Container>
    </>
  );
};
