import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemsQty, setItemsQty] = useState(0);

  const value = {};

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
