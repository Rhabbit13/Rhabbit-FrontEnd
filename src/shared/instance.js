import axios from "axios";
import { getCookie } from "./Cookie";
const USER_TOKEN = getCookie();

const instance = axios.create({
  baseURL: "http:/18.224.37.224/",
});
instance.defaults.timeout = 1000;
instance.defaults.headers.common["Authorization"] = USER_TOKEN;

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
