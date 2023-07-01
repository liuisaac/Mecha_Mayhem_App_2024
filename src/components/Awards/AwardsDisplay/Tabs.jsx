import React from 'react'

const Tabs = ({ currentTab, setCurrentTab, tabs }) => {

  return (
    <div className='mt-8'>
        <h4 className='text-white text-center font-rubik text-1xl'>SEE AWARDS FOR</h4>
        <div className='flex justify-center items-center gap-8 mt-2'>
            {
                tabs.map((tab, index) => (
                    (tab === currentTab) ?
                    (
                        <div key={index} onClick={() => setCurrentTab(tab)} className='font- font-atkinson-hyperlegible px-16 py-3 -skew-x-12 bg-red-500 border-red-500 border-2 text-black font-bold text-2xl hover:cursor-pointer transition-all'>
                            <p className='skew-x-12'>{tab}</p>
                        </div>
                    ) :
                    (
                        <div key={index} onClick={() => setCurrentTab(tab)} className='font- font-atkinson-hyperlegible px-16 py-3 -skew-x-12 bg-black border-red-500 border-2 text-white font-bold text-2xl hover:bg-red-500 hover:cursor-pointer hover:text-black transition-all'>
                            <p className='skew-x-12'>{tab}</p>
                        </div>
                    )
        
                ))
            }
        </div>
    </div>
  )
}

export default Tabs