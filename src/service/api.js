import axios from "axios";
axios.defaults.headers["Authorization"] = "sss";
axios.defaults.baseURL = "http://192.168.1.130:8888/";
export default {
  async getUser() {
    return axios.get("/api/user");
  },
  async getRole() {
    return axios.get("/per/role");
  }
};
