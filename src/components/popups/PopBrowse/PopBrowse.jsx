import { Link, useNavigate, useParams } from "react-router-dom";
import { routesObject } from "../../../lib/const";
import Calendar from "../../Calendar/Calendar";
import * as S from "../PopBrowse/PopBrowse.styled";
import { useState } from "react";
import { useTaskContext } from "../../../contexts/hooks/useTask";
import { topicHeader } from "../../../lib/topic";
import { useUserContext } from "../../../contexts/hooks/useUser";
import { editTask, deleteTask } from "../../../api";

function PopBrowse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { cards, setCards } = useTaskContext();
  const currentCard = cards.find((card) => card._id == `${id}`);
  const [selected, setSelected] = useState();
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState(null);

  const [editCard, setEditCard] = useState({
    title: currentCard.title,
    description: currentCard.description,
    topic: currentCard.topic,
    status: currentCard.status,
    date: currentCard.date,
  });

  const deleteItem = () => {
    deleteTask({ token: user.token, id: id })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(routesObject.MAIN);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...editCard,
      date: selected,
    };
    editTask({ token: user.token, id: id, taskData: taskData })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(routesObject.MAIN);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCard({
      ...editCard,
      [name]: value,
    });
  };

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Задача: {currentCard.title}</S.PopBrowseTtl>
              <S.CategoriesThemeTop
                $topicColor={topicHeader[currentCard.topic]}
              >
                <p $topicColor={topicHeader[currentCard.topic]}>
                  {currentCard.topic}
                </p>
              </S.CategoriesThemeTop>
            </S.PopBrowseTopBlock>
            
            <S.PopBrowseStatus>
              <S.PopBrowseStatusP>Статус</S.PopBrowseStatusP>
              {error && <p style={{ color: "red", marginBottom: 10 }}>{error}</p>}
              {isEdited && (
              <S.PopBrowseStatusThemeBox>
                  <S.PopBrowseStatusTheme 
                  isactived={editCard.status === "Без статуса"}
                  onClick={() =>
                      setEditCard({ ...editCard, status: "Без статуса" })
                    }>
                    <p>Без статуса</p>
                  </S.PopBrowseStatusTheme>
                  <S.PopBrowseStatusTheme 
                  isactived={editCard.status === "Нужно сделать"}
                  onClick={() =>
                      setEditCard({ ...editCard, status: "Нужно сделать" })
                    }>
                    <p>Нужно сделать</p>
                  </S.PopBrowseStatusTheme>
                  <S.PopBrowseStatusTheme 
                  isactived={editCard.status === "В работе"}
                  onClick={() =>
                      setEditCard({ ...editCard, status: "В работе" })
                    }>
                    <p>В работе</p>
                  </S.PopBrowseStatusTheme>
                  <S.PopBrowseStatusTheme 
                  isactived={editCard.status === "Тестирование"}
                  onClick={() =>
                      setEditCard({ ...editCard, status: "Тестирование" })
                    }>
                    <p>Тестирование</p>
                  </S.PopBrowseStatusTheme>
                  <S.PopBrowseStatusTheme 
                  isactived={editCard.status === "Готово"}
                  onClick={() =>
                      setEditCard({ ...editCard, status: "Готово" })
                    }>
                    <p>Готово</p>
                  </S.PopBrowseStatusTheme>
                </S.PopBrowseStatusThemeBox>)}
              {!isEdited && (
              <S.PopBrowseStatusThemeBox>
                <S.PopBrowseStatusActiveTheme>
                  <p>{currentCard.status}</p>
                </S.PopBrowseStatusActiveTheme>
              </S.PopBrowseStatusThemeBox>)}
              
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.FormBrowseLabel htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseLabel>
                  {!isEdited && (
                    <S.FormBrowseArea
                      onChange={handleInputChange}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={currentCard.description}
                      disabled={true}
                    />
                  )}
                  {isEdited && (
                    <S.FormBrowseArea
                      onChange={handleInputChange}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={currentCard.description}
                      disabled={false}
                    />
                  )}
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              {!isEdited ? (
                  <Calendar selected={currentCard.date} />
                ) : (
                  <Calendar selected={selected} setSelected={setSelected} />
                )}
            </S.PopBrowseWrap>
            {!isEdited && (
            <S.PopBrowseBtnBrowse>
              <S.ButtonGroup>
                <S.ButtonEditDelete onClick={() => {
                      {currentCard.description}
                      setIsEdited(!isEdited);
                    }}>
                  Редактировать задачу
                </S.ButtonEditDelete>
                <S.ButtonEditDelete onClick={deleteItem}>
                  Удалить задачу
                </S.ButtonEditDelete>
              </S.ButtonGroup>
              <S.ButtonClose>
                <Link to={routesObject.MAIN}>Закрыть</Link>
              </S.ButtonClose>
            </S.PopBrowseBtnBrowse>)}  
            {isEdited && (
            <S.PopBrowseBtnBrowse>
              <S.ButtonGroup>
                <S.ButtonClose onClick={handleFormSubmit}>
                  Сохранить
                </S.ButtonClose>
                <S.ButtonEditDelete onClick={() => {
                      setIsEdited(!isEdited);
                    }}>
                  Отменить
                </S.ButtonEditDelete>
                <S.ButtonEditDelete id="btnDelete" onClick={deleteItem}>
                  Удалить задачу
                </S.ButtonEditDelete>
              </S.ButtonGroup>
              <S.ButtonClose>
                <Link to={routesObject.MAIN}>Закрыть</Link>
              </S.ButtonClose>
            </S.PopBrowseBtnBrowse>)}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;
