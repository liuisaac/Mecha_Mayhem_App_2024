import React from 'react'

const Skewlinks = ({ bgimage, name }) => {

  return (
    <div className="group w-full skew-x-12 h-56 overflow-visible mx-2 bg-red-400 rounded-sm bg-cover bg-center 
    clip-left transition-all duration-300 ease-in-out grid place-content-center hover:cursor-pointer 
    border-x-[30px] border-y-2 border-red-500 hover:border-white opacity-80 hover:opacity-90 mt-12 hover:drop-shadow-[0_0px_20px_rgba(220,220,220,0.5)]"
    style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="bg-[#00000099] rounded-lg">
          <h3 className='text-white text-6xl font-light tracking-widest -skew-x-12 px-16 py-2
          group-hover:transition-opacity duration-300 group-hover:opacity-90'>
              { name }
          </h3>
        </div>
    </div>
  )
}

export default Skewlinks