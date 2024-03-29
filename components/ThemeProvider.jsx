'use Client'

import React, { useEffect, useState } from 'react'

import ThemeContext from '@/context/themeContext' // Assuming ThemeContext is imported from a separate file

const ThemeProvider = ({ children }) => {
  const themeFromStorage =
    typeof localStorage !== 'undefined' && localStorage.getItem('hostel-theme')
      ? JSON.parse(localStorage.getItem('hostel-theme'))
      : false

  const [darkTheme, setDarkTheme] = useState(themeFromStorage)
  const [renderComponent, setRenderComponent] = useState(false)

  useEffect(() => {
    setRenderComponent(true)
  }, [])

  if (!renderComponent) return <></>

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1e1e1e]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
