import React from "react";
import { Route, Routes } from "react-router-dom";
import { cardList } from "./data";
import { routesObject } from "./lib/const";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./components/Private-routes/PrivateRoutes";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={routesObject.MAIN} element={<MainPage />}>
            <Route path={routesObject.EXIT} element={<ExitPage />} />
            <Route path={routesObject.CARD} element={<CardPage />} />
          </Route>
        </Route>

        <Route path={routesObject.LOGIN} element={<LoginPage />} />
        <Route path={routesObject.REGISTER} element={<RegisterPage />} />
        <Route path={routesObject.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
