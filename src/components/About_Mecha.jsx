import styles from '../style';
import "../index.css";


// 2 DIVISIONS
// 120 TOTAL TEAMS

const About_Mecha = () => {
  return (
    <div className = "flex flex-col items-center justify-center text-white mb-10 xl:text-[60px] lg:text-[45px] md:text-[35px] sm:text-[25px] xs:text-[40px]">
        <div className="flex flex-row whitespace-nowrap mb-3">
            <h1 className = "font-bold mx-5 invisible sm:visible"> 2 <span className='bg-rink-text'>DIVISIONS</span></h1>
            <h2 className="invisible sm:visible">•</h2>
            <h1 className = "font-bold mx-5">3 <span className='bg-rink-text'>WORLDS</span> SPOTS</h1>
            <h2 className="invisible sm:visible">•</h2>
            <h1 className = "font-bold mx-5 invisible sm:visible">120 <span className='bg-rink-text'>TOTAL TEAMS</span></h1>
        </div>
        <div className="flex flex-row text-[20px] w-3/4">
            <p>
            <span className="bg-red-text font-bold">Mecha Mayhem</span> is Canada's largest VEX Robotics Signature Event.
            Started in 2023, Mecha Mayhem brings together over High school and Middle school teams from around the world
            to compete at the BMO Centre in <span className="bg-red-text font-bold">Calgary, Alberta, Canada</span>.  
            Over three days of competition teams will take their shot at
            becoming <span className="bg-red-text font-bold">Mecha Mayhem Champions</span> and earning a spot at
            the <span className="bg-red-text font-bold">Vex Robotics World Championships</span>.
            </p>
        </div>
    </div>
  )
}

export default About_Mecha