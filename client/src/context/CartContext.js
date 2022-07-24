import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [itemsCartQty, setItemsCartQty] = useState(cart.length || 0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setItemsCartQty(cart.length);
  }, [cart, itemsCartQty]);

  // Ajouter un produit dans le cart
  const addToCart = (produit, quantity) => {
    // Si est déja existant
    const existItems = cart.findIndex((obj) => obj.id === produit.id);
    if (existItems !== -1) {
      setCart((prevCart) =>
        // Parcours tous les élements de notre cart
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

  // Supprime un item du cart
  const removeItem = (id) => {
    const newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  };

  // Clear le cart complet
  const clearCart = () => {
    setCart([]);
  };

  // Change Qty
  const changeQty = (id, action) => {
    setCart((prevCart) =>
      // Parcours tous les élements du cart et si item id = id alors on return le nouveau objet dans notre cart
      prevCart.map((item) => {
        if (item.id === id && action === "INCREMENT") {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else if (item.id === id && action === "DECREMENT") {
          return {
            ...item,
            quantity:
              item.quantity < 2 ? (item.quantity = 1) : (item.quantity -= 1),
          };
        }
        return item;
      })
    );
  };

  const value = {
    cart,
    setCart,
    addToCart,
    itemsCartQty,
    setItemsCartQty,
    removeItem,
    changeQty,
    clearCart,
    totalPrice,
    setTotalPrice,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
