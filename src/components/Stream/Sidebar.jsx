import { React, useEffect, useState } from 'react'
import { circle_arrow, circle_arrow_back } from '../../assets'

const Sidebar = () => {
  return (
    <div className={`w-full sticky top-0 left-0 h-screen bg-[#141414]
          flex flex-col items-center transition-all ease-in-out duration-200`}>
      <div className={`flex flex-col mt-12 duration-100 transition-opacity ease-in-out font-bold tracking-wide w-full h-full text-dimWhite`}>

        <div className="w-full h-[8%] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800">
          <span className='ml-8'>FILTERS</span>
        </div>

        <div className="w-full h-[4%] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800 font-semibold text-sm bg-black"><span className='ml-8'>DIVISION</span></div>

        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>THE ROCKIES</span>
            <span className='ml-8 -mt-2 tracking-wider'>DIVISION</span>
          </div>
        </div>

        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>THE PRAIRIES</span>
            <span className='ml-8 -mt-2 tracking-wider'>DIVISION</span>
          </div>
        </div>

        <div className="w-full h-[4%] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800 font-semibold text-sm bg-black"><span className='ml-8'>STATUS</span></div>

        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>UPCOMING</span>
            <span className='ml-8 -mt-2 tracking-wider'>MATCHES</span>
          </div>
        </div>

        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>LIVE</span>
            <span className='ml-8 -mt-2 tracking-wider'>MATCHES</span>
          </div>
        </div>

        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>COMPLETED</span>
            <span className='ml-8 -mt-2 tracking-wider'>MATCHES</span>
          </div>
        </div>

        <div className="w-full h-[4%] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800 font-semibold text-sm bg-black"><span className='ml-8'>PROMOTIONAL VIDEOS</span></div>

        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>TRAILERS</span>
            <span className='ml-8 -mt-2 tracking-wider'>REVEALS</span>
          </div>
        </div>

        <div className="w-full h-[4%] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800 font-semibold text-sm bg-black"><span className='ml-8'>YEAR</span></div>
        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>2024</span>
            <span className='ml-8 -mt-2 tracking-wider'>VEX OVER UNDER</span>
          </div>
        </div>
        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>2023</span>
            <span className='ml-8 -mt-2 tracking-wider'>VEX SPIN UP</span>
          </div>
        </div>

        <div className="w-full h-[4%] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800 font-semibold text-sm bg-black"><span className='ml-8'>TEAMS</span></div>

        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>210Y</span>
            <span className='ml-8 -mt-2 tracking-wider'>#SHOUTOUT</span>
          </div>
        </div>
        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>3388H</span>
            <span className='ml-8 -mt-2 tracking-wider'>ANGEL</span>
          </div>
        </div>
        <div className="w-full h-[10%] py-2 flex flex-row justify-start items-center 
                        border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
                        transition duration-100 ease-in-out">
          <div className="flex flex-col justify-start items-start">
            <span className='ml-8 text-2xl font-normal'>4082C</span>
            <span className='ml-8 -mt-2 tracking-wider'>FREEDOM SADIATORS</span>
          </div>
        </div>

        <div className="w-full h-[8%] flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-500"></div>
      </div>
    </div>
  )
}

export default Sidebar