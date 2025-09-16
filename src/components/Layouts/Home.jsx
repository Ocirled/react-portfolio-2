import Button from '../Elements/Button'
import BlurText from '../../animations/BlurText'
import SocialMedia from '../Fragments/SocialMedia'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={` scroll-mt-12 md:scroll-mt-32 ${
        theme === 'dark' ? 'text-1' : ''
      }`}
      id='home'
    >
      <img
        src='profile/profile.jpg'
        alt=''
        className='w-40 h-40 rounded-full object-cover object-top mx-auto border border-1'
      />
      {/* <h1 className='text-2xl mt-4'>Hi, I'm Delrico👋</h1> */}
      <BlurText text={`Hi, I'm Delrico 👋`} className='text-2xl mt-4' />
      <SocialMedia />
      <p className='mt-4 text-2xl lg:text-4xl whitespace-pre-line'>
        frontend web developer based in Medan.
      </p>
      <p className={`mt-2 ${theme === 'dark' ? 'text-white' : 'text-2'}`}>
        very passionate and dedicated to my work.
      </p>
      <div className='flex justify-center mt-8 gap-5 flex-wrap w-full'>
        <a href='#contact'>
          <Button ri='arrow-right-down' type='line'>
            connect with me
          </Button>
        </a>
        <a href='./my-cv/CV.pdf' download>
          <Button ri='download' type='line' classname='w-50 md:w-fit'>
            my resume
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Home
