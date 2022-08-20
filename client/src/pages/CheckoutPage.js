import React from "react";
import { Navigate } from "react-router-dom";
import Checkout from "../components/checkout/Checkout";
import useCart from "../hooks/useCart";

export default function CheckoutPage() {
  const { totalPrice, cart, fullItemsQty } = useCart();

  return (
    <>
      {cart.length > 0 ? (
        <Checkout
          totalPrice={totalPrice}
          cart={cart}
          fullItemsQty={fullItemsQty}
        />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
