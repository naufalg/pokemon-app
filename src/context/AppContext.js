import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 540);
  const [isMediumSize, setIsMediumSize] = useState(window.innerWidth < 992);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPokeballDrop, setIsPokeballDrop] = useState(false);
  const [showCatchedInput, setShowCatchedInput] = useState(false);
  const [showFailCatch, setShowFailCatch] = useState(false);
  const [ownedPokemon, setOwnedPokemon] = useState(
    localStorage.getItem("myPokemon")
      ? [...JSON.parse(localStorage.getItem("myPokemon"))]
      : null
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
    setIsMediumSize(window.innerWidth < 820);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        setIsMobile,
        isMediumSize,
        setIsMediumSize,
        isLoading,
        setIsLoading,
        isFetching,
        setIsFetching,
        listItem,
        setListItem,
        page,
        setPage,
        limit,
        setLimit,
        offset,
        setOffset,
        ownedPokemon,
        setOwnedPokemon,
        isModalOpen,
        setIsModalOpen,
        isPokeballDrop,
        setIsPokeballDrop,
        showCatchedInput,
        setShowCatchedInput,
        showFailCatch,
        setShowFailCatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
