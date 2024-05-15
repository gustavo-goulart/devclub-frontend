import api from "../../services/api";
import { Background } from "./styles";

function Home() {
  async function getMovies() {
    const data = await api.get("/movie/popular");

    console.log(data);
  }

  getMovies();

  return (
    <Background img="https://image.tmdb.org/t/p/original/kYgQzzjNis5jJalYtIHgrom0gOx.jpg">
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </Background>
  );
}

export default Home;
