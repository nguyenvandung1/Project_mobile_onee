import React, { createContext, useContext, useState } from 'react';

const FavoriteProductsContext = createContext();

export const useFavoriteProducts = () => {
  return useContext(FavoriteProductsContext);
};

const AcountUsersContext = createContext();

export const useUserAccounts = () => {
  return useContext(AcountUsersContext);
}

export const FavoriteProductsProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);
  const addUser = (user) => {
    setUserAccounts(prevUserAccounts => [...prevUserAccounts, user]);
  }

  return (
    <AcountUsersContext.Provider value={{ userAccounts, addUser }}>
      <FavoriteProductsContext.Provider value={{ favoriteProducts, setFavoriteProducts }}>
        {children}
      </FavoriteProductsContext.Provider>
    </AcountUsersContext.Provider>
  );
};
