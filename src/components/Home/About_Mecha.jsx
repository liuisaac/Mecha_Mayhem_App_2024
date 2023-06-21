import {triballsvg} from '../../assets';
import "../../index.css";


// 2 DIVISIONS
// 120 TOTAL TEAMS

const About_Mecha = () => {
  return (
    <div className = "flex flex-col items-center justify-center text-white xl:text-[60px] lg:text-[45px] md:text-[35px] sm:text-[25px] xs:text-[40px]">
        <div className = "flex flex-col items-center justify-center w-full -mt-8">
          <div className="w-full bg-[url('../src/assets/Vector/tesselatingwrap.svg')] bg-repeat bg-cover">
            <div className={`flex flex-row justify-center items-align 
            bg-repeat bg-contain bg-[url('../src/assets/Vector/marquee.svg')] 
            w-full border-y-8 border-t-8 border-gray-800 
            sm:py-20 xs:py-14 xxs:py-12`}>

              <h1 className="font-bold lg:text-[120px] md:text-9xl sm:text-8xl xs:text-6xl se:text-6xl text-2xl text-[#C12135]" data-aos="zoom-in">160 Teams</h1>
            </div>
            
            {/* Bro this is so freaking cursed*/}


            <div><img src={triballsvg} className="h-[1000px] -my-[200px]" /></div>

            <div className="font-bold flex flex-col items-align justify-center w-full absolute -mt-[350px]
            drop-shadow-[0_2px_5px_rgba(60,0,0,0.8)]" data-aos="fade">
              <div className="font-bold flex flex-row items-align justify-center z-10">REGISTRATION CLOSES IN:  <span className="text-[#cb2c2c] ml-10">86 DAYS</span></div>
              <div className="w-2/3 h-[100px] left-1/2 transform -translate-x-1/2 mt-2
              absolute grid grid-cols-10 border-2 ">
                <div className="col-span-10 col-start-1 bg-white opacity-20"></div>
              </div>
            </div>
            
          </div>

          {/* Secition 2 */}
          <div>
            <div className={`flex flex-row justify-center items-align bg-repeat h-[300px]
            bg-[url('../src/assets/Vector/marquee.svg')] bg-contain w-full border-y-8 border-gray-800`}>
              <h1 className = "font-bold mx-5 mt-12 invisible sm:visible text-[#C12135] text-[120px]" data-aos="zoom-in">4 Worlds Spots</h1>
            </div>
          
            <div className="flex flex-col justify-center items-center -mt-6 py-8 text-4xl bg-[#151515] w-full border-t-8 border-gray-800">
              <div className="w-3/4 text-center leading-relaxed">
                <p data-aos="fade-left">
                  Mecha Mayhem brings together High School and Middle School teams from all around the world to compete against each other at the BMO Center in Calgary, AB, Canada.
                </p>
                <p className="mt-5" data-aos="fade-right">
                  Teams will have an opporunity to become <span className="font-bold">Mecha Mayhem Tournament Champions</span> and qualify for the World Championships in Dallas, TX, USA.
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