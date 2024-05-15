import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Movies />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  );
}

export default Router;
