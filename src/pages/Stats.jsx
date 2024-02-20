import React from 'react'
import Search from '../components/Global/Search';
import StatDisplay from '../components/Stats/StatDisplay';
import Matches from '../components/Stats/Matches';

// new event id: 51496
// old test id: 47800
const Stats = () => {
  return (
    <div className={"bg-black w-screen h-screen flex flex-col justify-center items-center overflow-clip bg-[url('../src/assets/Vector/tesselatingwrap.svg')] "}>
      <h1 className="text-white font-rubik font-bold  transform -translate-y-8 md:-translate-y-30 text-4xl md:text-7xl">
        TEAM STATISTICS
      </h1>
      <Search />
      <p className='pt-10'></p>
      <StatDisplay key="/stats" />
      <h1>hello there</h1>
      <h1>i am hre sometimes</h1>
      {/* <Matches/> */}
    </div>
  );
  
}

export default Stats;