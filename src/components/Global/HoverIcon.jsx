import React, { useEffect, useState } from 'react'

const HoverIcon = ({ iconDefault, iconHover }) => {
  const [hover, setHover] = useState(false)


  return (
    <>
      {hover ?
        <div style={{ backgroundImage: `url(${iconHover})` }} onMouseLeave={() => setHover(false)} className={`w-[42.66px] h-6 bg-contain bg-no-repeat hover:cursor-pointer`} alt="Bull logo"></div>
        :
        <div style={{ backgroundImage: `url(${iconDefault})` }} onMouseEnter={() => setHover(true)} className={`w-[42.66px] h-6 bg-contain bg-no-repeat hover:cursor-pointer`} alt="Bull logo"></div>
      }
    </>
  )
}

export default HoverIcon