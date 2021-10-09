import React from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";

export const LandingIntro = () => {
  return (
    <>
      <Row className="landingIntroContainer">
        <Col>
          <h1>Inspiration is Wonderful</h1>
          <p>Welcome to GlobalEventAuction.com, the home of every event!</p>
        </Col>
      </Row>
    </>
  );
};
export default withRouter(LandingIntro);
