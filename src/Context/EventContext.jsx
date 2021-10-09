import { createContext, useReducer } from "react";
import EventReducer from "./EventReducer";

const INITIAL_STATE = {
  events: [],

  error: null,
};

export const EventContext = createContext(INITIAL_STATE);

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EventReducer, INITIAL_STATE);

  return (
    <EventContext.Provider
      value={{
        event: state.event,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
