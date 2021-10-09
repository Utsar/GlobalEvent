import React from "react";

import "./LandingPage.css";
import { Form, Row, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import LandingIntro from "./LandingIntro";

// const { REACT_APP_BACKEND_URL } = process.env;

export const LandingEventForm = ({ handleChange, handleNext }) => {
  console.log(handleChange);

  // const saveInitialEvent = async (e) => {
  //   e.preventDefault();
  //   const url = `${REACT_APP_BACKEND_URL}/initialevents`;
  //   try {
  //     let response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(initialEvent),
  //     });
  //     if (response.status === 200) {
  //       console.log(response.status);
  //       setinitialEvent({
  //         ...initialEvent,
  //         eventType: "",
  //         location: "",
  //         attendees: 1,
  //         datetime: "",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
            md={2}
            lg={2}
            style={{
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingBottom: "2px",
            }}
          >
            <Form.Group>
              <Form.Control
                placeholder="date"
                type="datetime-local"
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
