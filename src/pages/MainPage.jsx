import React from "react";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import { useState } from "react";
import { cardList } from "../data";
import { useEffect } from "react";
import { Wrapper } from "../components/styles/shared";
import "../App.css";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded((isLoaded) => {
        !isLoaded;
      });
    }, 2000);
  }, []);

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        topic: "Тема",
        title: "Название задачи",
        date: "30.10.23",
        status: "Без статуса",
      },
    ]);
  }
  return (
    <>
      <Wrapper>
        <Header addCard={addCard} />
        <Main cardList={cards} isLoaded={isLoaded} />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
