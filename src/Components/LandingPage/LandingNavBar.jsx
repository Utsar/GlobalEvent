import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./LandingPage.css";
import logoWhite from "../../Assets/logoWhite.png";

export const LandingNavBar = () => {
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
          <Nav className="ms-auto">
            <Nav.Link href="#ClientLogIn">Client Log In</Nav.Link>
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
              <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
