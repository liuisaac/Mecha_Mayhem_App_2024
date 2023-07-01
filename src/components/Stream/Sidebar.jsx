import { React, useEffect } from 'react'
import { filters } from '../../constants/filters';
import Border from './Templates/Border';
import FilterTab from './Templates/FilterTab';

const Sidebar = ({change, aFilters}) => {
  function add(filter, state) {
    const newFilters = new Map(aFilters);
    newFilters.set(filter, state);
    change(newFilters);
  }
  const elements = (
    <div className={`w-full grow-0 sticky top-0 left-0 h-screen overflow-y-scroll bg-[#141414] 
        [&::-webkit-scrollbar]:bg-[#191724] [&::-webkit-scrollbar-thumb]:bg-[#2e2e3a]  [&::-webkit-scrollbar-thumb]:rounded-xl
          flex flex-col items-center transition-all ease-in-out duration-200 z-10`}>
      <div className={`flex flex-col mt-12 duration-100 transition-opacity ease-in-out font-bold tracking-wide w-full h-full text-dimWhite`}>

        <div className="w-full min-h-[55px] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800">
          <span className='ml-8'>FILTERS</span>
        </div>

        {filters.map((tab, index) => (
          <div key={index} className={`${tab.isBorder?" min-h-[34px]":" min-h-[65px] ml-2"}`} onClick={()=>add(tab.filter_key, tab.default_state)}>
            {tab.isBorder?
              <Border text={tab.title} />
              :
              <div onClick={()=>tab.default_state = !tab.default_state}>
                <FilterTab icon={tab.icon} title={tab.title} subtitle={tab.subtitle} shift={tab.shift} filterkey={tab.filter_key}/>
              </div>
            }
          </div>
        ))}
        <div className="w-full min-h-[65px] flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800"></div>
      </div>
    </div>
  )

  return elements
}

export default Sidebar