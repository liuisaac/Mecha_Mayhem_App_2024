import React from 'react';
import { useNavigate } from "react-router-dom";

const Card = ({ bgImage, name, route}) => {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/${route}`; 
    navigate(path);
  }

  return (
    <div className="group h-[500px] w-1/5 m-1 bg-red-400 rounded-xl bg-cover bg-center -skew-x-12
    transition-all duration-300 ease-in-out overflow-hidden grid place-content-center
    hover:w-[70%] hover:cursor-pointer hover:border-red-500 hover:border-4 opacity-60 hover:opacity-100"
    style={{ backgroundImage: `url(${bgImage})`}} onClick={routeChange}>
        <h3 className='text-white bg-[#00000099] text-3xl font-light0 tracking-widest skew-x-12 p-2
        opacity-0 group-hover:transition-opacity duration-300 group-hover:opacity-90'>
            { name }
        </h3>
    </div>
  )
}

export default Card