import { getLocalStorageItem } from "@/utils/localStorage";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const RouteProtector = () => {
  let location = useLocation();
  let user = getLocalStorageItem("user");
  return !user?.id ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : user?.email !== "utilisation13@gmail.com" ||
    user?.email !== "youssefkhlifi18@gmail.com" ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default RouteProtector;
