import React from "react";
import { Link } from "react-router-dom";
import CardBasket from "./CardBasket";
import { AiOutlineArrowLeft } from "react-icons/ai";
export default function Basket({ cart }) {
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
      <Link
        to="/"
        className="flex font-semibold text-indigo-600 text-sm mt-10 items-center w-fit hover:opacity-75"
      >
        <AiOutlineArrowLeft className="w-4 h-4 font-bold mr-2" />
        Continue Shopping
      </Link>
    </div>
  );
}
