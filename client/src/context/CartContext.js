import { createContext } from "react";

const Cart = createContext();

export default function CartContext({ children }) {
  return <Cart.Provider>{children}</Cart.Provider>;
}
