import React from 'react'
import { Selection } from "../components/Stream"

const Stream = () => {
  return (
    <div className="bg-primary w-full overflow-hidden text-white">
      <div className={'bg-gray-gradient ${styles.flexStart}'}>
        <div className={'$(styles.boxWidth}'}>
            <Selection />
        </div>
      </div>
      Stream
    </div>
  )
}

export default Stream