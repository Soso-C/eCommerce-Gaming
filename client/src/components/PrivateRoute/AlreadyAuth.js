import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AlreadyAuthRoute = () => {
  const { user } = useAuth();

  return !user?.data ? <Outlet /> : <Navigate to="/" />;
};

export default AlreadyAuthRoute;
