import { Layout } from "./components/layout";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { FavouriteList } from "./features/showFavouriteGifs/favouriteList";
import { FavoriteHeader } from "./components/favoriteHeader";

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
        <Route
          path="/favorites"
          element={
            <>
              <FavoriteHeader />
              <FavouriteList />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
