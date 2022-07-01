import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";

export default function NewBestCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-[350px] w-full p-4 shadow-sm shadow-gray-300 group">
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
          <button
            className="bg-orange-300 rounded-[50%] h-8 w-8 flex items-center justify-center hover:opacity-75"
            // onClick={}
          >
            <IoBagAddOutline className="w-6 h-6 text-amber-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
