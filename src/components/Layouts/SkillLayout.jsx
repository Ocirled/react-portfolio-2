import Paragraph from '../Elements/Paragraph'
import dataSkill from '../../../public/data/skillData'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
import Header from '../Elements/Header'

const SkillLayout = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`mt-36 text-left scroll-mt-16 md:scroll-mt-32 ${
        theme === 'dark' ? 'text-1' : ''
      }`}
      id='skill'
    >
      <Header>skills</Header>
      <Paragraph>skills I use to build websites.</Paragraph>
      {/* html, css, boostrap, tailwind, js, github, react js, c++, java */}
      <div className='flex flex-wrap gap-5 mt-12'>
        {dataSkill.map(skill => (
          <div
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay={skill.duration}
            className=' w-full sm:w-[48%]'
            key={skill.id}
          >
            <div
              className='flex items-center gap-3 p-3 border rounded-md hover:scale-105 duration-200'
              key={`${skill.id}`}
            >
              <img src={`tools/${skill.image}`} alt='Skill Image' width='50' />
              <div className='flex flex-col'>
                <h1 className='text-xl font-bold'>{skill.title}</h1>
                <Paragraph classname='lowercase'>{skill.desc}</Paragraph>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillLayout
