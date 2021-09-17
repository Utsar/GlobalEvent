import React from "react";
import "./SupplierProfilePage.css";
import { useState } from "react";
import { Container, Row, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { NotificationsNone, MessageOutlined } from "@mui/icons-material";
import logoWhite from "../../Assets/logoWhite.png";
import supplierHero from "../../Assets/supplierhero.jpg";
import { Avatar, Button } from "@mui/material";
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
          <Col xs={12} md={10}>
            <div className="supplierProfileHero1">
              <h2>Kristian Utsar`s company</h2>
              <Button
                variant="contained"
                color="success"
                style={{ marginTop: 5, marginRight: 50 }}
              >
                Set up
              </Button>
            </div>
            <div className="supplierProfileHero2">
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  className="supplierProfileHeroRating"
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <span>total reviews</span>
              </Box>
              <li className="clientProfileInfo">
                <ul>services done</ul>
                <ul>acive bookings</ul>
                <ul>Profile views</ul>
                <ul>member since</ul>
              </li>
            </div>
            <div className="supplierProfileHero3">
              <LoremIpsum p={1} />
            </div>
            <div className="supplierProfileHero#"></div>
            <div className="supplierProfileHero#"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
