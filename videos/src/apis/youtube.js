import axios from "axios";

const KEY = "AIzaSyBrWb7V7qujqJL4S1GDuPwjtjHbwxyIaU4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
