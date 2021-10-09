const EventReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        [action.payload.id]: action.payload,
        error: null,
      };
    case "EDIT_EVENT":
      return {
        ...state,
        [action.payload.id]: action.payload,
        error: null,
      };
    case "DELETE_EVENT":
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default EventReducer;
