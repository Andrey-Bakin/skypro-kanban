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

function Main({ cardList, isLoaded}) {
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
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

export default Main;