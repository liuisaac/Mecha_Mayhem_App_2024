//import {p, r, P_2023, P_2024, R_2023, R_2024, P_2023_YT, P_2024_YT, R_2023_YT, R_2024_YT} from '../../assets'
import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import { streamlinks } from '../../constants/streamlinks';


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
      <div className="flex flex-col justify-center items-align w-full grow">
        <div className="w-full flex flex-col justify-center items-center pb-10">   
          <h1 className="text-white flex flex-row justify-center items-center font-semibold sm:text-8xl text-7xl bg-black w-full bg-opacity-80 tracking-widest py-10 mt-10">STREAMS</h1>   
        </div>
        <div className="flex justify-center items-center sm:mr-2 sm:m-0">
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 -mt-10 mb-5 w-[95%]">
            {streamlinks.map((stream) => (
              <div className="scale-100 hover:scale-[1.05] transition-all cursor-pointer duration-100" key={stream.title} 
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Selection