import { getLocalStorageItem } from "@/utils/localStorage";
import { Navigate, useLocation, Outlet } from "react-router-dom";
const allowedUsers = ["utilisation13@gmail.com", "youssefkhlifi18@gmail.com"];
const RouteProtector = () => {
  let location = useLocation();
  let user = getLocalStorageItem("user");
  return !user?.id ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : !allowedUsers.includes(user?.email) ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default RouteProtector;
