import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

export const RequiredAuth = ({ children }) => {
  const { sesion } = useAuthContext();
  const location = useLocation();

  if (!sesion) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
