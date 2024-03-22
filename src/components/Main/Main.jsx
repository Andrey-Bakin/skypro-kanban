import Column from "../Column/Column";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column statusTask={"Без статуса"} />
            <Column statusTask={"Нужно сделать"} />
            <Column statusTask={"В работе"} />
            <Column statusTask={"Тестирование"} />
            <Column statusTask={"Готово"} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;