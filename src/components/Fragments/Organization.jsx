import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const Organization = ({ img, title, date, children }) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`flex-col lg:flex-row flex mt-8 gap-4 shadow-lg rounded-md p-4 mx-auto ${theme === 'dark' ? 'bg-2 text-3' : ''}`}>
      <div className='flex-1/3 flex justify-center items-center'>
        <img
          src={`photos/${img}`}
          className='w-30 rounded-full'
          alt='Organizations Logo'
        />
      </div>
      <div className='flex flex-col  flex-2/3'>
        <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : ''}`}>{title}</h1>
        <p className={` ${theme === 'dark' ? 'text-1' : 'text-2'}`}>{date}</p>
        <h1 className='text-lg mt-4'>key contribute:</h1>
        {children}
      </div>
    </div>
  )
}

export default Organization
