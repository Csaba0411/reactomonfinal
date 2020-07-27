import React, { useState, createContext } from "react";

export const PaginatorContext = createContext();

export const PageProvider = (props) => {
  const [nextPage, setNextPage] = useState(null);

  return (
    <PaginatorContext.Provider value={[nextPage, setNextPage]}>
      {props.children}
    </PaginatorContext.Provider>
  );
};
