import React, { useEffect, useState } from 'react'
// bruh
const HoverIcon = ({ iconDefault, iconHover, scale, visible, alt, persistant }) => {
  const [hover, setHover] = useState(false)

  return (
    <>
      {hover ?
        <div style={{ backgroundImage: `url(${iconHover})` }} 
             onMouseLeave={() => setHover(false)} 
             className={`sm:w-[42.66px] w-[40px] scale-[${scale}] h-6 bg-contain bg-no-repeat hover:cursor-pointer 
             ${visible?"hidden":""} ${persistant?"sm:hidden block":"sm:block hidden"}`} 
             alt={alt}>
        </div>
        :
        <div style={{ backgroundImage: `url(${iconDefault})` }} 
             onMouseEnter={() => setHover(true)} 
             className={`sm:w-[42.66px] w-[40px] scale-[${scale}] h-6 bg-contain bg-no-repeat hover:cursor-pointer 
             ${visible?"hidden":""} ${persistant?"sm:hidden block":"sm:block hidden"}`} 
             alt={alt}>
        </div>
      }
    </>
  )
}

export default HoverIcon