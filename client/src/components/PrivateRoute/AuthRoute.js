import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthRoute = () => {
  const { user } = useAuth();

  return user?.data ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
