import Card from "../Card/Card";
import * as S from "./Column.styled"

function Column({ status, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{status}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((card) => <Card key={card._id} {...card}/>)}
      </S.Cards>
    </S.MainColumn>
  );
}

export default Column;