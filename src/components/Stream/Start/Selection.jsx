import React from 'react'
import Skewlinks from './skewlinks';
import Pastlinks from './pastlinks';
import {p, r} from '../../../assets'

const Selection = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center bg-[url('../src/assets/Vector/tesselatingwrap.svg')] bg-repeat bg-cover pb-10">   
        <h1 className="text-white flex flex-row justify-center items-center font-semibold text-6xl tracking-widest pt-10">STREAMS</h1>     
        <div className="w-full flex flex-row justify-center items-center h-screen pb-20 ">
            <Skewlinks name={"ROCKIES"} bgimage={r} route={"stream/rockies"}/>
            <Skewlinks name={"PRAIRIES"} bgimage={p} route={"stream/prairies"}/>
        </div>
        <div className="w-full h-1/2 flex flex-col justify-center items-center"><Pastlinks name={"PAST STREAMS"} bgimage={p}/></div>
      </div>
    </section>
  )
}

export default Selection