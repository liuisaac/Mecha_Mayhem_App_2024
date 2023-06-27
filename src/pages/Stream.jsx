import React from 'react'
import { Sidebar, Selection } from "../components/Stream"
import { wrap } from "../assets"

const Stream = () => {
  return (
    <div className="bg-primary w-full text-white border-b-4 border-gray-500">
      <div className={`flex flex-row bg-[url(${wrap})] bg-repeat bg-cover h-full`}>
        {/* <div className="h-[1300px]]"><Sidebar /></div> */}
        <Selection />
      </div>
    </div>
  )
}

export default Stream