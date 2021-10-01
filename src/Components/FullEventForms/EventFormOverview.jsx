import React from "react";
import "./FullEventFormsStyle.css";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const backend = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  //   withCredentials: true,
});

export const EventFormOverview = ({ values }) => {
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

  //   Save to db
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await backend.post("/events", values).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <Form className="finalEventFormContainer">
        <Form.Group className="mb-3">
          <Form.Label className="eventSummary">Event Summary</Form.Label>
          <Form.Control type="email" placeholder={eventType} />
          <Form.Control type="email" placeholder={location} />
          <Form.Control type="email" placeholder={attendees} />
          <Form.Control type="email" placeholder={datetime} />
          <Form.Control type="email" placeholder={venueType} />
          <Form.Control type="email" placeholder={venueDescription} />
          <Form.Control type="email" placeholder={venueBudget} />
          <Form.Control type="email" placeholder={catererType} />
          <Form.Control type="email" placeholder={catererDescription} />
          <Form.Control type="email" placeholder={catererBudget} />
          <Form.Control type="email" placeholder={entertainmentType} />
          <Form.Control type="email" placeholder={entertainmentDescription} />
          <Form.Control type="email" placeholder={entertainmentBudget} />
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
