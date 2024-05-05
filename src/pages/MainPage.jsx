import React from "react";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "../components/styles/shared";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";
import { useUserContext } from "../contexts/hooks/useUser";
import { useTaskContext } from "../contexts/hooks/useTask";

const MainPage = () => {
  const {user} = useUserContext();
  const { setCards } = useTaskContext();
  const { cards } = useTaskContext([]);
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


  return (
    <>
      <Wrapper>
        <Header />
        <Main user={user} cardList={cards} isLoaded={isLoaded} error={error} />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
