import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardBasket from "./CardBasket";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
export default function Basket({ cart }) {
  const navigate = useNavigate();
  const { clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto mt-32">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Votre panier :</h1>
            <h2 className="font-semibold text-2xl">
              {cart.length} {cart.length > 1 ? "articles" : "article"}
            </h2>
          </div>
          <div className="flex mt-10 mb-5 text-gray-600 text-xs uppercase">
            <h3 className="font-semibold w-2/5">Article</h3>
            <h3 className="font-semibold text-center w-1/5">Quantité</h3>
            <h3 className="font-semibold text-center w-1/5">Prix</h3>
            <h3 className="font-semibold text-center w-1/5">Total</h3>
          </div>
          {/* Map tous nos élements de cart */}
          {cart.map((article, index) => {
            return <CardBasket article={article} key={index} />;
          })}
        </div>
      </div>
      {/* Total price etc */}
      <div className="bg-white shadow-md w-3/4 mx-auto p-4 rounded">
        <h3 className="font-semibold text-center pb-2">
          Prix Total : {totalPrice}€
        </h3>
        <div className="flex flex-col items-center justify-center space-y-2">
          <button
            className="py-2 px-4 bg-green-600 w-fit rounded-full text-sm text-white font-medium"
            onClick={() => navigate("/")}
          >
            Passer commande
          </button>
          <button
            className="py-2 px-4 bg-red-500 w-fit rounded-full text-sm text-white font-medium"
            onClick={clearCart}
          >
            Vider mon panier
          </button>
        </div>
        <Link
          to="/"
          className="flex font-semibold text-indigo-600 text-sm mt-5 justify-center items-center hover:opacity-75"
        >
          <AiOutlineArrowLeft className="w-4 h-4 font-bold mr-2" />
          Continuer vos achats
        </Link>
      </div>
    </div>
  );
}
