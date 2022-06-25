import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

export default function NewOrBestProducts({ newOrBest }) {
  return (
    <div className="max-w-7xl mx-auto pb-10 px-4">
      <span className="text-2xl text-zinc-800 font-medium text-center block pt-8">
        {newOrBest === "new" ? "Nouveautés" : "Meilleures ventes"}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 lg:pt-16">
        <div className="bg-white h-[350px] w-full p-4 shadow-sm shadow-gray-300">
          <div className="h-3/4">
            <img
              src={
                "https://media.ldlc.com/r150/ld/products/00/05/96/16/LD0005961662.jpg"
              }
              className="mx-auto w-52 h-52 pt-8"
              alt=""
            />
          </div>
          <div className="h-1/4 flex flex-col justify-end gap-2">
            <Link to="/" className="text-md font-medium">
              Home cinema 5.0 son surround
            </Link>
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-600">1234€</span>
              <MdAddShoppingCart className="w-7 h-7 text-orange-400" />
            </div>
          </div>
        </div>
        <div className="bg-white h-[350px] w-full p-4 shadow-sm shadow-gray-300">
          <div className="h-3/4">
            <img
              src={
                "https://media.ldlc.com/r150/ld/products/00/05/96/16/LD0005961662.jpg"
              }
              className="mx-auto w-52 h-52 pt-8"
              alt=""
            />
          </div>
          <div className="h-1/4 flex flex-col justify-end gap-2">
            <Link to="/" className="text-md font-medium">
              Home cinema 5.0 son surround
            </Link>
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-600">1234€</span>
              <MdAddShoppingCart className="w-7 h-7 text-orange-400" />
            </div>
          </div>
        </div>
        <div className="bg-white h-[350px] w-full p-4 shadow-sm shadow-gray-300">
          <div className="h-3/4">
            <img
              src={
                "https://media.ldlc.com/r150/ld/products/00/05/96/16/LD0005961662.jpg"
              }
              className="mx-auto w-52 h-52 pt-8"
              alt=""
            />
          </div>
          <div className="h-1/4 flex flex-col justify-end gap-2">
            <Link to="/" className="text-md font-medium">
              Home cinema 5.0 son surround
            </Link>
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-600">1234€</span>
              <MdAddShoppingCart className="w-7 h-7 text-orange-400" />
            </div>
          </div>
        </div>
        <div className="bg-white h-[350px] w-full p-4 shadow-sm shadow-gray-300">
          <div className="h-3/4">
            <img
              src={
                "https://media.ldlc.com/r150/ld/products/00/05/96/16/LD0005961662.jpg"
              }
              className="mx-auto w-52 h-52 pt-8"
              alt=""
            />
          </div>
          <div className="h-1/4 flex flex-col justify-end gap-2">
            <Link to="/" className="text-md font-medium">
              Home cinema 5.0 son surround
            </Link>
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-600">1234€</span>
              <MdAddShoppingCart className="w-7 h-7 text-orange-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
