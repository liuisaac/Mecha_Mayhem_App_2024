import React from 'react'
import { whitebull, git, gmail, insta, yt, } from '../../assets';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black">
      <div className="bg-black text-dimWhite text-sm font-poppins flex flex-col justify-center items-center">
        {/* Bar */}
        <div className="w-2/3 h-[2px] mt-8 bg-dimWhite "></div>

        <div className="flex flex-row w-1/2 justify-center items-center mt-5">
          <img src={whitebull} className="h-4 opacity-70"/>
          <span>  » Mecha Mayhem 2024</span>
        </div>

        <div className="flex flex-col text-center justify-center items-center">
          <span className="mt-2 font-semibold">Contact Us!</span>
          <div className="w-full flex md:flex-row flex-col items-center justify-center">
            <a href="https://www.youtube.com/@westernmechatronics6723" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mt-2">
              <img src={yt} className="mr-2 h-3 hover:cursor-pointer"/>
              <span className="hover:underline">@westernmechatronics</span>
            </a>

            <a href="https://www.youtube.com/channel/UCZoVzmcR2vB969t3WL_4ELA" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mx-8 mt-2">
              <img src={gmail} className="mr-2 h-3 hover:cursor-pointer"/>
              <span className="hover:underline">Mecha@westernmech.ca email</span>
            </a>

            <a href="https://www.instagram.com/western_mechatronics/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mt-2">
              <img src={insta} className="mr-2 h-3 hover:cursor-pointer"/>
              <span className="hover:underline">@western_mechatronic</span>
            </a>
          </div>

          <span className="opacity-0 text-[12px]">===</span>

          <span className="font-semibold">Report an Issue</span>
          <a href="https://github.com/liuisaac/Mecha_Mayhem_App/issues" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mt-2">
            <img src={git} className="mr-2 h-3 hover:cursor-pointer"/>
            <span className="hover:underline">https://github.com/liuisaac/Mecha_Mayhem_App/issues</span>
          </a>
          
          <span className="opacity-30 text-[12px]">(shameless self-promo)</span>
          
          <span>@2021 - 2023 Western Mechatronics</span>
          <span className="text-[10px]">info@westernmech.ca +1 587-888-7302 +1 403-991-3277</span>
          <span className="text-[10px]">820 10 St SW Calgary, AB T2P 2X1</span>
        </div>

        {/* Bar */}
        <div className="w-2/3 h-[2px] my-8 bg-dimWhite "></div>

      </div>
    </section>
  )
}

export default Footer