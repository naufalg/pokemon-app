import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 540);
  const [isMediumSize, setIsMediumSize] = useState(window.innerWidth < 992);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(40);
  const [offset, setOffset] = useState(0);
  const [ownedPokemon, setOwnedPokemon] = useState(localStorage.getItem("myPokemon")?([...JSON.parse(localStorage.getItem("myPokemon"))]):(null))


  return (
    <AppContext.Provider
      value={{
        isMobile, setIsMobile,
        isMediumSize, setIsMediumSize,
        isLoading, setIsLoading,
        isFetching, setIsFetching,
        listItem, setListItem,
        page, setPage,
        limit, setLimit,
        offset, setOffset,
        ownedPokemon, setOwnedPokemon
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
