import React, { useState } from 'react'



const FilterTab = ({ icon, title, subtitle, shift }) => {
  function add(arg1, arg2) {return String(arg1+arg2)}; function sub(arg1, arg2) {return String(arg2-arg1)};
  const [Toggle, setToggle] = useState(false);

  return (
    <>
      <div className={`w-full h-full py-2 flex flex-row justify-start items-center 
          border-t-[1px] border-r-[1px] border-gray-800 bg-[#121218] hover:bg-black
          transition duration-100 ease-in-out group hover:cursor-pointer ${Toggle?"border-r-4 border-r-red-500 opacity-100":"visible"}`} 
           onClick={()=>setToggle(!Toggle)}>

        <div className={`w-12 ml-${add(parseInt(shift), 4)} opacity-60 transition duration-200 ease-in-out group-hover:opacity-100 ${Toggle?"opacity-100":"visible"}`}><img src={icon} /></div>
        <div className={`ml-${sub(parseInt(shift), 8)} flex flex-col justify-start items-start`}>
            <span className='text-2xl font-normal'>{title}</span>
            <span className='-mt-2 tracking-wider'>{subtitle}</span>
        </div>
      </div> 
    </>
  )
}

export default FilterTab