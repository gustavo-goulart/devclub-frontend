import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b4b47515d860e08b6795bcbfe47c4b33",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
