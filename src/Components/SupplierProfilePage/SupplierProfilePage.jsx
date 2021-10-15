import React from "react";
import "./SupplierProfilePage.css";
import { useState } from "react";
import { Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import { NotificationsNone, MessageOutlined } from "@mui/icons-material";
import logoWhite from "../../Assets/logoWhite.png";
import supplierHero from "../../Assets/supplierhero.jpg";
import { Avatar, Button } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import beachCeremony from "../../Assets/beachCeremony.jpg";
import food from "../../Assets/food.jpg";
import tableSetup from "../../Assets/tableSetup.jpg";
import drinks from "../../Assets/drinks.jpg";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { LoremIpsum } from "react-lorem-ipsum";

// star rating values
// const labels = {
//   0.5: "Useless",
//   1: "Useless+",
//   1.5: "Poor",
//   2: "Poor+",
//   2.5: "Ok",
//   3: "Ok+",
//   3.5: "Good",
//   4: "Good+",
//   4.5: "Excellent",
//   5: "Excellent+",
// };

export const SupplierProfilePage = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <>
      <Container fluid className="SupplierProfilePageNav">
        <Row>
          <Navbar
            className="landingNav"
            collapseOnSelect
            expand="lg"
            bg="transparent"
            variant="dark"
          >
            <Navbar.Brand href="/">
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
              <Nav className="ms-auto SupplierProfileNavItems">
                <Nav.Link href="#ClientLogIn">View auctions</Nav.Link>

                <NotificationsNone
                  sx={{ color: "white", mr: "10px", ml: "10px" }}
                />
                <MessageOutlined sx={{ color: "white" }} />
                <Avatar
                  src={supplierHero}
                  sx={{ color: "white", mr: "10px", ml: "20px" }}
                />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>

      <Container fluid className="supplierProfileHeroContainer">
        <div className="SupplierProfileImage">
          <img
            className="supplierHeroImg"
            src={supplierHero}
            alt="supplier hero"
          />
        </div>
        <Row style={{ padding: 0, margin: 0 }}>
          <Col xs={12} md={2} className="supplierProfileNavbar">
            <div className="supplierProfileAvatar">
              <Avatar src={supplierHero} style={{ height: 100, width: 100 }} />
            </div>
            <div>
              <li className="supplierProfileNavItems">
                <ul>Personal details</ul>
                <ul>Services</ul>
                <ul>Documents</ul>
                <ul>Notification Settings</ul>
                <ul>Gallery</ul>
              </li>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className="supplierProfileHero1">
              <h2>Kristian Utsar`s company</h2>
            </div>
            <div className="parallax">
              <ParallaxProvider>
                <ParallaxImg
                  imgsrc={beachCeremony}
                  height="400px"
                  opacity=".2"
                ></ParallaxImg>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <ParallaxImg
                  imgsrc={food}
                  height="400px"
                  opacity=".5"
                ></ParallaxImg>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <ParallaxImg
                  imgsrc={tableSetup}
                  height="400px"
                  opacity=".5"
                ></ParallaxImg>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <ParallaxImg
                  imgsrc={drinks}
                  height="400px"
                  opacity=".5"
                ></ParallaxImg>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </ParallaxProvider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SupplierProfilePage;
