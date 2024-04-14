import { Link, useNavigate } from "react-router-dom";
import { routesObject } from "../../lib/const";
import { Wrapper } from "../styles/shared";
import * as S from "../Login/Login.styled";
import * as R from "../Register/Register.styled";
import { useState } from "react";
import { regTasks } from "../../api";

function Register({userLogin}) {
  cont [name, setName] = useState("");
  cont [login, setLogin] = useState("");
  cont [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleRegTasksClick = async () => {
    await regTasks(name, login, password).then((responseData) => {
      userLogin(responseData.user);
    });
  };

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
                  onSubmit={handleSubmit}
                  type="text"
                  // name="first-name"
                  // id="first-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Имя"
                />
                <S.LoginModalInput
                  type="text"
                  // name="login"
                  // id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.LoginModalInput
                  type="password"
                  // name="password"
                  // id="passwordFirst"
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