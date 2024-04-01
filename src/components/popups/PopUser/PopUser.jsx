import * as S from "./PopUser.styled";


function PopUser () {
    return (
        <S.PopUser
            id="user-set-target"
          >
            {/* <a href="">x</a> */}
            <S.PopUserName>Ivan Ivanov</S.PopUserName>
            <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
            <S.PopUserTheme>
              <p>Темная тема</p>
              <S.PopUserSetThemeInput type="checkbox" />
            </S.PopUserTheme>
            <S.PopUserButtonExit >
              <a href="#popExit">Выйти</a>
            </S.PopUserButtonExit>
          </S.PopUser>
    )
}

export default PopUser;