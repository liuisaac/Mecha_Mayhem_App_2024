import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const Card = ({ bgImage, name, route, delay}) => {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/${route}`; 
    navigate(path);
  }

  
// data-aos="fade-right" data-aos-once="true" data-aos-delay={delay}

//group h-[500px] w-1/5 m-1 bg-red-400 rounded-xl bg-cover bg-center -skew-x-12
// transition-all duration-300 ease-in-out overflow-hidden grid place-content-center
// hover:w-[70%] hover:cursor-pointer hover:border-red-500 hover:border-4 opacity-60 hover:opacity-100

  return (
    <div className='m-1 basis-1/5 hover:basis-[100%] shrink hover:grow min-w-[5%] transition-all duration-300 ease-in-out opacity-60 hover:opacity-100 -skew-x-12'>
      <div 

        className="group h-[500px] w-full
        border-gray-900 border-4 rounded-lg hover:border-red-500 hover:border-4 
        bg-red-400 bg-cover bg-center overflow-hidden 
        hover:cursor-pointe
        flex flex-row justify-center items-center" 
        style={{ backgroundImage: `url(${bgImage})`}} 
        onClick={routeChange}>

          <h3 className='text-white bg-[#00000099] text-3xl font-normal tracking-widest skew-x-12 p-2
            opacity-0 group-hover:transition-opacity duration-300 group-hover:opacity-100'>{ name }</h3>
      </div>
    </div>
  )
}

export default Card