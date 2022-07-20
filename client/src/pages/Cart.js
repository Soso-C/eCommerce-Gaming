import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-full w-full">
          <h1 className="mt-28 text-center text-2xl text-red-500 font-medium">
            Oups on dirait que votre panier est vide !
          </h1>
          <button
            className="hover:opacity-75 bg-amber-500 rounded-full py-2 p-4 mt-4 text-white font-medium"
            onClick={() => navigate("/")}
          >
            Rechercher des articles
          </button>
        </div>
      ) : (
        <h1 className="mt-28 text-center text-2xl text-zinc-800 font-medium">
          Votre panier : {cart.length}{" "}
          {cart.length > 1 ? "produits" : "produit"}
        </h1>
      )}
    </div>
  );
}
