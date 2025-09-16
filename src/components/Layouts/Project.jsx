import Paragraph from '../Elements/Paragraph'
import IconLink from '../Elements/LinkIcon'
import projectData from '../../../public/data/projectData'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
import Header from '../Elements/Header'

const Project = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div
        className='mt-36 text-left scroll-mt-16 md:scroll-mt-32'
        id='project'
      >
        <Header>projects</Header>
        <Paragraph>code experiments—some useful, some just curious.</Paragraph>

        <div className='mt-12 lg:flex lg:flex-wrap lg:justify-center gap-5'>
          {projectData.map(data => (
            <div
              className='relative mb-18 lg:max-w-[45%]'
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-delay={data.duration}
              key={`${data.duration}-${data.project_name}`}
            >
              <a
                href={`${data.project_link}`}
                target='_blank'
                className=' overflow-hidden block'
              >
                <img
                  src={data.img_path}
                  alt='Project image'
                  className='border-[2px] rounded-md border-1 hover:scale-105 duration-200'
                />
              </a>
              <div className={`absolute top-[95%] left-[50%] translate-[-50%] px-4 py-4 justify-evenly rounded-md flex items-center gap-5 w-60 z-10 ${theme === 'dark' ? 'bg-1 text-3' : 'bg-3 text-white'}`}>
                <div className='text-base/4'>
                  <h1 className='text-sm md:text-base'>{data.project_name}</h1>
                  <Paragraph classname='text-xs md:text-sm'>
                    {data.category}
                  </Paragraph>
                  <div className='flex gap-2 mt-1'>
                    {data.project_tools.map(e => (
                      <img src={`./tools/${e}`} alt='' className='w-6' />
                    ))}
                  </div>
                </div>
                <IconLink
                  link={`${data.project_link}`}
                  ri='send-plane'
                  classname='border rounded-full p-2 hover:opacity-80'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project
