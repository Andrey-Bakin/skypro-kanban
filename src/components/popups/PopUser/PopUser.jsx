import { Link } from "react-router-dom";
import * as S from "./PopUser.styled";
import { routesObject } from "../../../lib/const";
import { useUserContext } from "../../../contexts/hooks/useUser";


function PopUser () {
  const {user} = useUserContext();
    return (
        <S.PopUser>
            {/* <a href="">x</a> */}
            <S.PopUserName>{user}</S.PopUserName>
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