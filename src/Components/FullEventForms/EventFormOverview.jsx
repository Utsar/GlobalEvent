import React, { useEffect } from "react";
import "./FullEventFormsStyle.css";

import { useHistory } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { createContext } from "react";

export const EventFormOverview = ({ values }) => {
  const client = useContext(AuthContext);
  const history = useHistory();
  const initialEvent = createContext(values);
  console.log("this is context", initialEvent);

  const {
    eventType,
    location,
    attendees,
    datetime,
    venueType,
    venueDescription,
    venueBudget,
    catererType,
    catererDescription,
    catererBudget,
    entertainmentType,
    entertainmentDescription,
    entertainmentBudget,
  } = values;

  // Save to db
  useEffect(() => {
    localStorage.setItem("newEvent", JSON.stringify(values));
  }, [values]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <>
      <div className="formDiv"></div>
      <div className="finalEventFormContainer">
        <div className="eventSummary">
          <h2>Event Summary</h2>
        </div>
        <br />
        <div className="eventDescription">
          <div>
            {/* <span>Name:</span> */}
            <span>{eventType}</span>in
            {/* <span>Location:</span> */}
            <span>{location}</span>for
            {/* <span>No. :</span> */}
            <span>{attendees}</span>people
            {/* <span>Date:</span> */}
            <span>{datetime}</span>
          </div>
        </div>
        <br />
        <div className="eventCategories">
          {/* <h4 className="eventGategory">Gategory 1</h4> */}
          <h5>
            Venue : <span>{venueType}</span>
          </h5>
          <h5>
            Description: <span>{venueDescription}</span>
          </h5>
          <h5 className="eventBudget">
            Budget: <span>£{venueBudget}</span>
          </h5>

          <br />
          {/* <h4 className="eventGategory">Gategory 2</h4> */}
          <h5>
            Catering: <span>{catererType}</span>
          </h5>
          <h5>
            Description: <span>{catererDescription}</span>
          </h5>
          <h5 className="eventBudget">
            Budget: <span>£{catererBudget}</span>
          </h5>
          <br />
          {/* <h4 className="eventGategory">Gategory 3</h4> */}
          <h5>
            Entertainment: <span>{entertainmentType} </span>
          </h5>
          <h5>
            Description: <span>{entertainmentDescription}</span>
          </h5>
          <h5 className="eventBudget">
            Budget: <span>£{entertainmentBudget}</span>
          </h5>
          <br />
        </div>
        <input
          type="button"
          className="loginButton"
          value="Submit"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default EventFormOverview;
