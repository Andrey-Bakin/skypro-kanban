import PopUser from "../popups/PopUser/PopUser"
import { useState } from "react"
import * as S from "./Header.styled";
import { Container } from "../styles/shared";


function Header ({addCard}) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened);
  }
    return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderLogoDark>
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderButton onClick={addCard}>
              <a href="#">Создать новую задачу</a>
            </S.HeaderButton>
            <S.HeaderUser onClick={togglePopUp}>
              Ivan Ivanov
            </S.HeaderUser>
            {isOpened && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
  </S.Header>)
}

export default Header