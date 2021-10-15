import React from "react";

import "./LandingPage.css";
import { Form, Row, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import LandingIntro from "./LandingIntro";

export const LandingEventForm = ({ values, handleChange, handleNext }) => {
  console.log(handleChange);

  return (
    <>
      <LandingIntro />
      <Form
        className="landingFormContainer"
        // onSubmit={(e) => saveInitialEvent(e)}
      >
        <Row>
          <Col
            xs={12}
            lg={"auto"}
            style={{
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingBottom: "2px",
            }}
          >
            <Form.Control
              placeholder="What are you planning?"
              type="text"
              // value={values.eventType}
              id="eventType"
              onChange={(e) => handleChange(e)}
            />
          </Col>

          <Col
            xs={12}
            md={"auto"}
            style={{
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingBottom: "2px",
            }}
          >
            <Form.Select
              placeholder="Choose..."
              // value={values.location}
              id="location"
              onChange={(e) => handleChange(e)}
            >
              <option>Location</option>
              <option>London</option>
              <option>Manchester</option>
              <option>South west</option>
              <option>South east</option>
            </Form.Select>
          </Col>
          <Col
            xs={12}
            md={"auto"}
            style={{
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingBottom: "2px",
            }}
          >
            <Form.Select
              // value={values.attendees}
              id="attendees"
              onChange={(e) => handleChange(e)}
            >
              <option>No.people</option>
              <option>0-10</option>
              <option>11-25</option>
              <option>26-50</option>
              <option>51-100</option>
              <option>101-150</option>
              <option>151-200</option>
              <option>200+</option>
            </Form.Select>
          </Col>

          <Col
            xs={12}
            md={3}
            lg={3}
            style={{
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingBottom: "2px",
            }}
          >
            <Form.Group>
              <Form.Control
                placeholder="date"
                type="date"
                // value={values.datetime}
                id="datetime"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Col>
          <Col
            xs={12}
            md={2}
            lg={"auto"}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Button variant="primary" onClick={handleNext}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default withRouter(LandingEventForm);
