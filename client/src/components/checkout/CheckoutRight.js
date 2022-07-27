import React from "react";

export default function CheckoutRight({ totalPrice, fullItemsQty }) {
  return (
    <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14 shadow-md">
      <div>
        <h1 className="text-2xl font-semibold leading-6 text-gray-800">
          Récapitulatif de la commande
        </h1>
      </div>
      <div className="flex mt-7 flex-col items-end w-full space-y-6">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 text-gray-600">Nombre d'articles :</p>
          <p className="text-lg font-semibold leading-4 text-gray-600">
            {fullItemsQty}
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 text-gray-600">Prix Hors Taxe :</p>
          <p className="text-lg font-semibold leading-4 text-gray-600">
            {totalPrice - (totalPrice / 100) * 20}€
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg leading-4 text-gray-600">
            Frais de livraison :
          </p>
          <p className="text-lg font-semibold leading-4 text-gray-600">
            {totalPrice >= 200 ? "Gratuit" : 20 + "€"}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full items-center mt-32">
        <p className="text-xl font-semibold leading-4 text-gray-800">
          Prix Total :
        </p>
        <p className="text-lg font-semibold leading-4 text-gray-800">
          {totalPrice >= 200 ? totalPrice : totalPrice + 20}€
        </p>
      </div>
    </div>
  );
}
