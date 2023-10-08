import { Navigate, useLocation, Outlet } from "react-router-dom";

const RouteProtector = ({ user }) => {
  let location = useLocation();

  return !user ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : user?.email !== "utilisation13@gmail.com" ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default RouteProtector;
