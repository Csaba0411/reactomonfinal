import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("Darkmode");

  return (
    <ThemeContext.Provider
      value={{
        value: [darkMode, setDarkMode],
        value2: [buttonTitle, setButtonTitle],
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
