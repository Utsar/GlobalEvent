import React, { useEffect, useState } from "react";
import "./Auctions.css";
// import "../FullEventForms/FullEventFormsStyle.css";
import { Table, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../LandingPage/LandingPage.css";
import logoWhite from "../../Assets/logoWhite.png";
import { withRouter } from "react-router";
import { backend } from "../../BackendConnection";
import EventFormOverview from "../FullEventForms/EventFormOverview";

export const Auctions = () => {
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

  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await backend.get("/events");
      console.log(response.data);
      setAuctions(response.data);
    };
    fetchData();
  }, []);

  // const [bid, setBid] = useState(false);

  // const handleClick = (event) => {
  //   event.target.classList.add("bid");
  // };
  // console.log("thi sis showAuction", showAuction);

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
          <Nav className="ms-auto" style={{ marginRight: "30px" }}>
            <Nav.Link href="/supplier">Home</Nav.Link>

            <Nav.Link href="/login">Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="headline">
        <Row>
          <h1>List of active Auctions</h1>
        </Row>
      </Container>
      <Container className="auctionsContainer">
        <Row className="auctions">
          {auctions?.length > 0 ? (
            auctions
              .map((auction, index) => (
                <Col xs={12} key={auction._id} style={{ padding: "5px" }}>
                  <Table striped bordered hover variant="dark">
                    <thead className="eventsDescriptionContainer">
                      <tr className="eventsDescriptionContainer">
                        <td>Auction no. {index}</td>
                        <td
                          colSpan="3"
                          className="eventsDescription"
                          style={{ textAlign: "center" }}
                        >
                          <span>{auction?.eventType}</span>in
                          <span>{auction?.location}</span>for
                          <span>{auction?.attendees}</span>guests
                          <span>
                            {new Date(auction?.datetime).toShortFormat()}
                          </span>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            className="button"
                            value="Publish"
                            // onClick={event.handleSubmit}
                          >
                            View client
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th>Gategory</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Budget</th>
                        <th style={{ textAlign: "center" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Venue</td>
                        <td>{auction?.venueType}</td>
                        <td>{auction?.venueDescription}</td>
                        <td>{auction?.budget}</td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            className="button"
                            value="Publish"
                            // onClick={(handleClick = () => {})}
                          >
                            Bid
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Catering</td>
                        <td>{auction?.catererType}</td>
                        <td>{auction?.catererDescription}</td>
                        <td>{auction?.catererBudget}</td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            className="button"
                            value="Publish"
                            onClick={auction?.handleSubmit}
                          >
                            Bid
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Entertainment</td>

                        <td>{auction?.entertainmentType}</td>
                        <td>{auction?.entertainmentDescription}</td>
                        <td>{auction?.entertainmentBudget}</td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            className="button"
                            value="Bid"
                            // onClick={handleClick}
                          >
                            Bid
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              ))
              .sort(function (a, b) {
                let dateA = a.index,
                  dateB = b.index;
                return dateA - dateB;
              })
          ) : (
            <h1>No auctions</h1>
          )}
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Auctions);
