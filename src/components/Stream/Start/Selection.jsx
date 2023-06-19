import Skewlinks from './skewlinks';
import Pastlinks from './pastlinks';
import {p, r, P_2023, P_2024, R_2023, R_2024} from '../../../assets'
import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
const Selection = () => {
  const [Redirect, setRedirect] = useState(false);
  const [route, setRoute] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (Redirect) navigate(`/${route}`);
  }, [Redirect]);



  return (
    <section>
      <div className="bg-[url('../src/assets/Vector/tesselatingwrap.svg')] bg-repeat bg-cover flex flex-col justify-center items-align">
        <div className="w-full flex flex-col justify-center items-center pb-10">   
          <h1 className="text-white flex flex-row justify-center items-center font-semibold sm:text-8xl text-7xl bg-black w-full bg-opacity-80 tracking-widest py-10 mt-10">STREAMS</h1>   
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 sm:w-[88.2%] w-full sm:ml-56 ml-0 -mt-10 mr-2">
          <div className="p-3 hover:p-1 transition-all ease-in-out cursor-pointer" onClick={() => {setRoute("prairies/d1-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-700 rounded-xl overflow-hidden pb-4"><img src={P_2024}/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 1 - 2024</span></div></div>
          <div className="p-3 hover:p-1 transition-all ease-in-out cursor-pointer" onClick={() => {setRoute("prairies/d2-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-700 rounded-xl overflow-hidden pb-4"><img src={P_2024}/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 2 - 2024</span></div></div>
          <div className="p-3 hover:p-1 transition-all ease-in-out cursor-pointer" onClick={() => {setRoute("rockies/d1-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-700 rounded-xl overflow-hidden pb-4"><img src={R_2024}/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 1 - 2024</span></div></div>
          <div className="p-3 hover:p-1 transition-all ease-in-out cursor-pointer" onClick={() => {setRoute("rockies/d2-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-700 rounded-xl overflow-hidden pb-4"><img src={R_2024}/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 2 - 2024</span></div></div>


          <div className="p-3 hover:p-1 transition-all ease-in-out cursor-pointer" onClick={() => {setRoute("prairies/d1-2023"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-700 rounded-xl overflow-hidden pb-4"><img src={P_2023}/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 1 - 2023</span></div></div>
          <div className="p-3 hover:p-1 transition-all ease-in-out cursor-pointer" onClick={() => {setRoute("prairies/d2-2023"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-700 rounded-xl overflow-hidden pb-4"><img src={P_2023}/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 2 - 2023</span></div></div>
          <div className="p-3 hover:p-1 transition-all ease-in-out cursor-pointer" onClick={() => {setRoute("rockies/d1-2023"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-700 rounded-xl overflow-hidden pb-4"><img src={R_2023}/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 1 - 2023</span></div></div>
          <div className="p-3 hover:p-1 transition-all ease-in-out cursor-pointer" onClick={() => {setRoute("rockies/d2-2023"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-700 rounded-xl overflow-hidden pb-4"><img src={R_2023}/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 2 - 2023</span></div></div>

        </div>
      </div>
    </section>
  )
}

export default Selection