import React, { useState, createContext } from "react";

export const IdGetterContext = createContext();

export const IdProvider = (props) => {
  const [pokemonId, setPokemonId] = useState();
  return (
    <IdGetterContext.Provider value={[pokemonId, setPokemonId]}>
      {props.children}
    </IdGetterContext.Provider>
  );
};
