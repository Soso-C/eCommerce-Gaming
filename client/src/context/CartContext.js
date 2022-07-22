import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  // si cart déja existant dans localStorage alors cart = localStorage ou si vide alors = []
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Nombre d'article dans le panier
  const [itemsCartQty, setItemsCartQty] = useState(cart.length || 0);

  // update le cart et la quantity lorsque trigger
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setItemsCartQty(cart.length);
  }, [cart, itemsCartQty]);

  // ajouter un produit dans le cart
  const addToCart = (produit, quantity) => {
    // Si est déja existant
    const existItems = cart.findIndex((obj) => obj.id === produit.id);
    if (existItems !== -1) {
      setCart((prevCart) =>
        // Parcours tous les elements de notre cart
        prevCart.map((item) => {
          // Si j'ai un element qui a le meme id que le produit alors je copie cet element et j'update la quantity
          if (item.id === produit.id) {
            return {
              ...item,
              quantity: item.quantity + parseInt(quantity, 10),
            };
          }
          return item;
        })
      );
      console.log("produit déja existant update avec succes");
    } else {
      const newItem = {
        ...produit,
        quantity: parseInt(quantity, 10),
      };
      setCart((prevCart) => [...prevCart, newItem]);
      console.log("produit ajouté avec succès");
    }
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
