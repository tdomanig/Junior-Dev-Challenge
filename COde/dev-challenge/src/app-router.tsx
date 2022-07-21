import { Layout } from "./components/layout";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { FavouriteList } from "./features/showFavouriteGifs/favouriteList";

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
        <Route path="/favorites" element={<FavouriteList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
