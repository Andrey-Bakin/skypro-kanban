import { Navigate, Outlet } from "react-router-dom";
import { routesObject } from "../../lib/const";

function PrivateRoutes({isAuth}) {
   
    return (
        isAuth ? <Outlet/> : <Navigate to={routesObject.LOGIN}/>
    )
}
export default PrivateRoutes