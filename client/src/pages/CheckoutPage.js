import React, { useContext } from "react";
import Checkout from "../components/checkout/Checkout";
import { CartContext } from "../context/CartContext";

export default function CheckoutPage() {
  const { totalPrice, cart } = useContext(CartContext);
  return <Checkout totalPrice={totalPrice} cart={cart} />;
}
