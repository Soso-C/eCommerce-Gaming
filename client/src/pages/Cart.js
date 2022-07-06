import React, { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(0);

  return (
    <div className="w-full h-full">
      {cart === 0 ? (
        <h1 className="mt-28 text-center text-3xl text-red-500">
          Votre panier est vide !
        </h1>
      ) : (
        <h1 className="mt-28 text-center text-2xl text-zinc-800 font-medium">
          Votre panier : {cart} {cart > 1 ? "produits" : "produit"}
        </h1>
      )}
    </div>
  );
}
