import "./FullEventFormsStyle.css";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { withRouter } from "react-router";

export const Venue = ({ values, handleChange, handleNext, handlePrevious }) => {
  return (
    <>
      <Row className="fullEventFormContainer">
        <Form className="my-1" style={{ color: "white" }}>
          <Form.Group className="my-1">
            <Form.Label>
              <h4>What type of Venue do you need?</h4>
            </Form.Label>
            <Form.Select
              type="text"
              // value={initialEvent.venueType}
              id="venueType"
              onChange={(e) => handleChange(e)}
              placeholder="choose or venue type"
            >
              <option>Hotel</option>
              <option>Restaurant</option>
              <option>Golf course</option>
              <option>Church</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              // value={initialEvent.venueDescription}
              id="venueDescription"
              onChange={(e) => handleChange(e)}
              placeholder="Describe your ideal venue"
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
                // value={initialEvent.venueBudget}
                id="venueBudget"
                onChange={(e) => handleChange(e)}
                placeholder="Budget"
              />
            </InputGroup>
          </Form.Group>
          <Row className="fullEventFormButtons">
            <Col xs={12} md={3} style={{ marginLeft: "60px" }}>
              <Button variant="primary" onClick={handlePrevious}>
                Back
              </Button>
            </Col>

            <Col xs={12} md={3}>
              <Button variant="success" type="submit">
                Ready
              </Button>
            </Col>

            <Col xs={12} md={3}>
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
export default withRouter(Venue);
