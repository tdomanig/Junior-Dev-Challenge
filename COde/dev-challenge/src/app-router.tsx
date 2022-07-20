import { Layout } from "./components/layout";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { GiphyResult } from "./features/giphyresult/giphyResult";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet></Outlet>
            </Layout>
          }
        ></Route>
        <Route path="/results" element={<GiphyResult />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
