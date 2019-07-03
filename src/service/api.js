import axios from "axios";
axios.defaults.headers["Authorization"] = "sss";
export default {
  async getUser() {
    return axios.get("http://192.168.1.130:8888/api/user");
  },
  async getRole() {
    return axios.get("http://192.168.1.130:8888/per/role");
  }
};
