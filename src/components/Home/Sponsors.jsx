import React from 'react'
import {sponsors} from "../../assets"
const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-white font-poppins font-bold text-[72px] mt-10">THANKS TO OUR EVENT SPONSORS!</span>
      <img src={sponsors} className="w-1/2"/>
    </div>
  )
}

export default Sponsors