import axios from "axios";
const API_URL = "http://localhost:3001/api/auth/";

export const loginUser = (email, password) => {
  return axios.post(API_URL + "login", {
    email,
    password,
  });
};

export const registerUser = (email, password, name, lastname) => {
  return axios.post(API_URL + "register", {
    email,
    password,
    name,
    lastname,
  });
};
