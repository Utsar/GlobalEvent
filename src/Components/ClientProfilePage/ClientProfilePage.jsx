import React, { useContext, useEffect } from "react";
import "./ClientProfilePage.css";
import "../FullEventForms/FullEventFormsStyle.css";

import { Container, Row, Navbar, Nav, Col } from "react-bootstrap";

import { Avatar, Button } from "@mui/material";
import { NotificationsNone, MessageOutlined } from "@mui/icons-material";

import ProfileBackground from "../../Assets/clientprofilebackground.jpg";
import logoWhite from "../../Assets/logoWhite.png";
import { withRouter } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { backend } from "../../BackendConnection";

export const ClientProfilePage = () => {
  Date.prototype.toShortFormat = function () {
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let day = this.getDate();

    let monthIndex = this.getMonth();
    let monthName = monthNames[monthIndex];

    let year = this.getFullYear();

    return `${day}-${monthName}-${year}`;
  };

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

  // let anyDate = new Date(client?.createdAt).toShortFormat();
  // console.log("this is anyDate", anyDate);
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
              <p>
                Active events: <span>{client?.events.length}</span>
              </p>

              <p>Completed events: 0</p>

              <p>
                member since: {new Date(client?.createdAt).toShortFormat()}{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="allEvents">
          {client?.events.length > 0 ? (
            client.events.map((event) => (
              <Col key={event._id} xs={12} md={5}>
                <div className="EventFormContainer">
                  <div className="eventsDescription">
                    <div>
                      <span>{event.eventType}</span>in
                      <span>{event.location}</span>for
                      <span>{event.attendees}</span>people
                      <span>{event.datetime}</span>
                    </div>
                  </div>
                  <br />
                  <div className="eventsCategories">
                    {/* <h4 className="eventGategory">Gategory 1</h4> */}
                    <h5>
                      Venue : <span>{event.venueType}</span>
                    </h5>
                    <h5>
                      Description: <span>{event.venueDescription}</span>
                    </h5>
                    <h5 className="eventBudget">
                      Budget: <span>£{event.venueBudget}</span>
                    </h5>

                    <br />
                    {/* <h4 className="eventGategory">Gategory 2</h4> */}
                    <h5>
                      Catering: <span>{event.catererType}</span>
                    </h5>
                    <h5>
                      Description: <span>{event.catererDescription}</span>
                    </h5>
                    <h5 className="eventBudget">
                      Budget: <span>£{event.catererBudget}</span>
                    </h5>
                    <br />
                    {/* <h4 className="eventGategory">Gategory 3</h4> */}
                    <h5>
                      Entertainment: <span>{event.entertainmentType} </span>
                    </h5>
                    <h5>
                      Description: <span>{event.entertainmentDescription}</span>
                    </h5>
                    <h5 className="eventBudget">
                      Budget: <span>£{event.entertainmentBudget}</span>
                    </h5>
                    <br />
                  </div>
                  <input
                    type="button"
                    className="loginButton"
                    value="Publish"
                    onClick={event.handleSubmit}
                  />
                  <input
                    type="button"
                    className="loginButton"
                    value="Edit"
                    onClick={event.handleSubmit}
                  />
                </div>
              </Col>
            ))
          ) : (
            <h1>No events yet</h1>
          )}
        </Row>
      </Container>
      {/* <LandingFooter /> */}
    </>
  );
};
export default withRouter(ClientProfilePage);
