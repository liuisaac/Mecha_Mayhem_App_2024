import { React, useEffect, useState } from 'react'
// import { completed, live, overunder, prairies_icon, rockies_icon, spinup, trailers, upcoming } from '../../assets'
import { filters } from '../../constants/filters';
import Border from './Templates.jsx/Border';
import FilterTab from './Templates.jsx/FilterTab';

const Sidebar = () => {
  var activeFilters = new Map();


  return (
    <div className={`w-full sticky top-0 left-0 h-screen bg-[#141414]
          flex flex-col items-center transition-all ease-in-out duration-200`}>
      <div className={`flex flex-col mt-12 duration-100 transition-opacity ease-in-out font-bold tracking-wide w-full h-full text-dimWhite`}>

        <div className="w-full h-[8%] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800">
          <span className='ml-8'>FILTERS</span>
        </div>

        {filters.map((tab, index) => (
          <div key={index} className={`${tab.isBorder?"h-[4%]":"h-[10%] ml-2"}`} onClick={()=>activeFilters.set(tab.filter, tab.default_state)}>
            {tab.isBorder?
              <Border text={tab.title} />
              :
              <div onClick={()=>tab.default_state = !tab.default_state}><FilterTab icon={tab.icon} title={tab.title} subtitle={tab.subtitle} shift={tab.shift} filterkey={tab.filter_key}/></div>
            }
          </div>
        ))}
        <div className="w-full h-[8%] flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800"></div>
      </div>
    </div>
  )
}

export default Sidebar