import { Link, useParams } from "react-router-dom";
import { routesObject } from "../../../lib/const";
import Calendar from "../../Calendar/Calendar";
import * as S from "../PopBrowse/PopBrowse.styled"
import { useState } from "react";
import { useTaskContext } from "../../../contexts/hooks/useTask";
import { topicHeader } from "../../../lib/topic";
import { useUserContext } from "../../../contexts/hooks/useUser";
import { CardTitle, CardTopic } from "../../Card/Card.styled";
import { putTodo, deleteTodo } from "../../../api";




function PopBrowse() {
  let {id} = useParams()
  const { user } = useUserContext();
  const { cards, setCards } = useTaskContext();
  
  const [isEdited, setIsEdited] = useState(false);
  // const currentCard = cards.find((card) => card._id == `${id}`);
  const [selectedDate, setSelectedDate] = useState();
  
  const currentCard = cards.find((element) => id === element._id);
  const [editTask, setEditTask] = useState({
    // title: currentCard.title,
    // description: currentCard.description,
    // topic: currentCard.topic,
    // status: currentCard.status,
    // date: currentCard.date,
  });

  const deleteTask = () => {
    deleteTodo({ token: user.token, id: id })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(routesObject.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...editTask,
      date: selectedDate,
    };
    putTodo({ token: user.token, id: id, taskData: taskData })
      .then((newCard) => {
        console.log(newCard);
        setCards(newCard.tasks);
        navigate(routesObject.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask({
      ...editTask,
      [name]: value,
    });
  };
  

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Задача: {}</S.PopBrowseTtl>
              <S.CategoriesThemeTop $topicColor={topicHeader["Web Design"]}>
                <p>{"Web Design"}</p>
              </S.CategoriesThemeTop>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusP>Статус</S.PopBrowseStatusP>
              
              <S.PopBrowseStatusThemeBox>
                <S.PopBrowseStatusTheme>
                  <p>Без статуса</p>
                </S.PopBrowseStatusTheme>
                <S.PopBrowseStatusTheme>
                  <p>Нужно сделать</p>
                </S.PopBrowseStatusTheme>
                <S.PopBrowseStatusTheme>
                  <p>В работе</p>
                </S.PopBrowseStatusTheme>
                <S.PopBrowseStatusTheme>
                  <p>Тестирование</p>
                </S.PopBrowseStatusTheme>
                <S.PopBrowseStatusTheme>
                  <p>Готово</p>
                </S.PopBrowseStatusTheme>
              </S.PopBrowseStatusThemeBox>
 
              <S.PopBrowseStatusThemeBox>
                <S.PopBrowseStatusActiveTheme>
                  <p>Нужно сделать</p>
                </S.PopBrowseStatusActiveTheme>
              </S.PopBrowseStatusThemeBox>
 
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm
                id="formBrowseCard"
                action="#"
              >
                <S.FormBrowseBlock>
                  <S.FormBrowseLabel htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseLabel>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
              <S.ButtonGroup>
                <S.ButtonEditDelete>
                  <a href="#">Редактировать задачу</a>
                </S.ButtonEditDelete>
                <S.ButtonEditDelete>
                  <a href="#">Удалить задачу</a>
                </S.ButtonEditDelete>
              </S.ButtonGroup>
              <S.ButtonClose>
                <Link to={routesObject.MAIN}>Закрыть</Link>
              </S.ButtonClose>
            </S.PopBrowseBtnBrowse>
            <S.PopBrowseBtnBrowse>
              <S.ButtonGroup>
                <S.ButtonClose>
                  <a href="#">Сохранить</a>
                </S.ButtonClose>
                <S.ButtonEditDelete>
                  <a href="#">Отменить</a>
                </S.ButtonEditDelete>
                <S.ButtonEditDelete
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </S.ButtonEditDelete>
              </S.ButtonGroup>
              <S.ButtonClose>
                <Link to={routesObject.MAIN}>Закрыть</Link>
              </S.ButtonClose>
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;
