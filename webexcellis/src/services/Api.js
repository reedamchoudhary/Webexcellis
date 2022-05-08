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

API.interceptors.response.use(
  async (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log("error=", error);
    if (error?.response) {
      toast.error(error);
      return error;
    }
    return Promise.reject(error);
  }
);
