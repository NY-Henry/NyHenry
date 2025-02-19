import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// create the context
export const ThemeContext = createContext(undefined);

// Provider
export const ThemeContextProvider = ({ children }) => {
  // Setting the theme on page load
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch (error) {
      console.warn("localStorage is not available:", error);
      return "dark";
    }
  });

  // saving it to local storage
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Failed to save theme to localStorage:", error);
    }
  }, [theme]);

  // Changing Theme

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    console.log("useContext must be used inside the context provider");
  }
  return context;
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
