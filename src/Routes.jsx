import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routesObject } from "./lib/const";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./components/Private-routes/PrivateRoutes";

const AppRoutes = () => {
  // const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function userLogin(newUser) {
    localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser)
    navigate(routesObject.MAIN);
  }
  function logout() {
    setUser(null);
    navigate(routesObject.LOGIN);
  }

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes user={user}/>}>
          <Route path={routesObject.MAIN} element={<MainPage user={user}/>}>
            <Route path={routesObject.EXIT} element={<ExitPage logout={logout}/>} />
            <Route path={routesObject.CARD} element={<CardPage />} />
          </Route>
        </Route>

        <Route path={routesObject.LOGIN} element={<LoginPage userLogin={userLogin}/>} />
        <Route path={routesObject.REGISTER} element={<RegisterPage userLogin={userLogin}/>} />
        <Route path={routesObject.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
