import PopUser from "../popups/PopUser/PopUser"
import { useState } from "react"

function Header ({addCard}) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened);
  }
    return (<header className="header">
    <div className="container">
      <div className="header__block">
        <div className="header__logo _show _light">
          <a href="" target="_self">
            <img src="public/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header__logo _dark">
          <a href="" target="_self">
            <img src="public/logo_dark.png" alt="logo" />
          </a>
        </div>
        <nav className="header__nav">
          <button onClick={addCard} className="header__btn-main-new _hover01" id="btnMainNew">
            Создать новую задачу
          </button>
          <a href="#user-set-target" className="header__user _hover02" onClick={togglePopUp}>
            Ivan Ivanov
          </a>
          {isOpened && <PopUser />}
        </nav>
      </div>
    </div>
  </header>)
}

export default Header