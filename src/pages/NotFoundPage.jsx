import React from "react";
import { routesObject } from "../lib/const";
import { Wrapper } from "../components/styles/shared";
import { Link } from "react-router-dom";
import * as S from "../components/Login/Login.styled";

function NotFound() {
    return(
        <Wrapper>
            <S.LoginContainer>
                <S.LoginModalBlock>
                    <S.LoginModalTtl>
                        <h2>Страница не найдена</h2>
                        <S.LoginModalBtnEnter>
                        <Link to={routesObject.MAIN}>Вернуться на главную страницу</Link>
                        </S.LoginModalBtnEnter>
                    </S.LoginModalTtl>
                </S.LoginModalBlock>
            </S.LoginContainer>
        </Wrapper>
    )
}

export default NotFound