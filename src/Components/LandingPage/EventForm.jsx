import React from "react"
import "./EventForm.css"
import {Form, Row, Button, Col, Container} from "react-bootstrap"

export const EventForm = () => {
    return (
        <>
        
  <Form className="landingFormContainer" >
  <Row >
  <Col xs={"auto"}>
     
      <Form.Select defaultValue="What are you planning?">
        <option>What are you planning?</option>
        <option>...</option>
      </Form.Select>
    </Col>

   <Col xs={"auto"}>
     
      <Form.Select defaultValue="Choose...">
        <option>Location</option>
        <option>...</option>
      </Form.Select>
    </Col>

    <Form.Group as={Col} controlId="formGridState">
     
      <Form.Select defaultValue="Choose...">
        <option>Number of guest</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
     
      <Form.Select defaultValue="Choose...">
        <option>Date</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
  <Button as={Col} variant="primary" type="submit">
    Submit
  </Button>
  </Row>

  

</Form>
        
</>
    )
}
