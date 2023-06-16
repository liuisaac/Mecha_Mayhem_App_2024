//import React from 'react'
import { useState } from 'react'
import { close, whitebull, menu, search } from '../../assets';
import { navLinks } from '../../constants'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-3 justify-center items-center navbar bg-black border-b-2 border-gray-700 
    ">
      {/* LOGO */}
      <img src={whitebull} alt="Mecha" className="h-6" />

      {/* NAVBAR */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-row w-3/4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}

            className={`font-poppins font-normal hover:underline cursor-pointer tracking-widest text-sm
              ${active === nav.title ? "text-[#e05661] red-text-shadow" : "text-white"} 
              ${index === navLinks.length - 1 ? "mx-auto" : "mx-auto"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
            
          </li>
        )

        )}
      </ul>

      <img src={search} alt="Search" className="h-[20px]" />



      {/* MOBILE*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-10"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar