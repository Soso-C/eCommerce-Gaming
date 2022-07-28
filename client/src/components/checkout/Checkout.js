import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import CheckoutRight from "./CheckoutRight";

export default function Checkout({ totalPrice, fullItemsQty }) {
  // React Hook form

  return (
    // Partie left de checkout
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
            <CheckoutForm />
            <div className="mt-4 flex justify-start items-center w-full">
              <Link
                to="/cart"
                className="text-base leading-4 underline hover:text-gray-800 text-gray-600 pt-2"
              >
                Retour au panier
              </Link>
            </div>
          </div>
          {/* Partie right du Checkout */}
          <CheckoutRight totalPrice={totalPrice} fullItemsQty={fullItemsQty} />
        </div>
      </div>
    </div>
  );
}
