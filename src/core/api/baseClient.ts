import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/api/v2",
  headers: {
    "Content-type": "application/json",
  },
});
