import React from "react";
import { Nav } from "react-bootstrap";
import "./LandingPage.css";

export const LandingFooter = () => {
  return (
    <>
      <Nav className="justify-content-center fixed-bottom LPFooter">
        <Nav.Item>
          <Nav.Link className="LPFooterText" href="/home">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="LPFooterText">
            &copy; GlobalEventAuction.com All rights reserved 2021
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="LPFooterText" href="/more">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default LandingFooter;
