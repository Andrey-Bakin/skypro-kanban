import PopUser from "../popups/PopUser/PopUser"
import { useState } from "react"
import * as S from "./Header.styled";
import { Container } from "../styles/shared";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/hooks/useUser";
import { routesObject } from "../../lib/const";

function Header () {
  const { user } = useUserContext();
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened);
  }
    return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to={routesObject.MAIN} target="_self">
              <img src="public/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>
          <S.HeaderLogoDark>
            <a href="#" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderButton >
              <Link to={routesObject.NEWCARD}>Создать новую задачу</Link>
            </S.HeaderButton>
            <S.HeaderUser onClick={togglePopUp}>
              {user.name}
            </S.HeaderUser>
            {isOpened && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
  </S.Header>)
}

export default Header