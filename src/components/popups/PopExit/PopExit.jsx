import *as S from "./PopExit.styled"

function PopExit () {
    return ( 
    <S.PopExit id="popExit">
    <S.PopExitContainer>
      <S.PopExitBlock>
        <S.PopExitTitle>
          <h2>Выйти из аккаунта?</h2>
        </S.PopExitTitle>
        <S.PopExitTForm>
          <S.PopExitGroup>
            <S.PopExitButtonYes id="exitYes">
              <a href="modal/signin.html">Да, выйти</a>{" "}
            </S.PopExitButtonYes>
            <S.PopExitButtonNo id="exitNo">
              <a href="main.html">Нет, остаться</a>{" "}
            </S.PopExitButtonNo>
          </S.PopExitGroup>
        </S.PopExitTForm>
      </S.PopExitBlock>
    </S.PopExitContainer>
  </S.PopExit>)
}

export default PopExit