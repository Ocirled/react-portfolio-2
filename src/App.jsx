import Navbar from './components/Layouts/Navbar'
import Home from './components/Layouts/Home'
import About from './components/Layouts/About'
import Skill from './components/Layouts/SkillLayout'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { createContext, useEffect, useState } from 'react'
import Project from './components/Layouts/Project'
import Contact from './components/Layouts/Contact'
// ..

export const ThemeContext = createContext(null)

function App () {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    AOS.init({
      once: false, // kalau mau animasi bisa berulang setiap scroll
      duration: 1000 // default duration
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={`mx-auto max-w-[1400px] pb-30 ${
            theme === 'dark' ? 'bg-3' : 'bg-white'
          }`}
        >
          <Navbar />
          <div className='px-5 text-center pt-12 md:pt-28 w-full md:max-w-[70%] mx-auto'>
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
