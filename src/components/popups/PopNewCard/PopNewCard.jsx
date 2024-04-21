import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as S from "../PopNewCard/PopNewCard.styled";
import { routesObject } from "../../../lib/const";
import { topicStyles, topicHeader } from "../../../lib/topic";
import { useState } from "react";
import { useUserContext } from "../../../contexts/hooks/useUser";

function PopNewCard() {
  const {setCards} = useTaskContext();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = { ...newTask, date: selected };
    postToDo({ ...taskData, token: user.token })

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
                    type="text"
                    name="name"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </S.PopNewCardFormNewBlock>
                <S.PopNewCardFormNewBlock>
                  <label>Описание задачи</label>
                  <textarea
                    name="text"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.PopNewCardFormNewBlock>
              </S.PopNewCardForm>
              <Calendar />
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <p>Категория</p>
              <S.CategoriesThemes>
              <S.CategoriesTheme htmlFor="radio1"
                 $topicColor={topicHeader["Web Design"]}
                >
                  Web Design
                  <input
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                    type="radio"
                    id="radio1"
                    value="Web Design"
                  />
                </S.CategoriesTheme>

                <S.CategoriesTheme
                  htmlFor="radio2"
                  $topicColor={topicHeader["Research"]}
                >
                  Research
                  <input
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                    type="radio"
                    id="radio2"
                    value="Research"
                  />
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  htmlFor="radio3"
                  $topicColor={topicHeader["Copywriting"]}
                >
                  Copywriting
                  <input
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                    type="radio"
                    id="radio3"
                    value="Copywriting"
                  />
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            <S.FormNewCreate onClick={handleSubmit} >Создать задачу</S.FormNewCreate>
            {error && (<p style={{color: "red"}}>{error}</p> ) }
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
