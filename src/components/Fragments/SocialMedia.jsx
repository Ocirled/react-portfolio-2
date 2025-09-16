import IconLink from '../Elements/LinkIcon'

const SocialMedia = () => {
  return (
    <div className='text-2xl mt-2 flex gap-2 justify-center'>
      <IconLink
        link='https://www.instagram.com/delricoo_?igsh=Y2Q1aGhpYWY0OGNl'
        ri='instagram'
      />
      <IconLink link='https://github.com/Ocirled' ri='github' type='line' />
      <IconLink link='https://www.linkedin.com/in/delrico' ri='linkedin' />
    </div>
  )
}

export default SocialMedia
