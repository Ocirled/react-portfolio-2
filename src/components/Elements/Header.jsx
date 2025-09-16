import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const Header = ({ children, classname }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <h1 className={`text-2xl ${classname} ${theme === 'dark' ? 'text-1' : ''}`}>
      {children}
    </h1>
  )
}

export default Header
