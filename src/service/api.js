import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-user-e-commerce.herokuapp.com/users",
});

export const createSession = async (email, password) => {
  return api.post("/filmes/login", {email, password})
};
