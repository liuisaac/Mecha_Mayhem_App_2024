import React from 'react'
import Skewlinks from './skewlinks';
import {p, r} from '../../../assets'

const Selection = () => {
  return (
    <section >
      <div className='w-full flex flex-col justify-center items-center overflow-visible lg:visible invisible'>        
        <div className="cards w-5/6 flex flex-col justify-center items-center">
            <Skewlinks name={"ROCKIES"} bgimage={r}/>
            <Skewlinks name={"PRAIRIES"} bgimage={p}/>
        </div>
      </div>
      
        {/* <div className="mx-56">
          <Skewlinks name={"PAST STREAMS"} bgimage={p}/>
        </div> */}
    </section>
  )
}

export default Selection