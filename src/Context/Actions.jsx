export const LOGIN_REQUEST = (clientCredentials) => ({
  type: "LOGIN_REQUEST",
});
export const LOGIN_SUCCESS = (client) => ({
  type: "LOGIN_SUCCESS",
  payload: client,
});
export const LOGIN_FAIL = (error) => ({
  type: "LOGIN_FAIL",
  payload: error,
});

export const INITIAL_EVENT = (event) => ({
  type: "INITIAL_EVENT",
  payload: event,
});
export const EDIT_EVENT = (event) => ({
  type: "EDIT_EVENT",
  payload: event,
});
export const DELETE_EVENT = (event) => ({
  type: "DELETE_EVENT",
  payload: event,
});
