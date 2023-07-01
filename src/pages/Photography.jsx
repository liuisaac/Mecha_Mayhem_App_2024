import React from 'react'
import { incompletepage } from '../assets'

const Photography = () => {
  return (
    <div className="bg-primary text-white flex flex-col justify-center items-center">Photography
      <img src={ incompletepage } className="w-full"/>
      <h1 className="font-bold text-8xl mb-6">Oops!</h1>
      <h1 className="font-semibold text-4xl">This page isnt finished yet. Consider checking out our other pages!</h1>
    </div>
  )
}

export default Photography