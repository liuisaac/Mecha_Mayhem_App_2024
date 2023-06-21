//import {p, r, P_2023, P_2024, R_2023, R_2024, P_2023_YT, P_2024_YT, R_2023_YT, R_2024_YT} from '../../assets'
import { useNavigate } from 'react-router-dom';
import { streamLinks } from '../../constants'
import { React, useEffect, useState } from 'react';
const Selection = () => {
  const [Redirect, setRedirect] = useState(false);
  const [ExternalRedirect, isExternalRedirect] = useState(false);
  const [route, setRoute] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (Redirect) {
      if (ExternalRedirect)
        window.location.href = (route);
      else
        navigate(route);
      } 
  }, [Redirect]);


  return (
    <section>
      <div className="bg-[url('../src/assets/Vector/tesselatingwrap.svg')] bg-repeat bg-cover flex flex-col justify-center items-align">
        <div className="w-full flex flex-col justify-center items-center pb-10">   
          <h1 className="text-white flex flex-row justify-center items-center font-semibold sm:text-8xl text-7xl bg-black w-full bg-opacity-80 tracking-widest py-10 mt-10">STREAMS</h1>   
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 w-full -mt-10 mr-2">

          {/* OVER UNDER */}
          {/* OVER UNDER LIVE SCORING */}
          {streamLinks.map((stream) => (
            <div className="p-3 hover:p-0 transition-all cursor-pointer duration-[40ms]" 
              onClick={() => {setRoute(stream.path), isExternalRedirect(stream.redirect), setRedirect(true)}}>

              <div className={`flex flex-col justify-start items-start bg-[#2b2b2b] 
                border-2 rounded-xl overflow-hidden pb-4 h-full
                ${stream.redirect ? "border-red-600" : "border-gray-400"}`
              }>

                <img src={stream.thumbnail} className="w-full"/>
                <span className="bg-black bg-opacity-40 font-semibold p-2 w-full">
                  {stream.title}
                </span>

              </div>
            </div>
          )
          )}
          

        </div>
      </div>
    </section>
  )
}

export default Selection