import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const Button = ({ ri, type = 'fill', children, classname, onSubmit = 'false' }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <button type={`${onSubmit ? 'submit' : ''}`}
    className={`${classname} flex items-center justify-center border rounded-full px-8 py-4 lg:px-12 border-1 duration-300 cursor-pointer  ${
      theme === 'dark' ? 'hover:bg-1 hover:text-3' : 'hover:bg-3 hover:text-1'
    }`}
  >
    <h1 className='lg:text-xl'>
      {children} <i className={`ri-${ri}-${type}`}></i>
    </h1>
  </button>
  )
}

export default Button
