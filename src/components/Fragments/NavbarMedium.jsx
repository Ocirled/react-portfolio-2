import { useContext, useState } from 'react'
import NavbarList from '../Elements/NavbarList'
import Button from '../Elements/Button'
import { ThemeContext } from '../../App'

const NavbarMedium = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <div
        className={`hidden md:block px-8 lg:px-12 fixed w-full max-w-[1400px] min-[1400px]:shadow-none  ${
          theme === 'dark' ? 'bg-3/80 text-1' : 'bg-white/80'
        } backdrop-blur-sm shadow-sm z-50`}
      >
        <div className='flex justify-around py-4 items-center gap-5'>
          <div className='min-w-[150px] lg:min-w-[200px]'>
            <h1 className='text-xl lg:text-2xl'>Delrico.</h1>
          </div>
          <div className=''>
            <ul className='lg:text-xl shadow-md px-8 py-4 lg:px-20 rounded-full border border-1  flex gap-10 justify-center w-[400px]'>
              <NavbarList href='home' classname=''>
                Home
              </NavbarList>
              <NavbarList href='about' classname=''>
                About
              </NavbarList>
              <NavbarList href='skill' classname=''>
                Skill
              </NavbarList>
              <NavbarList href='project' classname=''>
                Project
              </NavbarList>
            </ul>
          </div>
          <div className='flex gap-5 items-center'>
            <i
              className={`ri-${theme === 'dark' ? 'moon' : 'sun'}-fill ri-lg`}
              onClick={toggleTheme}
            ></i>
            <a href='#contact'>
              <Button ri='send-plane'>Connect</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarMedium
