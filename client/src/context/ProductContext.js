import React, { createContext, useState } from "react";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  const value = {
    productsList,
    setProductsList,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
