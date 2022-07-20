import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import { CartContext } from "../../../context/CartContext";

export default function NewBestCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className="bg-white h-[350px] w-full p-4 shadow-sm shadow-gray-300 group relative">
      {product?.countStock === 0 ? (
        <span className="top-2 right-2 text-red-500 text-sm absolute font-medium">
          Hors stock
        </span>
      ) : (
        <span className="top-2 right-2 text-green-500 text-sm absolute font-medium">
          En stock
        </span>
      )}
      <span></span>

      <div
        className="h-3/4 cursor-pointer"
        onClick={() => navigate(`/article/${product.id}`)}
      >
        <img
          src={product.image}
          className="mx-auto w-52 h-52 pt-8 group-hover:scale-110 duration-500"
          alt=""
        />
      </div>
      <div className="h-1/4 flex flex-col justify-end gap-2">
        <Link
          to={`/article/${product.id}`}
          className="text-md font-medium truncate"
        >
          {product.name}
        </Link>
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-600">{product.price}€</span>
          {product.countStock > 0 ? (
            <button
              className="bg-orange-300 rounded-[50%] h-8 w-8 flex items-center justify-center hover:opacity-75"
              onClick={() => addToCart(product)}
            >
              <IoBagAddOutline className="w-6 h-6 text-amber-900" />
            </button>
          ) : (
            <span className="h-8 w-8 block"></span>
          )}
        </div>
      </div>
    </div>
  );
}
