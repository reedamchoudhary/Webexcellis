import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const defaultHeaders = {
  "Content-type": "application/json",
};

export const API = axios.create({
  baseURL: "https://testapi.webexcellis.in",
  header: defaultHeaders,
});

API.interceptors.request.use(
  function (config) {
    document.body.classList.add("loading-indicator");

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function (response) {
    document.body.classList.remove("loading-indicator");

    return response;
  },
  function (error) {
    document.body.classList.remove("loading-indicator");
    return Promise.reject(error);
  }
);
