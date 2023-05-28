import styles from '../style';
import {leaf, bg_vid} from '../assets';
import "../index.css";

const Hero = () => {
  return (
    <section id="home" className={'flex md:flex-row flex-col ${styles.paddingY}'}>
      <div className={`flex-1 ${styles.flexStart} justify-center flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Top Bar // No Stream*/}
        
        {/* <div className='sm:visible invisible flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={leaf} className="w-[20px] h-[20px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            CANADA'S
            <span className="text-[#e05661] font-bold">  LARGEST </span>
            VEX ROBOTICS SIGNATURE EVENT
          </p>
        </div> */}

        {/* Top Bar // Stream*/}
        <div className='flex flex-row items-center py-[6px] px-4 bg-rink-gradient rounded-[10px] mb-2 w-full h-[40px] '>
          <span className="text-white font-bold absolute text-[18px]">  🔴 STREAM IS LIVE </span>
          <p className={`${styles.paragraph} ml-2 overflow-hidden`}>
            <span className="md:visible invisible text-white font-normal ml-52"> PRAIRIES - QUAL 58 </span>
            <span className="md:visible invisible  text-white font-normal ml-24"> ROCKIES - QUAL 61 </span>
          </p>
        </div>
        
        {/* video file */}
        <video autoPlay muted loop width="100%" height="100%" controls={false} className='flex-1 object-cover'>
          <source src={bg_vid} type="video/mp4"/>
        </video>

        <div className="font-poppins text-[20px] relative z-30 p-5 text-2xl text-white ml-20 bg-primary bg-opacity-50" style="margin-top: -100px">
          Linga 
        </div>


      </div>
    </section>
  )
}

export default Hero