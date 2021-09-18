import React from "react";
import "./ClientProfilePage.css";
import { Container, Row, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { Avatar } from "@mui/material";
import { NotificationsNone, MessageOutlined } from "@mui/icons-material";
import LandingFooter from "../LandingPage/LandingFooter";

import logoWhite from "../../Assets/logoWhite.png";
import { withRouter } from "react-router";

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
              <Nav className="ms-auto clientProfileNavItems">
                <Nav.Link href="#ClientLogIn">Create new event</Nav.Link>

                <NotificationsNone
                  sx={{ color: "white", mr: "10px", ml: "10px" }}
                />
                <MessageOutlined sx={{ color: "white" }} />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
      <Container fluid className="clientProfileBackground">
        <Row>
          {/* Profile Menu section */}

          <Col xs={12} md={2}>
            <BsList className="clientProfileSideMenuButton" size={32} />
          </Col>

          {/* Profile Hero section */}

          <Col className="clientProfileHero" xs={12} md={8}>
            <div className="clientProfileAvatar">
              <Avatar sx={{ width: 150, height: 150 }} />
            </div>
            <div className="clientProfileName">
              <h1>Kristian Utsar</h1>
            </div>
            <div>
              <p>
                {" "}
                2 active events
                <span> click for more info</span>
              </p>
              <p>
                {" "}
                4 completed events
                <span> click for more info</span>
              </p>
            </div>
            <div>
              <p>member since</p>
            </div>
          </Col>

          {/* Profile page news section */}

          <Col xs={12} md={2}>
            news feed
          </Col>
        </Row>
      </Container>
      <Container fluid className="clientProfilePageContainer">
        <Row className="clientProfileFooter">
          <LandingFooter />
        </Row>
      </Container>
    </>
  );
};
export default withRouter(ClientProfilePage);
