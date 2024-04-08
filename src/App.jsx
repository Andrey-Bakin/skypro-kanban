import "./App.css";
// import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
// import PopExit from "./components/popups/PopExit/PopExit";
// import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import { useState } from "react";
// import { cardList } from "./data";
// import { useEffect } from "react";
// import { Wrapper } from "./components/styles/shared";
import { GlobalStyle } from "./components/styles/Global.styled";
import AppRoutes from "./Routes";

function App() {

  return (
    <>
    <GlobalStyle/>
    <AppRoutes/>
    </>
  );
}

export default App;
