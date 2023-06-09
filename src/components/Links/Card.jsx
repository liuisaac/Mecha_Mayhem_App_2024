import React from 'react'
import { useEffect } from 'react';

const Card = ({ bgImage, name }) => {

  return (
    <div className="group h-[500px] w-1/5 m-1 bg-red-400 rounded-xl bg-cover bg-center -skew-x-12 transition-all overflow-hidden grid place-content-center hover:w-[70%] hover:cursor-pointer hover:border-red-500 hover:border-4" style={{ backgroundImage: `url(${bgImage})` }}>
        <h3 className='text-white bg-[#00000099] text-3xl font-bold tracking-wider skew-x-12 p-2 opacity-0 group-hover:opacity-100'>
            { name }
        </h3>
    </div>
  )
}

export default Card