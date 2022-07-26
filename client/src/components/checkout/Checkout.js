import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutInput from "./CheckoutInput";

export default function Checkout({ totalPrice, cart }) {
  const [totalQtyCart, setTotalQtyCart] = useState(0);

  return (
    <div className="overflow-y-hidden">
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 pt-16">
                Confirmation de commande
              </h1>
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Adresse de livraison
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <CheckoutInput type="text" placeholder="Nom" />
              <CheckoutInput type="text" placeholder="Prénom" />
              <CheckoutInput type="email" placeholder="Email" />
              <CheckoutInput type="text" placeholder="Adresse" />
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <CheckoutInput type="text" placeholder="Pays" />
                <CheckoutInput type="text" placeholder="Ville" />
              </div>
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <CheckoutInput type="text" placeholder="Code Postal" />
                <CheckoutInput type="phone" placeholder="Télephone" />
              </div>
            </div>
            <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
              Procéder au paiement
            </button>
            <div className="mt-4 flex justify-start items-center w-full">
              <Link
                to="/cart"
                className="text-base leading-4 underline hover:text-gray-800 text-gray-600 pt-2"
              >
                Retour au panier
              </Link>
            </div>
          </div>
          <CheckoutRight totalPrice={totalPrice} totalQtyCart={totalQtyCart} />
        </div>
      </div>
    </div>
  );
}

export const CheckoutRight = ({ totalPrice, totalQtyCart }) => {
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
            {totalQtyCart}
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
};
