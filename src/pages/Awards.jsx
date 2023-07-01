import React from 'react'
import MultiText from '../components/Awards/MultiText'
import AwardsDisplay from '../components/Awards/AwardsDisplay/AwardsDisplay'


const Awards = () => {
  return (
    <div className='flex justify-evenly bg-black relative'>
      <div className='relative left-[5vw]'>
        <MultiText />
      </div>
      <div className='z-10 relative right-[5vw]'>
        <AwardsDisplay />
      </div>
    </div>
  )
}

export default Awards