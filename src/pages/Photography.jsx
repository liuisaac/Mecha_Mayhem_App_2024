import React from 'react'
import HighlightsReel from './../components/Photography/HighlightsReel';
import gDriveIcon from '../assets/Vector/gdrive.svg'
import JumpToLinks from './../components/Photography/JumpToLinks/JumpToLinks';

const Photography = () => {
  return (
    <div className='flex bg-black'>
      <HighlightsReel />

      <div className='flex flex-col mt-12 mx-4'>
        <h4 className='text-white text-4xl font-poppins mt-8 leading-[1.55]'>Top-notch photography, curated by both professionals and our community.</h4>
        
        <button onClick={() => window.open("https://drive.google.com/drive/folders/14inhiIuoT9m8c7NgrnxKaQgXcHBYJztr?usp=drive_link")} className='bg-red-500 border-red-500 border-2 w-fit px-6 py-4 mt-4 flex justify-center items-center gap-2 -skew-x-12 hover:bg-black hover:text-white transition-all'>
          <img src={gDriveIcon} alt="Drive Icon" className='skew-x-12' />
          <span className='font-rubik text-2xl text-white skew-x-12'>OPEN DRIVE FOLDER</span>
        </button>

        <JumpToLinks />
      </div>

    </div>
  )
}

export default Photography