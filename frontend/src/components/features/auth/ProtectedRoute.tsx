import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/user/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
