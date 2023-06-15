import React from 'react'
import { useNavigate } from "react-router-dom";

//Doing random generation
function getPage(number) {
  switch(number) {
    case 0:
      return '../src/assets/Raster/Lost/bull.png';
    case 1:
      return '../src/assets/Raster/Lost/moanky.png';

    case 2:
      return '../src/assets/Raster/Lost/boat.png';

    case 3:
      return '../src/assets/Raster/Lost/streak.png';

    default:
      return '../src/assets/Raster/Lost/main.png';
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



const PageNotFound = () => { 
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  return (
    <div className="bg-black">
      <div className={`flex flex-row justify-center bg-[url('${getPage(getRandomInt(100))}')] bg-contain bg-no-repeat h-screen mb-20`}>
        <div className="grid grid-cols-3 grid-rows-6 content-evenly items-center w-full h-full">
          <button type="submit" className=" row-start-5 col-start-2 col-span-1 
          text-white bg-gray-800 hover:bg-gray-700 focus:ring-2
          focus:outline-none focus:ring-gray-500 rounded-full h-12 border-gray-500 border-2
            xs:text-[20px] text-[8px] w-full sm:w-auto font-light text-center z-10" 
            onClick={routeChange}>
            Return to Home Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound