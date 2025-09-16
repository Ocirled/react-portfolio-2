const IconLink = ({ link, ri, type = 'fill', classname }) => {
  return (
    <a href={`${link}`} target='__blank'>
      <i className={`ri-${ri}-fill ${classname}`}></i>
    </a>
  )
}

export default IconLink
