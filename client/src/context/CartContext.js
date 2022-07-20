import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  // si cart déja existant dans localStorage alors cart = localStorage ou si vide alors = []
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [itemsCartQty, setItemsCartQty] = useState(cart.length || 0);

  // permet d'update avec le useEffect notre page
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setItemsCartQty(cart.length);
  }, [cart, itemsCartQty]);

  // ajoute un produit dans le cart
  const addToCart = (produit, quantity) => {
    const objItems = {
      id: produit.id,
      name: produit.name,
      price: produit.price,
      quantity: quantity || 1,
    };

    setCart([...cart, objItems]);
    console.log("produit ajouté avec succès");
  };

  const value = {
    cart,
    setCart,
    addToCart,
    itemsCartQty,
    setItemsCartQty,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
