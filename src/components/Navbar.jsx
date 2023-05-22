//import React from 'react'
import {useState} from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants'


const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="Mecha" className="w-[124px] h-[60px] ml-10"/>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-[#e24652]" : "text-white"
                } ${index === navLinks.length - 1 ? "mr-12" : "mr-12"}`}
                onClick={() => setActive(nav.title)}
              >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            )

            )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-10"
          onClick={() => setToggle(!toggle)}
        />

            <div
            className={`${
                !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar