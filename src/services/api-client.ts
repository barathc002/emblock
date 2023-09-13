import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "74a5c587952543b08e96d83d553f2e55",
  },
});
