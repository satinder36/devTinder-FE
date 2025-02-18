import axiosInstance from "axios";
import { BASE_URL } from "../utils/constants";

const axios = axiosInstance.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axios;
