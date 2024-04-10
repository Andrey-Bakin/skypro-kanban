import { Link } from "react-router-dom";
import *as S from "./PopExit.styled";
import { routesObject } from "../../../lib/const";

function PopExit () {
    return ( 
    <S.PopExit>
    <S.PopExitContainer>
      <S.PopExitBlock>
        <S.PopExitTitle>
          <h2>Выйти из аккаунта?</h2>
        </S.PopExitTitle>
        <S.PopExitTForm>
          <S.PopExitGroup>
            <S.PopExitButtonYes>
              <Link to={routesObject.LOGIN}>Да, выйти</Link>
            </S.PopExitButtonYes>
            <S.PopExitButtonNo>
              <Link to={routesObject.MAIN}>Нет, остаться</Link>
            </S.PopExitButtonNo>
          </S.PopExitGroup>
        </S.PopExitTForm>
      </S.PopExitBlock>
    </S.PopExitContainer>
  </S.PopExit>)
}

export default PopExit