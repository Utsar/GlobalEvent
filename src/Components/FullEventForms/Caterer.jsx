import React from "react";
import "./FullEventFormsStyle.css";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

export const Caterer = ({
  values,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <>
      <Row className="fullEventFormContainer">
        <Form className="my-1" style={{ color: "white" }}>
          <Form.Group className="my-1">
            <Form.Label>
              <h4>What type of Caterer do you need?</h4>
            </Form.Label>
            <Form.Select
              type="text"
              //   value={initialEvent.catererType}
              id="catererType"
              onChange={(e) => handleChange(e)}
            >
              <option>Choose Cuisine</option>
              <option>British</option>
              <option>Mediderranian</option>
              <option>Indian</option>
              <option>Asian</option>
              <option>American</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              //   value={initialEvent.catererDescription}
              id="catererDescription"
              onChange={(e) => handleChange(e)}
              placeholder="Describe your ideal menu offering"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="my-1">
            <Form.Label>Why not upload a photo?</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="my-1">
            <Form.Label>Budget</Form.Label>
            <InputGroup>
              <InputGroup.Text>£</InputGroup.Text>
              <FormControl
                type="text"
                // value={initialEvent.catererBudget}
                id="catererBudget"
                onChange={(e) => handleChange(e)}
                placeholder="Budget"
              />
            </InputGroup>
          </Form.Group>
          <Row className="fullEventFormButtons">
            <Col xs={12} md={4}>
              <Button variant="primary" onClick={handlePrevious}>
                Back
              </Button>
            </Col>

            <Col xs={12} md={4}>
              <Button variant="success" type="submit">
                Ready
              </Button>
            </Col>

            <Col xs={12} md={4}>
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
};

export default Caterer;
