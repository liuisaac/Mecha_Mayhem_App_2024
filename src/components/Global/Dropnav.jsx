import React from 'react'

const Dropnav = () => {
  return (
    <div className="w-2/3 grid grid-cols-6 py-12 mt-4 text-dimWhite">
      <div className="flex flex-col">
        <h className="text-xl text-white opacity-90 font-semibold">Title</h>
        <a className="underline">Section</a>
        <a className="underline">Section</a>
        <a className="underline">Section</a>
      </div>
    </div>
  )
}

export default Dropnav