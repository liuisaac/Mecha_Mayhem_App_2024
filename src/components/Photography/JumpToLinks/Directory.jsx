import React from 'react'
import IndentedText from './IndentedText'

const Directory = ({ data, title }) => {

    const getElements = (data, first = true, firstKey = "") => {
        return (
            <>
                { !first && (<IndentedText noLink={true} chevronRot={"90deg"}> {firstKey} </IndentedText>) }
                <div className='ml-4 flex flex-col gap-2'>
                    {
                        Object.keys(data).map((d, index) => (
                            (typeof data[d] === "string") 
                            ? (<IndentedText key={index} href={data[d]}> {d} </IndentedText>)
                            : getElements(data[d], false, d)
                        ))
                    }
                </div>
            </>
        )
    }


  return (
    <div className='text-white'>
        <div className='flex gap-2 items-center justify-center w-fit mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-8 h-8 rotate-90"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> </svg>
            <span className='font-atkinson-hyperlegible text-red-500 text-4xl'> {title} </span>
        </div>
        { data ? getElements(data) : "Stay tuned for Mecha Mayhem 2024!" }
    </div>
  )
}

export default Directory