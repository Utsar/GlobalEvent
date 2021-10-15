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

export const Entertainment = ({
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
              <h4>Which Entertainment do you need?</h4>
            </Form.Label>
            <Form.Select
              type="text"
              //   value={initialEvent.entertainmentType}
              id="entertainmentType"
              onChange={(e) => handleChange(e)}
              placeholder="choose entertainment type"
            >
              <option>Choose Entertainment</option>
              <option>Dj</option>
              <option>Band</option>
              <option>String (trio - quintet)</option>
              <option>Acapella</option>
              <option>Brass band</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-1">
            <Form.Label>Describe your preferred genre</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              //   value={initialEvent.entertainmentDescription}
              id="entertainmentDescription"
              onChange={(e) => handleChange(e)}
              placeholder="rock band, classical..."
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
                // value={initialEvent.entertainmentBudget}
                id="entertainmentBudget"
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
              <Button variant="success">Ready</Button>
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

export default Entertainment;
