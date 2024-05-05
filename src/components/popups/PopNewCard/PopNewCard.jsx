import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as S from "../PopNewCard/PopNewCard.styled";
import { routesObject } from "../../../lib/const";
import { topicHeader } from "../../../lib/topic";
import { useState } from "react";
import { useUserContext } from "../../../contexts/hooks/useUser";
import { useTaskContext } from "../../../contexts/hooks/useTask";
import { postTasks } from "../../../api";

function PopNewCard() {
  const { setCards } = useTaskContext();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState();

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = { ...newTask, date: selected };
    postTasks({ ...taskData, token: user.token })
      .then((responseData) => {
        setCards(responseData.tasks);
        navigate(-1);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose>
              <Link to={routesObject.MAIN}>✖</Link>
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm>
                <S.PopNewCardFormNewBlock>
                  <label>Название задачи</label>
                  <input
                    onChange={(e)=> setNewTask({...newTask, title:e.target.value})}
                    type="text"
                    name="name"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </S.PopNewCardFormNewBlock>
                <S.PopNewCardFormNewBlock>
                  <label>Описание задачи</label>
                  <textarea
                    onChange={(e)=> setNewTask({...newTask, description:e.target.value})}
                    name="text"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.PopNewCardFormNewBlock>
              </S.PopNewCardForm>
              <S.PopNewCardCalendar>
                <p>Даты</p>
                <Calendar selected={selected} setSelected={setSelected}/>
              </S.PopNewCardCalendar>
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <p>Категория</p>
              <S.CategoriesThemes>
              <S.CategoriesTheme
                  $topicColor={topicHeader["Web Design"]}
                  isActive={newTask.topic === "Web Design"}
                  onClick={() =>
                    setNewTask({ ...newTask, topic: "Web Design" })
                  }
                >
                  Web Design
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  isActive={newTask.topic === "Research"}
                  onClick={() => setNewTask({ ...newTask, topic: "Research" })}
                >
                  Research
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  $topicColor={topicHeader["Copywriting"]}
                  isActive={newTask.topic === "Copywriting"}
                  onClick={() =>
                    setNewTask({ ...newTask, topic: "Copywriting" })
                  }
                >
                  Copywriting
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            <S.FormNewCreate onClick={handleSubmit}>
              Создать задачу
            </S.FormNewCreate>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
