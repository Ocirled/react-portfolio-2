import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const NavbarList = ({
  children,
  href,
  classname = 'flex flex-col items-center justify-center w-25',
  ri
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <li
        className={`${classname} after:content-[''] after:block after:w-[50%] after:h-[1px] ${
          theme === 'dark' ? 'after:bg-1' : 'after:bg-3'
        } after:scale-0 hover:after:scale-100 after:duration-300 after:mx-auto`}
      >
        {ri && <i className={`ri-${ri}-fill`}></i>}
        <a href={`#${href}`}>{children}</a>
      </li>
    </>
  )
}

export default NavbarList
