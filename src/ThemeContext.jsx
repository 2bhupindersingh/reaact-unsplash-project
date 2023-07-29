import React, { createContext, useState } from "react";
import { lightTheme, darkTheme } from "./Theme";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const themeObject = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ toggleTheme, themeObject, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
