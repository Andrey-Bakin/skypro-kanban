import Card from "../Card/Card";

function Column({ statusTask }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{statusTask}</p>
      </div>
      <div className="cards">
        <Card categoryOfTask={"Web Design"} nameTask={"Название задачи"} />
        <Card categoryOfTask={"Research"} nameTask={"Название задачи"} />
        <Card categoryOfTask={"Web Design"} nameTask={"Название задачи"} />
        <Card categoryOfTask={"Copywriting"} nameTask={"Название задачи"} />
        <Card categoryOfTask={"Web Design"} nameTask={"Название задачи"} />
      </div>
    </div>
  );
}

export default Column;