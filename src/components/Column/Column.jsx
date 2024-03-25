import Card from "../Card/Card";

function Column({ status, cardList }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => <Card key={card.id} {...card}/>)}
      </div>
    </div>
  );
}

export default Column;