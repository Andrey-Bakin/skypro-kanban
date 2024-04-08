import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
    const token = true
    return (
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}
export default PrivateRoutes