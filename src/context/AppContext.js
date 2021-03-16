import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // state context
  // screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 540);
  const [isMediumSize, setIsMediumSize] = useState(window.innerWidth < 992);
  // status state
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // get data state
  const [listItem, setListItem] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [ownedPokemon, setOwnedPokemon] = useState(
    localStorage.getItem("myPokemon")
      ? [...JSON.parse(localStorage.getItem("myPokemon"))]
      : null
  );

  const [graphState, setGraphState] = useState({
    page: 1,
    limit: limit,
    offset: 0,
  });
  // screen width handler
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
        graphState,
        setGraphState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
