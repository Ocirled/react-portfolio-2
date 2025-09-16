import { useContext } from 'react'
import { ThemeContext } from '../../App'

const Paragraph = ({ children, classname = 'text-base' }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <p
      className={` ${classname} ${theme === 'dark' ? 'text-white' : 'text-2'}`}
    >
      {children}
    </p>
  )
}

export default Paragraph
