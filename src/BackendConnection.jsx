import axios from "axios";

let backend;
const resetBackend = () => {
  backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

resetBackend();

export { backend, resetBackend };
