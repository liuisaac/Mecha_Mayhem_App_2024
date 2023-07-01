import React from 'react'

const IndentedText = ({ children, strokeColor, chevronRot, noLink, href }) => {

  const handleOpen = () => {
    if(!noLink) window.open(href);
  }

  return (
    <div className='flex gap-2 items-center justify-center w-fit group hover:cursor-pointer' onClick={handleOpen}>
      {
        noLink ? <svg xmlns="http://www.w3.org/2000/svg" style={{rotate: chevronRot ? chevronRot : "0deg"}} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={strokeColor ? strokeColor : "white"} className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> </svg>
        : <svg xmlns="http://www.w3.org/2000/svg" style={{rotate: chevronRot ? chevronRot : "0deg"}} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={strokeColor ? strokeColor : "white"} className="w-6 h-6 group-hover:translate-x-1 transition-all"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> </svg> 
      }
      <span className='group-hover:text-red-500 transition-all'>{ children }</span>
      { !noLink && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /> </svg> }
    </div>
  )
}

export default IndentedText