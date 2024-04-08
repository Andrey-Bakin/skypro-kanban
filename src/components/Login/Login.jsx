import { useNavigate } from "react-router-dom";
import { routesObject } from "../../lib/const";

function Login({setIsAuth}) {

  const navigate = useNavigate()
  
  function login() {
    setIsAuth(true)
    navigate(routesObject.MAIN)
  }
  
    return (
      <div>
        Login
        <button type="button" onClick={login}>Войти</button>
      </div>
    );
  }
  
  export default Login;