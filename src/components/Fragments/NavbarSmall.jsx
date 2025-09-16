import React, { useContext } from 'react'
import { useState, useRef, useEffect } from 'react'
import NavbarToggle from './NavbarToggle'
import { ThemeContext } from '../../App'

const NavbarSmall = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const navbarRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOutside = event => {
    // Check if click is outside the navbar
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false) // Close navbar
    }
  }

  useEffect(() => {
    // Add listener
    document.addEventListener('mousedown', handleClickOutside)

    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={navbarRef} className='md:hidden'>
      <div
        className={`flex justify-between items-center py-4  px-8 fixed bottom-0 w-full z-99 ${
          theme === 'dark' ? 'bg-3 text-1' : 'bg-white'
        }`}
      >
        <h1 className='text-lg'>Delrico.</h1>
        <div className='flex justify-between w-15'>
          <i
            className={`ri-${theme === 'dark' ? 'moon' : 'sun'}-fill ri-lg`}
            onClick={toggleTheme}
          ></i>
          <i
            className={`${isOpen ? 'ri-close-line' : 'ri-menu-line'} ri-lg`}
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
      </div>
      <NavbarToggle isOpen={isOpen} />
    </div>
  )
}

export default NavbarSmall
