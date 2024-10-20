import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  const [themeApp, setThemeApp] = useState("primary")

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setThemeApp(localStorage.getItem("theme"))
    }
    
  }, []);

  return (
    <ThemeContext.Provider value={{ themeApp, setThemeApp }}>
      {children}
    </ThemeContext.Provider>
  )
}