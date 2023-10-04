import { useAuthContext } from "@/hooks/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const RouteProtector = ({ children }) => {
  const { user } = useAuthContext();

  let location = useLocation();

  return !user ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : user?.email !== "utilisation13@gmail.com" ? (
    <Navigate to="home" state={{ from: location }} replace />
  ) : (
    children
  );
};

export default RouteProtector;
