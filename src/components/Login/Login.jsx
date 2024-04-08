import { Link, useNavigate } from "react-router-dom";
import { routesObject } from "../../lib/const";
import { Wrapper } from "../styles/shared";
import * as S from "../Login/Login.styled"

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  function login() {
    setIsAuth(true);
    navigate(routesObject.MAIN);
  }

  return (
    <Wrapper>
      <S.ContainerSignin>
        <S.LoginModal>
          <S.LoginModalBlock>
            <S.LoginModalTtl>
              <h2>Вход</h2>
            </S.LoginModalTtl>
            <S.LoginModalForm id="formLogIn" action="#">
              <S.LoginModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.LoginModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.LoginModalBtnEnter 
              id="btnEnter" 
              type="button" 
              onClick={login}>
                  Войти
              </S.LoginModalBtnEnter>
              <S.LoginModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={routesObject.REGISTER}>Регистрируйтесь здесь</Link>
              </S.LoginModalFormGroup>
            </S.LoginModalForm>
          </S.LoginModalBlock>
        </S.LoginModal>
      </S.ContainerSignin>
    </Wrapper>
  );
}

export default Login;
