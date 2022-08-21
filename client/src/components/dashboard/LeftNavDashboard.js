import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
export default function LeftNavDashboard({ moveIndex }) {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    setUser([]);
    navigate("/");
  };

  return (
    <nav className="">
      <ul className="flex flex-col h-fit">
        <li
          className="px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-300 hover:text-amber-500 cursor-pointer w-[150px]"
          onClick={() => moveIndex(1)}
        >
          Commandes
        </li>
        <li
          className="px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-300 hover:text-amber-500 cursor-pointer w-[150px]"
          onClick={() => moveIndex(2)}
        >
          Préférences
        </li>
        <li
          className="px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-300 hover:text-amber-500 cursor-pointer w-[150px]"
          onClick={logout}
        >
          Se déconnecter
        </li>
      </ul>
    </nav>
  );
}
