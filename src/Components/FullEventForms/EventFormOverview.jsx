import React, { useEffect } from "react";
import "./FullEventFormsStyle.css";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { backend } from "../../BackendConnection";
import { useHistory } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { createContext } from "react";

// const backend = axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL,
//   //   withCredentials: true,
// });

export const EventFormOverview = ({ values }) => {
  const client = useContext(AuthContext);
  const history = useHistory();
  const initialEvent = createContext(values);
  console.log("this is context", initialEvent);

  const {
    eventType,
    location,
    attendees,
    datetime,
    venueType,
    venueDescription,
    venueBudget,
    catererType,
    catererDescription,
    catererBudget,
    entertainmentType,
    entertainmentDescription,
    entertainmentBudget,
  } = values;

  // Save to db
  useEffect(() => {
    localStorage.setItem("newEvent", JSON.stringify(values));
  }, [values]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push("/register");
    // const response = await backend.post("/events", values).then(
    //   (response) => {
    //     {
    //       client ? history.push("/client") : history.push("/register");
    //     }
    //     console.log("this is response log", response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };

  return (
    <>
      <Form className="finalEventFormContainer">
        <Form.Group className="mb-3">
          <Form.Label className="eventSummary">Event Summary</Form.Label>
          <Form.Control type="text" placeholder={eventType} />
          <Form.Control type="text" placeholder={location} />
          <Form.Control type="text" placeholder={attendees} />
          <Form.Control type="text" placeholder={datetime} />
          <Form.Control type="text" placeholder={venueType} />
          <Form.Control type="text" placeholder={venueDescription} />
          <Form.Control type="text" placeholder={venueBudget} />
          <Form.Control type="text" placeholder={catererType} />
          <Form.Control type="text" placeholder={catererDescription} />
          <Form.Control type="text" placeholder={catererBudget} />
          <Form.Control type="text" placeholder={entertainmentType} />
          <Form.Control type="text" placeholder={entertainmentDescription} />
          <Form.Control type="text" placeholder={entertainmentBudget} />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      {/* <Container className="finalEventFormContainer ">
        <Row>
          <Col className="eventSummaryHeader">
            <h1>Event Summary</h1>
          </Col>
        </Row>
        <Row>
          <Col className="eventType">
            <h2>
              {" "}
              Type of event: <span>{eventType}</span>
            </h2>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Location: {location}</h3>
          </Col>
          <Col>
            <h3>Guest: {attendees}</h3>
          </Col>
          <Col>
            <h3>Date: {datetime}</h3>
          </Col>
        </Row>
        <Row className="align">
          <Col>
            <h3>Venue: {venueType}</h3>
          </Col>
          <Col>
            <h3>Description: {venueDescription}</h3>
          </Col>
          <Col>
            <h3>Buget: {venueBudget}</h3>
          </Col>
        </Row>
        <Row className="align">
          <Col>
            <h3>Catering: {catererType}</h3>
          </Col>
          <Col>
            <h3>Description: {catererDescription}</h3>
          </Col>
          <Col>
            <h3>Buget: {catererBudget}</h3>
          </Col>
        </Row>
        <Row className="align">
          <Col>
            <h3>Entertainment: {entertainmentType}</h3>
          </Col>
          <Col>
            <h3>Description: {entertainmentDescription}</h3>
          </Col>
          <Col>
            <h3>Buget: {entertainmentBudget}</h3>
          </Col>
        </Row>
        <Button variant="success" onClick={handleSubmit}>
          Publish
        </Button>
      </Container> */}
    </>
  );
};

export default EventFormOverview;
