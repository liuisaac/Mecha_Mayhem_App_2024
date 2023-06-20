import Skewlinks from './skewlinks';
import Pastlinks from './pastlinks';
import {p, r, P_2023, P_2024, R_2023, R_2024, P_2023_YT, P_2024_YT, R_2023_YT, R_2024_YT} from '../../../assets'
import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
const Selection = () => {
  const [Redirect, setRedirect] = useState(false);
  const [ExternalRedirect, setExternalRedirect] = useState(false);
  const [route, setRoute] = useState("");
  const navigate = useNavigate();

  useEffect(() => {if (Redirect) navigate(route);}, [Redirect]);

  useEffect(() => {if (ExternalRedirect) window.location.href = (route);}, [ExternalRedirect]);


  return (
    <section>
      <div className="bg-[url('../src/assets/Vector/tesselatingwrap.svg')] bg-repeat bg-cover flex flex-col justify-center items-align">
        <div className="w-full flex flex-col justify-center items-center pb-10">   
          <h1 className="text-white flex flex-row justify-center items-center font-semibold sm:text-8xl text-7xl bg-black w-full bg-opacity-80 tracking-widest py-10 mt-10">STREAMS</h1>   
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 w-full -mt-10 mr-2">

          {/* OVER UNDER */}
          {/* OVER UNDER LIVE SCORING */}
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("/stream/prairies/d1-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-400 rounded-xl overflow-hidden pb-4 h-full"><img src={P_2024} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 1 - 2024 - LIVE SCORING</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("/stream/prairies/d2-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-400 rounded-xl overflow-hidden pb-4 h-full"><img src={P_2024} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 2 - 2024 - LIVE SCORING</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("/stream/rockies/d1-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-400 rounded-xl overflow-hidden pb-4 h-full"><img src={R_2024} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 1 - 2024 - LIVE SCORING</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("/stream/rockies/d2-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-gray-400 rounded-xl overflow-hidden pb-4 h-full"><img src={R_2024} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 2 - 2024 - LIVE SCORING</span></div></div>
          
          {/* YOUTUBE LINKS */}
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("prairies/d1-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={P_2024} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 1 - 2024 - YOUTUBE</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("prairies/d2-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={P_2024} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 2 - 2024 - YOUTUBE</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("rockies/d1-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={R_2024} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 1 - 2024 - YOUTUBE</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("rockies/d2-2024"), setRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={R_2024} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 2 - 2024 - YOUTUBE</span></div></div>
          
          {/* SPIN UP */}
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("https://www.youtube.com/watch?v=loDtdgFKv18"), setExternalRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={P_2023} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 1 - 2023 - YOUTUBE</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("https://www.youtube.com/watch?v=A1I8daC98CI"), setExternalRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={P_2023} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 2 Part 1 - 2023 - YOUTUBE</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("https://www.youtube.com/watch?v=m6znSJRY1nI"), setExternalRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={P_2023} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Prairies Division Day 2 Part 2- 2023 - YOUTUBE</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("https://www.youtube.com/watch?v=9fq5zeY0D8k"), setExternalRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={R_2023} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 1 - 2023 - YOUTUBE</span></div></div>
          <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" onClick={() => {setRoute("https://www.youtube.com/watch?v=xqMcIQazeeI"), setExternalRedirect(true)}}><div className="flex flex-col justify-start items-start bg-[#2b2b2b] border-2 border-red-600 rounded-xl overflow-hidden pb-4 h-full"><img src={R_2023} className="w-full"/><span className="bg-black bg-opacity-40 font-semibold p-2 w-full">VRC Mecha Mayhem Signature Event - Rockies Division Day 2 - 2023 - YOUTUBE</span></div></div>

        </div>
      </div>
    </section>
  )
}

export default Selection