import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? "#282828" : "#ffffff",
      surface: isDarkMode ? "#1e1e1e" : "#e8e8e8",
      border: isDarkMode ? "#242424" : "#f2f2f2",
      primary: isDarkMode ? "violet" : "blue",
      secondary: isDarkMode ? "#ffffff" : "#000000",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};