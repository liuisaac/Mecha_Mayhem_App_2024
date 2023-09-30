import React from 'react'
import { incompletepage } from '../assets'

const Apparel = () => {
  return (
    <div className="bg-primary text-white flex flex-col justify-center items-center">Apparel
      <img src={ incompletepage } className="w-full"/>
      <h1 className="font-bold sm:text-8xl text-4xl mb-6">Coming Soon!</h1>
      <h1 className="font-semibold sm:text-4xl text-xl sm:mb-0 mb-[50vh]">An apparel shop is still in the works. For now, check out our other pages!</h1>
    </div>
  )
}

export default Apparel