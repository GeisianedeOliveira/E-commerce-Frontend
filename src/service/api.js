import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-user-e-commerce.herokuapp.com/",
});

export const createSession = async (email, password) => {
  return api.post("/users/login", {email, password})
};
