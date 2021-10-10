// import { backend } from "./BackendConnection";

// export const loginCall = async (clientCredentials, dispatch) => {
//   dispatch({ type: "LOGIN_REQUEST" });
//   try {
//     const response = await backend.post("/clients/login", clientCredentials);
//     localStorage.setItem("token", response.data.accessToken);
//     console.log(response.data.accessToken);
//     dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
//   } catch (error) {
//     dispatch({ type: "LOGIN_FAIL", payload: error });
//   }
// };
