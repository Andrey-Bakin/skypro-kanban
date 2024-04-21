import { Link } from "react-router-dom";
import { routesObject } from "../../lib/const";
import { Wrapper } from "../styles/shared";
import * as S from "../Login/Login.styled";
import { useState } from "react";
import { loginTasks } from "../../api";
import { useUserContext } from "../../contexts/hooks/useUser";

function Login() {
  const {userLogin} = useUserContext();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // const [loginError, setLoginError] = useState(null);

  const handleLoginTasksClick = async (event) => {
      event.preventDefault();
      await loginTasks(login, password).then((responseData) => {
        userLogin(responseData.user);
      });
  };

  return (
    <Wrapper>
      <S.LoginContainer>
        <S.LoginModal>
          <S.LoginModalBlock>
            {/* {loginError && (
              <p style={{ color: "#f50e0e", fontSize: 15 }}>
                Неправильный логин или пароль{" "}
              </p>
            )} */}
            <S.LoginModalTtl>
              <h2>Вход</h2>
            </S.LoginModalTtl>
            <S.LoginModalForm>
              <S.LoginModalInput
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логин"
              />
              <S.LoginModalInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
              <S.LoginModalBtnEnter
                type="button"
                onClick={handleLoginTasksClick}
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
