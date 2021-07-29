import React from "react"
import { useState }from "react"
import "./LandingPage.css"
import {Form, Row, Button, Col} from "react-bootstrap"


const {REACT_APP_BACKEND_URL} = process.env;

export const LandingEventForm = () => {

  const [initialEvent, setinitialEvent] = useState({
    eventType: "",
    location: "",
    attendees: 1,
    datetime:""
  })

  const inputChange = (e) => {

    let id = e.target.id
    setinitialEvent({...initialEvent, [id]: e.target.value})
  }

  const saveInitialEvent = async (e) => {
    e.preventDefault()
    const url=`${REACT_APP_BACKEND_URL}/initialevents`
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(initialEvent)
      })
      if (response.status === 200) {
        console.log(response.status)
      setinitialEvent({...initialEvent, eventType: "", location: "", attendees: 1, datetime:""})
      }}      
     catch (error) {
      console.log(error)      
    }}
    return (
        <>
        
  <Form className="landingFormContainer" onSubmit={(e) => saveInitialEvent(e)} >
  <Row >
  <Col xs={12} lg={"auto"} style={{ paddingRight: "5px", paddingLeft: "5px", paddingBottom: "2px"  }}>
     
  <Form.Control  placeholder="What are you planning?" type="text" value={initialEvent.eventType} id="eventType" onChange={e => inputChange(e)} />
    </Col>

   <Col xs={12} md={"auto"} style={{ paddingRight: "5px", paddingLeft: "5px", paddingBottom: "2px"  }}>
     
      <Form.Select defaultValue="Choose...">
        <option>Location</option>
        <option>...</option>
      </Form.Select>
    </Col>
    <Col xs={12} md={"auto"} style={{ paddingRight: "5px", paddingLeft: "5px", paddingBottom: "2px"  }}>
     
    <Form.Select value={initialEvent.attendees} id="attendees" onChange={e => inputChange(e)} >
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


<Col xs={12} md={2} lg={2} style={{ paddingRight: "5px", paddingLeft: "5px", paddingBottom: "2px" }}>
    <Form.Group >
     
      <Form.Control placeholder="date" type="datetime-local" value={initialEvent.datetime} id="date" onChange={e => inputChange(e)}/>
        
    </Form.Group>
</Col>
<Col xs={12} md={2} lg={"auto"} style={{ paddingRight: "5px", paddingLeft: "5px" }}>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
  </Col>
  </Row>

  

</Form>
        
</>
    )
}
