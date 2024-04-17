import React from "react";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "../components/styles/shared";
// import "../App.css";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";

const MainPage = ({user}) => {
  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks({token: user.token})
    .then((data) => {
      setCards(data.tasks);
    })
    .catch((err) => {
      setError(err.message)
    })
    .finally(() => {
      setIsLoaded(false);
    })
  }, [user]);

  function addCard() {
    setCards([
      ...cards,
      {
        _id: cards.length + 1,
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
        <Header addCard={addCard} user={user.name}/>
        <Main user={user} cardList={cards} isLoaded={isLoaded} error={error} />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
