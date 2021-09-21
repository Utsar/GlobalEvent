import React from "react";
import "./SupplierProfilePage.css";

const ClientProfileForSupplier = () => {
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
    </>
  );
};

export default ClientProfileForSupplier;
