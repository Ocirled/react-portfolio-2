import { useContext } from 'react'
import Paragraph from '../Elements/Paragraph'
import OrganizationLayout from './OrganizationLayout'
import { ThemeContext } from '../../App'
import Header from '../Elements/Header'

const About = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`mt-36 text-left scroll-mt-16 md:scroll-mt-32 ${
        theme === 'dark' ? 'text-1' : ''
      }`}
      id='about'
    >
      <Header>what about me?</Header>
      <div className={`text-base mt-4`}>
        <Paragraph>
          hi, just an ordinary kid who love coding and math (kinda), you can
          call me <b>del</b> or <b>rico</b>. unemployed and in third semester of
          Information Technology Universitas Sumatera Utara. loving explore
          something new, loving playing guitar, and also loving solve a problem.
          anyway, that's all about me and thank you.
        </Paragraph>
      </div>
      <OrganizationLayout />
    </div>
  )
}

export default About
