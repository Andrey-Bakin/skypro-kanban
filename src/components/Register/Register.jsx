import { Link, useNavigate } from "react-router-dom";
import { routesObject } from "../../lib/const";
import { Wrapper } from "../styles/shared";
import * as S from "../Login/Login.styled";
import * as R from "../Register/Register.styled";

function Register() {
    return (
      <Wrapper>
        <S.LoginContainer>
          <S.LoginModal>
            <S.LoginModalBlock>
              <S.LoginModalTtl>
                <h2>Регистрация</h2>
              </S.LoginModalTtl>
              <R.RegModalForm id="formLogUp" action="#">
                <S.LoginModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.LoginModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.LoginModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.LoginModalBtnEnter id="SignUpEnter">
                  <Link to={routesObject.MAIN}>Зарегистрироваться</Link>
                </S.LoginModalBtnEnter>
                <S.LoginModalFormGroup>
                  <p>
                    Уже есть аккаунт? <Link to={routesObject.LOGIN}>Войдите здесь</Link>
                  </p>
                </S.LoginModalFormGroup>
              </R.RegModalForm>
            </S.LoginModalBlock>
          </S.LoginModal>
        </S.LoginContainer>
</Wrapper>

    );
  }
  
  export default Register;