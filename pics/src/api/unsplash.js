import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tIrzx8ZSV7cmUuEerqkYa1NL4uE6aNMOefHBzYxDV28",
  },
});
