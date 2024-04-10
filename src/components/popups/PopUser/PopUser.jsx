import { Link } from "react-router-dom";
import * as S from "./PopUser.styled";
import { routesObject } from "../../../lib/const";


function PopUser () {
    return (
        <S.PopUser>
            {/* <a href="">x</a> */}
            <S.PopUserName>Ivan Ivanov</S.PopUserName>
            <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
            <S.PopUserTheme>
              <p>Темная тема</p>
              <S.PopUserSetThemeInput type="checkbox" />
            </S.PopUserTheme>
            <S.PopUserButtonExit >
              <Link to={routesObject.EXIT}>Выйти</Link>
            </S.PopUserButtonExit>
          </S.PopUser>
    )
}

export default PopUser;