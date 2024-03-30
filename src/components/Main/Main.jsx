import Column from "../Column/Column";
import { cardList } from "../../data";
import { Container } from "../styles/shared";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cardList, isLoaded}) {
  return (
    <main className="main">
      <Container>
        <div className="main__block">
          <div className="main__content">
            {isLoaded? "Данные загружаются" :
            statusList.map((status, index) => (
              <Column
                key={index}
                status={status}
                cardList={cardList.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Main;