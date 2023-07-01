import React from 'react'

// Yes its the same, but at least its editable or whatever
const textBlocks = [
    "ONTO WORLDS",
    "ONTO WORLDS",
    "ONTO WORLDS",
    "ONTO WORLDS",
    "ONTO WORLDS",
    "ONTO WORLDS",
    "ONTO WORLDS",
    "ONTO WORLDS",
    "ONTO WORLDS",
    "ONTO WORLDS",
]

const MultiText = () => {
  return (
    <div className='flex flex-col gap-2 overflow-hidden bg-black'>
        {
            textBlocks.map((textBlock, index) => (
                <h2 className='font-poppins text-7xl text-black mx-auto' style={{WebkitTextStroke: index % 2 ? "2px white" : "2px red"}}  key={index}>{textBlock}</h2>
            ))
        }
    </div>
  )
}

export default MultiText