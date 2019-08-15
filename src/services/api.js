import axios from "axios";

const api = axios.create({
  baseURL: "http://35.194.44.84:3333"
});

export default api;
