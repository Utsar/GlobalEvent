import React from "react";
import "./ClientProfilePage.css";
import { Container, Row, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { Avatar, Button } from "@mui/material";
import { NotificationsNone, MessageOutlined } from "@mui/icons-material";
import LandingFooter from "../LandingPage/LandingFooter";

import ProfileBackground from "../../Assets/clientprofilebackground.jpg";
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
        <Row className="clientProfileContainer">
          {/* Profile Menu section */}

          <Col xs={12} md={2} className="profileMenu">
            {/* <BsList className="clientProfileSideMenuButton" size={32} /> */}
          </Col>

          {/* Profile Hero section */}

          <Col
            className="clientProfileHero"
            xs={12}
            md={8}
            style={{ padding: 0 }}
          >
            <div className="clientProfileName">
              <h1>Kristian Utsar</h1>
            </div>
            <div>
              <img
                src={ProfileBackground}
                alt="profileBackground"
                className="clientProfileBackgroundImage"
              ></img>
            </div>
            <div className="clientProfileAvatar">
              <Avatar sx={{ width: 150, height: 150 }} />
            </div>
            <div className="clientProfileButtons">
              <Button
                variant="contained"
                color="success"
                style={{ marginRight: 25 }}
              >
                My events
              </Button>
              <Button variant="contained" color="success">
                My bookings
              </Button>
            </div>
            <div className="clientProfileInfo">
              <p> 2 active events</p>

              <p>4 completed events</p>

              <p>member since</p>
            </div>
          </Col>

          {/* Profile page news section */}

          <Col
            xs={12}
            md={2}
            style={{ padding: 0 }}
            className="profileNewsFeed"
          ></Col>
        </Row>
      </Container>
      {/* <Container fluid className="clientProfilePageContainer">
        <Row className="clientProfileFooter">
          <LandingFooter />
        </Row>
      </Container> */}
    </>
  );
};
export default withRouter(ClientProfilePage);
