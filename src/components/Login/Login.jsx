import { Link, useNavigate } from "react-router-dom";
import { routesObject } from "../../lib/const";
import { Wrapper } from "../styles/shared";
import * as S from "../Login/Login.styled";
import { useState } from "react";
import { loginTasks } from "../../api";


function Login({ userLogin }) {
  // const navigate = useNavigate();

  // function login() {
  //   setIsAuth(true);
  //   navigate(routesObject.MAIN);
  // }
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLoginTasksClick = async () => {
    await loginTasks( login, password ).then((responseData) => {
        userLogin(responseData.user)
    });
  };

  return (
    <Wrapper>
      <S.LoginContainer>
        <S.LoginModal>
          <S.LoginModalBlock>
            <S.LoginModalTtl>
              <h2>Вход</h2>
            </S.LoginModalTtl>
            <S.LoginModalForm id="formLogIn" action="#">
              <S.LoginModalInput
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                // name="login"
                // id="formlogin"
                placeholder="Логин"
              />
              <S.LoginModalInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // name="password"
                // id="formpassword"
                placeholder="Пароль"
              />
              <S.LoginModalBtnEnter
                // id="btnEnter"
                type="button"
                onClick={handleLoginTasksClick}
                // onClick={login}
              >
                <Link to={routesObject.MAIN}>Войти</Link>
              </S.LoginModalBtnEnter>
              <S.LoginModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={routesObject.REGISTER}>Регистрируйтесь здесь</Link>
              </S.LoginModalFormGroup>
            </S.LoginModalForm>
          </S.LoginModalBlock>
        </S.LoginModal>
      </S.LoginContainer>
    </Wrapper>
  );
}

export default Login;
