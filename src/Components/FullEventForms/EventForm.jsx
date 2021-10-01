import React from "react";
import "./FullEventFormsStyle.css";
import { useState } from "react";
import LandingEventForm from "../LandingPage/LandingEventForm";
import Caterer from "./Caterer";
import Entertainment from "./Entertainment";
import EventFormOverview from "./EventFormOverview";
import { Venue } from "./Venue";

import { withRouter } from "react-router";

export const EventForm = () => {
  // Steps
  const [activeStep, setActiveStep] = useState(0);

  const getSteps = () => {
    return ["LandingEventForm", "Venue", "Caterer", "Entertainment"];
  };
  const steps = getSteps();

  // State variables
  const [initialEvent, setinitialEvent] = useState({
    eventType: "",
    location: "",
    attendees: 1,
    datetime: "",
    venueType: "",
    venueDescription: "",
    venueBudget: "",
    catererType: "",
    catererDescription: "",
    catererBudget: "",
    entertainmentType: "",
    entertainmentDescription: "",
    entertainmentBudget: "",
  });
  console.log(initialEvent);

  //   navigate form

  const handleNext = () => {
    setActiveStep((nextStep) => nextStep + 1);
  };
  const handlePrevious = () => {
    setActiveStep((previousStep) => previousStep - 1);
  };

  //  handle input change

  const handleChange = (e) => {
    let id = e.target.id;
    setinitialEvent({ ...initialEvent, [id]: e.target.value });
  };

  //   Save to database

  return (
    <>
      {activeStep === 0 && (
        <LandingEventForm handleChange={handleChange} handleNext={handleNext} />
      )}
      {activeStep === 1 && (
        <Venue
          values={initialEvent}
          handleChange={handleChange}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
      {activeStep === 2 && (
        <Caterer
          values={initialEvent}
          handleChange={handleChange}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
      {activeStep === 3 && (
        <Entertainment
          values={initialEvent}
          handleChange={handleChange}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
      {activeStep === 4 && (
        <EventFormOverview values={initialEvent} handleChange={handleChange} />
      )}
    </>
  );
};

export default withRouter(EventForm);
