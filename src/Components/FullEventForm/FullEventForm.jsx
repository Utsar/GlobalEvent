import "./FullEventForm.css";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

export const FullEventForm = () => {
  return (
    <>
      <Row className="fullEventFormContainer">
        <Form className="my-1" style={{ color: "white" }}>
          <Form.Group className="my-1" controlId="formBasicEmail">
            <Form.Label>
              <h4>What type of Venue do you need?</h4>
            </Form.Label>
            <Form.Control type="text" placeholder="choose or venue type" />
          </Form.Group>
          <Form.Group className="my-1" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe your ideal venue"
              rows={3}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="my-1">
            <Form.Label>Why not upload a photo?</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="my-1" controlId="formBasicPassword">
            <Form.Label>Budget</Form.Label>
            <InputGroup>
              <InputGroup.Text>£</InputGroup.Text>
              <FormControl
                id="inlineFormInputGroupUsername"
                placeholder="Budget"
              />
            </InputGroup>
          </Form.Group>
          <Row className="fullEventFormButtons">
            <Col xs={12} md={4}>
              <Button variant="primary" type="submit">
                Back
              </Button>
            </Col>

            <Col xs={12} md={4}>
              <Button variant="success" type="submit">
                Ready
              </Button>
            </Col>

            <Col xs={12} md={4}>
              <Button variant="primary" type="submit">
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
};
export default withRouter(FullEventForm);
