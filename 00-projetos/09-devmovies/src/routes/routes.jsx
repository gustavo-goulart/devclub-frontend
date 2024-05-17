import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../pages/Detail";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default Router;
