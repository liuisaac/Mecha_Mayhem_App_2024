import styles from '../style';
import "../index.css";


// 2 DIVISIONS
// 120 TOTAL TEAMS

const About_Mecha = () => {
  return (
    <div className = "flex flex-col items-center justify-center text-white mb-10 xl:text-[60px] lg:text-[45px] md:text-[35px] sm:text-[25px] xs:text-[40px]">
        <div className = "flex flex-col items-center justify-center w-full">
          <h1 className = "font-bold mx-5 invisible sm:visible"> 120 Teams.</h1>
          <div className="flex flex-row text-[24px] w-1/2">
              <p>
              Mecha Mayhem brings together High School and Middle School teams from around the world to compete against each other at the BMO Centre in Calgary, Alberta, Canada.  
              </p>
          </div>
        </div>

        <div className = "flex flex-col items-center justify-center mt-10 w-full">
          <h1 className = "font-bold mx-5 invisible sm:visible bg-rink-text -mt-6"> 3 Worlds Spots.</h1>
          <div className="flex flex-row text-[24px] w-1/2">
              <p>
              Teams will take their shot at becoming Mecha Mayhem Tournament Champions and earning a spot at the Vex Robotics World Championships.
              </p>
          </div>
        </div>
    </div>
  )
}

export default About_Mecha