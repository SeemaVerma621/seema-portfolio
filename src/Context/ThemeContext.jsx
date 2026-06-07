import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")
    const themeHandler = () => {
        setTheme(theme ==="dark" ? "light" : "dark")
        console.log(theme)
    }

     useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
    return <ThemeContext.Provider value={{theme, setTheme, themeHandler}}>
        {children}
    </ThemeContext.Provider>

}

export const useTheme = () => {
    return useContext(ThemeContext)
}