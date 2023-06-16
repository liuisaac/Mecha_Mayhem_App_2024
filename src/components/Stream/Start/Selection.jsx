import React from 'react'
import skewlinks from './skewlinks';

const Selection = () => {
  return (
    <section>
        <div className='w-full py-5 flex justify-center items-center lg:visible invisible'>        
          <div className="cards w-4/5 flex justify-center items-center">
              <skewlinks name={Rockies}/>
              <skewlinks name={Prairies}/>
          </div>
        </div>
        
        <div>
            Praries
        </div>
        <div>
            Past Streams
        </div>
    </section>
  )
}

export default Selection