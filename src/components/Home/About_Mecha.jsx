import { useNavigate } from 'react-router-dom';
import {triballsvg} from '../../assets';
import "../../index.css";


// 2 DIVISIONS
// 120 TOTAL TEAMS

const About_Mecha = () => {
  let navigate = useNavigate();
  return (
    <div className = "flex flex-col items-center justify-center text-white xl:text-[60px] lg:text-[45px] md:text-[35px] sm:text-[25px] xs:text-[40px]">
        <div className = "flex flex-col items-center justify-center w-full -mt-8">
          <div className="w-full bg-[url('../src/assets/Vector/tesselatingwrap.svg')] bg-repeat bg-cover">
            <div className={`flex-row justify-center items-align 
            bg-repeat bg-contain bg-[url('../src/assets/Vector/marquee.svg')] 
            w-full border-y-8 border-t-8 border-[#161616]
            sm:py-20 xs:py-14 xxs:py-12 sm:flex hidden`}>

              <h1 className="font-bold lg:text-[120px] md:text-9xl sm:text-8xl text-6xl text-[#d23a3a] drop-shadow-[0_2px_5px_rgba(255,0,0,0.5)] " data-aos="zoom-in">160 Teams</h1>
            </div>
            
            {/* Bro this is so freaking cursed*/}

            <div 
              className={`flex flex-col justify-start items-center h-[65vh] sm:bg-[url('../src/assets/Vector/balls.svg')]
        bg-[url('../src/assets/Vector/mobile/countdown_mb.svg')] bg-contain bg-no-repeat bg-center sm:my-16 my-5`}>
              <div 
                className="font-bold flex flex-col items-align justify-center sm:w-full w-11/12
        drop-shadow-[0_2px_5px_rgba(0,0,0,1)] sm:mt-[28vh] mt-[10vh]" 
                data-aos="fade">

                <div 
                  className="font-bold flex sm:flex-row flex-col items-align text-center justify-center mx-auto
        z-10 drop-shadow-2xl bg-black sm:bg-opacity-60 bg-opacity-50 text-3xl md:text-4xl lg:text-5xl sm:h-[8vh] h-[50vh] backdrop-blur-[10px] sm:rounded-none rounded-xl border-2 sm:w-3/4 w-full">
                  <span className='mt-2'>REGISTRATION IS OPEN UNTIL:  </span>

                  <span 
                    className="sm:text-red-500 text-[#EF4444] sm:ml-10 drop-shadow-[0_2px_5px_rgba(255,150,150,0.5)] mt-2">
                    JAN 12
                  </span>
                  <div className="sm:hidden flex flex-row justify-center items-center w-full" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay-300>
                    <button 
                    type="submit" 
                    className="text-white bg-black bg-opacity-20 border-white border-[1px] hover:bg-[#323136] focus:ring-2
          focus:outline-none focus:ring-red-500 h-8 drop-shadow-2xl transition duration-100 ease-in-out 
          sm:text-xl text-sm w-full sm:w-auto text-center tracking-wide font-semibold mt-[10vh]" 
                    onClick={() => 
                    {
                      window.location.href = "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-23-1496.html#general-info"
                    }}>
                      Register for Mecha Mayhem 2024
                    </button>
                </div>
                </div>

                </div>  

                <div className="sm:grid hidden grid-cols-8 content-evenly items-center justify-center w-full sm:mt-[10vh]" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay-300>
                  <button 
                  type="submit" 
                  className="col-start-4 col-span-2 text-white bg-black border-red-600 border-2 hover:bg-white focus:ring-2
        focus:outline-none focus:ring-red-500 rounded-full h-8 drop-shadow-2xl transition duration-500 ease-in-out 
        sm:text-xl text-sm sm:w-5/6 text-center tracking-widest font-semibold hover:border-red-400 hover:text-black font-poppins w-full mx-auto" 
                  onClick={() => 
                  {
                    window.location.href = "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-23-1496.html#general-info"
                  }}>
                    Register to COMPETE!
                  </button>
                  <button 
                  type="submit" 
                  className="col-start-4 col-span-2 text-white bg-black border-gray-300 border-2 hover:bg-white focus:ring-2
                  focus:outline-none focus:ring-red-500 rounded-full h-8 drop-shadow-2xl transition duration-500 ease-in-out 
                  sm:text-xl text-sm w-full sm:w-auto text-center tracking-widest font-semibold hover:border-red-600 hover:text-black mt-10 font-poppins" 
                  onClick={() => 
                  {
                    window.location.href = "https://www.eventbrite.com/e/mecha-mayhem-2024-tickets-743335164487"
                  }}>
                    Register as a SPECTATOR (free!)
                  </button>
                </div>       
              </div>
          </div>

          {/* Secition 2 */}
          <div>
            <div className={`flex-row justify-center items-align bg-repeat h-[300px]
            bg-[url('../src/assets/Vector/marquee.svg')] bg-contain w-full border-y-8 border-[#161616] sm:flex hidden`}>
              <h1 className = "font-bold mx-5 mt-12 invisible sm:visible text-[100px] md:text-[120px] text-[#d23a3a] drop-shadow-[0_2px_5px_rgba(255,0,0,0.5)]" data-aos="zoom-in">4 Worlds Spots</h1>
            </div>
          
            <div className="flex flex-col justify-center items-center -mt-6 py-8 sm:text-4xl text-xl bg-[#000000] w-full border-8 border-[#232323]">
              <div className="w-3/4 text-center leading-relaxed ">
                <h1 className="font-bold text-3xl text-red-500 drop-shadow-[0_2px_5px_rgba(255,0,0,0.5)] sm:hidden flex flex-row items-center justify-center">What is Mecha Mayhem?</h1>
                <p className="mt-5" data-aos="fade-left">
                  Mecha Mayhem is a VEX Signature Event that brings together High School and Middle School teams from all around the world to compete against each other at the BMO Center in Calgary, AB, Canada.
                </p>
                <p className="mt-5" data-aos="fade-right">
                  Teams will have an opportunity to become <span className="font-bold">Mecha Mayhem Tournament Champions</span> and qualify for the World Championships in Dallas, TX, USA.
                </p>
              </div>
              <div className="mt-10"></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About_Mecha