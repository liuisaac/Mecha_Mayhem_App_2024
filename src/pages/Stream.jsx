import React from 'react'
import { Sidebar, Selection } from "../components/Stream"

const Stream = () => {
  return (
    <div className="bg-primary w-full overflow-hidden text-white">
            <div className={'bg-gray-gradient ${styles.flexStart}'}>
        <div className={'$(styles.boxWidth}'}>
            <Selection />
        </div>
      </div>
      {/* <div className={'bg-gray-gradient ${styles.flexStart}'}>
        <div className={'$(styles.boxWidth}'}>
            <Sidebar />
        </div>
      </div> */}
    </div>
  )
}

export default Stream