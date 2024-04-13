import React from "react";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import { useState } from "react";
import { cardList } from "../data";
import { useEffect } from "react";
import { Wrapper } from "../components/styles/shared";
import "../App.css";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";

const MainPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks()
    .then((data) => {
      setCards(data.tasks);
    })
    .catch((err) => {
      setError(err.message)
    })
    .finally(() => {
      setIsLoaded(false);
    })
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
        <Main cardList={cards} isLoaded={isLoaded} error={error} />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
