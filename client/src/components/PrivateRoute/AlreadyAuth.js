import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AlreadyAuthRoute = () => {
  const { user } = useAuth();

  const location = useLocation();

  return !user?.data ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default AlreadyAuthRoute;
