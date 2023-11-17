import React, { createContext, useContext, useState } from 'react';

const FavoriteProductsContext = createContext();

export const useFavoriteProducts = () => {
  return useContext(FavoriteProductsContext);
};

const {favoriteProducts, setFavoriteProducts} = []

export const FavoriteProductsProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  return (
    <FavoriteProductsContext.Provider value={{ favoriteProducts, setFavoriteProducts }}>
      {children}
    </FavoriteProductsContext.Provider>
  );
};
