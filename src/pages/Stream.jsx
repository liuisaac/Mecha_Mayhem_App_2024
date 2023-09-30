import React, { useState, useEffect } from 'react'
import { Sidebar, Selection } from "../components/Stream"
import { wrap } from "../assets"
import { filters } from '../constants/filters'

const Stream = () => {
  const [Filters, setFilters] = useState(new Map())

  return (
    <div className="bg-[#16141b] w-full text-white border-b-4 border-gray-500 overflow-x-visible">
      <div className={`flex flex-row bg-[url(${wrap})] bg-repeat bg-cover items-stretch overflow-x-visible`}>
        <div className="w-1/4 overflow-x-visible"><Sidebar change={setFilters} aFilters={Filters}/></div>
        <div className="w-3/4"><Selection filters={Filters}/></div>
      </div>
    </div>
  )
}

export default Stream