import React, { useContext } from 'react'
import NavbarList from '../Elements/NavbarList'
import { ThemeContext } from '../../App'

const NavbarToggle = ({ isOpen }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`navigation fixed ${
        isOpen ? 'bottom-10' : '-bottom-100'
      } w-full duration-300  rounded-t-3xl ${
        theme === 'dark' ? 'bg-3 text-1' : 'bg-white'
      } xs:h-60 sm:h-40 h-90 z-50 shadow-custom`}
    >
      <ul className='flex xs:flex-wrap xs:flex-row flex-col justify-center items-center gap-5 xs:h-60 sm:h-40 h-90 p-7'>
        <NavbarList ri='home-2' href='home'>
          Home
        </NavbarList>
        <NavbarList ri='user-3' href='about'>
          About
        </NavbarList>
        <NavbarList ri='palette' href='skill'>
          Skill
        </NavbarList>
        <NavbarList ri='window' href='project'>
          Project
        </NavbarList>
        <NavbarList ri='contacts' href='contact'>
          Contact
        </NavbarList>
      </ul>
    </div>
  )
}

export default NavbarToggle
