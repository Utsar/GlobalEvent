import React, { useContext, useEffect } from "react";
import "./ClientProfilePage.css";
import {
  Container,
  Row,
  Navbar,
  Nav,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  CardGroup,
} from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { Avatar, Button } from "@mui/material";
import { NotificationsNone, MessageOutlined } from "@mui/icons-material";
import LandingFooter from "../LandingPage/LandingFooter";

import ProfileBackground from "../../Assets/clientprofilebackground.jpg";
import logoWhite from "../../Assets/logoWhite.png";
import { withRouter } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { backend } from "../../BackendConnection";

export const ClientProfilePage = () => {
  const { client, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const fetchClient = async () => {
      const response = await backend.get("/clients/me");
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      console.log(client);

      console.log("this is response", response.data);
    };
    fetchClient();
  }, []);
  console.log("this is client log", client);

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
          {/* Profile Hero section */}

          <Col className="clientProfileHero" xs={12} style={{ padding: 0 }}>
            <div className="clientProfileName">
              <h1>{client?.firstName + " " + client?.surname}</h1>
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

              <p>member since: {client?.createdAt}</p>
            </div>
          </Col>
        </Row>
        <Row>
          {/* <Col className="clientProfileEvents" xs={12}>
            <div className="clientProfileEventsContainer">
              <h1>My events</h1>
              {client.events.map((event) => (
                <Card key={event._id} bg={"transparent"} text="white">
                  <Card.Body>
                    <Card.Title>Event name: {event.eventType}</Card.Title>
                    <Card.Title>Event location: {event.location}</Card.Title>
                    <Card.Title>Event attendees: {event.attendees}</Card.Title>
                    <Card.Title>Event attendees: {event.datetime}</Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Category:</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Venue: {event.venueType}</ListGroupItem>
                    <ListGroupItem>
                      Description: {event.venueDescription}
                    </ListGroupItem>
                    <ListGroupItem>Budget: {event.venueBudget}</ListGroupItem>
                  </ListGroup>

                  <Card.Body>
                    <Card.Title>Category:</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Entertainment: {event.entertainmentType}
                    </ListGroupItem>
                    <ListGroupItem>
                      Description: {event.entertainmentDescription}
                    </ListGroupItem>
                    <ListGroupItem>
                      Budget: {event.entertainmentBudget}
                    </ListGroupItem>
                  </ListGroup>

                  <Card.Body>
                    <Card.Title>Category:</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Caterer: {event.catererType}</ListGroupItem>
                    <ListGroupItem>
                      Description: {event.catererDescription}
                    </ListGroupItem>
                    <ListGroupItem>Budget: {event.Budget}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};
export default withRouter(ClientProfilePage);
