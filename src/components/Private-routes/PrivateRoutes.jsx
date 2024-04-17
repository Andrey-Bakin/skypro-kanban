import { Navigate, Outlet } from "react-router-dom";
import { routesObject } from "../../lib/const";

function PrivateRoutes({user}) {
    return user ? <Outlet/> : <Navigate to={routesObject.LOGIN}/>;
}

export default PrivateRoutes;