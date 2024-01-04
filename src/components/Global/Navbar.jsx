//import React from 'react'
import { useState, useEffect } from 'react'
import { close, whitebull, redbull, menu, up_red, down_white, down_red, leaf } from '../../assets';
import { navLinks } from '../../constants'
import { Link, useLocation } from 'react-router-dom';
import HoverIcon from './HoverIcon';
import Dropnav from './Dropnav';
import { delay } from 'framer-motion';

const Navbar = () => {
  const location = useLocation()
  const [active, setActive] = useState(String(location.pathname));
  const [toggle, setToggle] = useState(false);
  const [Dropdown, setDropdown] = useState(true);

  useEffect(() => {
    setActive(`/${String(location.pathname).split("/")[1]}`)
  })

  function hamburger_button (title) {
    setActive(title);
    setToggle(!toggle)
  }
  
  return (
    <div>
      <nav className="w-screen flex py-3 justify-center items-center navbar bg-black border-b-2 border-gray-700 top-0 fixed z-50">

      {/* LOGO */}
      <a  href="https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-23-1496.html#general-info" 
          target="_blank" 
          rel="noopener noreferrer">
        <HoverIcon iconDefault={whitebull} iconHover={redbull} persistant={false} visible={true}/>
        <div className="ml-[3vh] scale-125"><HoverIcon iconDefault={whitebull} iconHover={redbull} persistant={true} visible={false} scale={"1.2"}/></div>
      </a>

      {/* NAVBAR */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-row w-3/4" >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}

            className={`font-poppins font-normal hover:text-[#e05661] transition-all cursor-pointer tracking-widest text-sm
              ${active === nav.path ? "text-[#e05661]" : "text-white"}
              ${index === navLinks.length - 1 ? "mx-auto" : "mx-auto"}`}
            onClick={() => setActive(nav.path)}
          >
            <div data-aos="fade-right" data-aos-once="true" data-aos-delay={nav.stagger}><Link to={`${nav.id}`}>{nav.title}</Link></div>
            
          </li>
        )

        )}
      </ul>

      <div className='flex-row fixed justify-center items-center
        tracking-widest font-orbitron font-normal text-dimWhite leading-[30.8px] 
        py-[6px] px-4 bg-gray-gradient rounded-[10px] m-2 whitespace-nowrap 
        w-screen sm:h-[80px] h-[40px] text-[8px] xxs:text-[16px] xs:text-[24px] sm:text-[36px] sm:hidden flex z-30'>

        <img src={leaf} className="w-[20px] h-[20px] xs:flex hidden"/>
          <p className={`mx-2`}>
            MECHA MAYHEM 2024
          </p>
        <img src={leaf} className="w-[20px] h-[20px] xs:flex hidden"/>
      </div>

      {/* hover:bg-[url("${down_red}")]  */}
      <div className="" onClick={() => setDropdown(!Dropdown)}>
        <HoverIcon iconDefault={down_white} iconHover={down_red} scale={"0.9"} visible={!Dropdown} alt={"Extended Nav Menu Up"} persistant={false}/>
        <HoverIcon iconDefault={up_red} iconHover={up_red} scale={"0.9"} visible={Dropdown} alt={"Extended Nav Menu Down"} persistant={true}/>
      </div>


      {/* MOBILE*/}
      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain mr-8 z-30"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      </nav>
      <div
          className={`${!toggle ? "-translate-y-full" : "translate-y-0"} py-6 bg-black bg-opacity-70 backdrop-blur-[6px]
           fixed z-20 left-0 w-screen h-full sidebar transition ease-in-out duration-300 top-12 border-b-8 border-gray-700 overflow-x-hidden`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ml-5 ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => hamburger_button(nav.title)}
              >
                <Link to={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      <div className={`bg-black bg-opacity-90 flex justify-center items-start border-black border-2 h-1/3 top-0 fixed z-20 w-full transition ease-in-out duration-300 ${Dropdown?"-translate-y-full":"translate-y-0"}`}>
        <Dropnav />
      </div>
    </div>

  )
}

export default Navbar