import Column from "../Column/Column";
import { Container } from "../styles/shared";
import * as S from "./Main.styled"

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cardList, isLoaded, error}) {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {isLoaded? "Данные загружаются" :
            statusList.map((status, index) => (
              <Column
                key={index}
                status={status}
                cardList={cardList.filter((card) => card.status === status)}
              />
            ))}
            {error && (<p style={{color: "#f50e0e", fontSize: 25}}>Произошла ошибка, попробуйте позже...{" "}</p>)}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

export default Main;