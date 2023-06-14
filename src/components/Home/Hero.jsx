import styles from '../../style';
import { bg_vid, banner, hero_footer } from '../../assets';
import { leaf } from '../../assets'; //Dormant imports for Top notification bar DO NOT REMOVE LOL
import "../../index.css";

const Hero = () => {
  return (
    <section id="home" className={'flex flex-col ${styles.paddingY}'}>
      {/* Top Bar // No Stream*/}
      {/* <div className='flex flex-row  justify-center items-center
        tracking-wide font-poppins font-normal text-dimWhite leading-[30.8px] 
        py-[6px] px-4 bg-gray-gradient rounded-[10px] mb-2 whitespace-nowrap 
        w-full invisible xs:visible sm:h-[40px] h-[20px] text-[12px] sm:text-[18px]'>

        <span className="text-[#e05661] font-bold mr-8 invisible md:visible">  CALGARY, AB </span>
        <img src={leaf} className="w-[20px] h-[20px]"/>
          <p className={`mx-2`}>
            CANADA'S
            <span className="text-[#e05661] font-bold">  LARGEST </span>
            VEX ROBOTICS SIGNATURE EVENT
          </p>
        <img src={leaf} className="w-[20px] h-[20px]"/>
        <span className="text-[#e05661] font-bold ml-8 invisible md:visible"> 02/14/2024 </span>
      </div> */}

      {/* Top Bar // Stream*/}
      {/* <div className='flex flex-row items-center py-[6px] px-4 bg-rink-gradient invisible xxs:visible rounded-[10px] mb-2 sm:h-[40px] h-[20px] w-full'>
        <span className="text-white font-bold absolute sm:text-[18px] text-[12px]">  🔴 STREAM IS LIVE </span>
        <p className={`${styles.paragraph} ml-2 overflow-hidden`}>
          <span className="md:visible invisible text-white font-normal ml-52"> PRAIRIES - QUAL 58 </span>
          <span className="md:visible invisible  text-white font-normal ml-24"> ROCKIES - QUAL 61 </span>
        </p>
      </div> */}

      {/* VIDEO+HERO SECTION */}
      <div className={`flex-1 ${styles.flexStart} items-center justify-center flex-col relative`}>        
        {/* video file */}
        <video autoPlay muted loop width="100%" height="100%" controls={false} className='flex-1 object-cover -z-1 '>
          <source src={bg_vid} type="video/mp4"/>
        </video>
        
        {/* center elements */}
        <div className="flex-col justify-center items-align bg-primary bg-opacity-60 absolute w-5/6 py-1">
          {/* <img src={text_1} className="h-[150px] object-scale-down"/> */}
          {/* <img src={text_2}/> */}
          <img src={banner} className="object-cover mx-auto"/>
          <img src={hero_footer} className="mx-auto"/>
        </div>


      </div>
    </section>
  )
}

export default Hero