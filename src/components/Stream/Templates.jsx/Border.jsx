import React from 'react'

const Border = ({ text }) => {
  return (
    <div className="w-full h-full py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800 font-semibold text-sm bg-black"><span className='ml-8'>{text}</span></div>
  )
}

export default Border