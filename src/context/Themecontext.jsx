// Themecontext.jsx
import React, { createContext, useState, useCallback, useEffect } from 'react'

// Create the Theme Context with default values
export const Themecontext = createContext({
  theme: 'dark',
  toggleTheme: () => {}
})

// Provider Component
export const Themecontextprovider = ({ children }) => {
  // Set up the theme state, initializing from localStorage or defaulting to 'dark'
  const [theme, setTheme] = useState(() => {
    // Fetch the theme from local storage, defaulting to 'dark' if not set
    const storedTheme = localStorage.getItem('theme')
    return storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : 'dark'
  })

  // Define the function to toggle between 'dark' and 'light' themes using useCallback
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  // Update the local storage whenever the theme state changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      {children}
    </Themecontext.Provider>
  )
}
