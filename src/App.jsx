import "./App.css";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";
import { cardList } from "./data";
import { useEffect } from "react";
import { Wrapper } from "./components/styles/shared";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded((isLoaded) => {!isLoaded})
    }, 2000);
  }, [])

  function addCard() {
    setCards([...cards,
    {
      id: cards.length + 1,
      topic: "Тема",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    }])
  }

  return (
    <Wrapper>
      {/* pop-up start*/}
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      {/* pop-up end*/}
      <Header addCard = {addCard}/>
      <Main cardList = {cards} isLoaded = {isLoaded}/>
    </Wrapper>
  );
}

export default App;
