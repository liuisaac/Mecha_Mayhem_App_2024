//import {p, r, P_2023, P_2024, R_2023, R_2024, P_2023_YT, P_2024_YT, R_2023_YT, R_2024_YT} from '../../assets'
import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import { streamlinks } from '../../constants/streamlinks';
import shareSection from '../../constants/sectionchecker';
import { fullStreamBG } from '../../assets';


const Selection = ({ filters }) => {
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

  function filterLogic(filter_keys) {
    let filter = filters
    // console.log(filter)
    if (filters.size===0)
      return true
    else {
      var active = false

      for (let [key, value] of filters) {
        if (value)
          active=true
      }
      
      if (active) {
        // console.log("CHECK")
        for (let [key, value] of filters) {
          if ((!filter_keys.includes(String(key)) && value === true)) {
            //if conjugate is on and 
            const conjugate = shareSection(key, filter_keys);
            if ((conjugate === null || filters.has(conjugate) == false || filters.get(conjugate) == false)) {
              return false;
            }
          }
        }
      }
      return true
    }

  }


  return (
    <section>
      <div className="flex flex-col justify-center items-align w-full grow">
        <div className="w-full flex flex-col justify-center items-center pb-10 mb-16">   
          {/* <h1 className="text-white flex flex-row justify-center items-center 
            font-semibold sm:text-8xl text-7xl bg-black w-full bg-opacity-80 tracking-widest py-10 mt-10">STREAMS</h1>    */}
        </div>

        {/* Streams */}
        <div className="flex justify-center items-center sm:mr-2 sm:m-0">
          <div className="flex flex-col -mt-10 mb-5 w-[95%] gap-5">
            {streamlinks.map((stream, index) => (
              <div className={`transition-all cursor-pointer duration-100 ${filterLogic(stream.filters)?"visible":"hidden"}`} key={index} 
                onClick={() => {setRoute(stream.path), isExternalRedirect(stream.redirect), setRedirect(true)}}>

                <div className={`bg-[#1a1a22] bg-[url("../src/assets/Vector/FullStreamBG.svg")] bg-cover bg-no-repeat bg-center
                  rounded-sm overflow-hidden pb-4 h-52  drop-shadow-[0_1px_4px_rgba(255,0,0,0.4)] hover:drop-shadow-[0_0px_4px_rgba(255,255,255,0.4)] hover:bg-opacity-60 opacity-100 transition duration-200 ease-in-out`
                }>
                  <div className='flex flex-col justify-center items-center'>
                    <span className="text-center w-full text-xl font-bold -mb-6 mt-5">{stream.title}</span>
                    <div className="flex flex-row justify-center items-center text-8xl font-bold font-orbitron tracking-widest text-red-600" >
                      <span className="">{stream.year[0]}</span>
                        
                      <img src={stream.thumbnail} className="h-full shrink mt-2"/>
                      <span>{stream.year[1]}</span>
                    </div>
                    <span className="p-2 text-center w-full text-sm tracking-widest font-semibold -mt-6">{stream.subtitle}</span>
                  </div>

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