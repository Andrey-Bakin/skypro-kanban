import { Navigate, Outlet } from "react-router-dom";
import { routesObject } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";

function PrivateRoutes() {
    const {user} = useUserContext()
    return user ? <Outlet/> : <Navigate to={routesObject.LOGIN}/>;
}

export default PrivateRoutes;