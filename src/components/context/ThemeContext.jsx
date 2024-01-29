import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
import "./Theme.css";

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
