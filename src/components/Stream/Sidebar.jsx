import { React, useEffect, useState } from 'react'
import { circle_arrow, circle_arrow_back } from '../../assets'

const Sidebar = () => {
  const [ArrowOut, setArrowOut] = useState(false);
  const [SideSize, setSideSize] = useState("192px");

  useEffect(() => {
    if (ArrowOut) {
      setSideSize("40px");
    } else {
      setSideSize("192px");
    }
  }, [ArrowOut]);
  
  return (
    <div className={`w-[${SideSize}] sticky top-0 left-0 h-screen
          flex flex-col items-center justify-center border-r-4 border-gray-500 bg-[#080d17] transition-all ease-in-out duration-200`}>
        <div className={`w-9 hover:cursor-pointer mb-10 absolute -right-5 top-36 z-10 transition-all ease-linear duration-200`}>
            
          <img src={circle_arrow} className={`${ArrowOut?"hidden":"visible"}`} 
            onClick={() => {setArrowOut(true)}}/>

          <img src={circle_arrow_back} className={`${ArrowOut?"visible":"hidden"}`} 
            onClick={() => {setArrowOut(false)}}/>
        </div>

          


      <div className={`flex flex-col justify-center items-center duration-100 transition-opacity ease-in-out ${ArrowOut ? "opacity-0":"visible opacity-100"}`}>
        <span>Mecha 2024</span>

        <span>Filters</span>
        <span>Division</span>
        <span>Upcoming</span>
        <span>Live</span>
        <span>Ended</span>
        <span>Year</span>

        <span>Promotional</span>
      </div>
    </div>
  )
}

export default Sidebar