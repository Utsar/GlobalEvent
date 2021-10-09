const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        client: null,
        isFetching: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        client: action.payload,
        isFetching: false,
        error: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        client: null,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default AuthReducer;
