import React from 'react'
import { Hero, Links, Sponsors, Register, About_Mecha } from "../components/Home"
const Home = () => {
    return (
        <div className="bg-primary w-screen overflow-x-hidden">
            <div className="flex flex-col items-center justify-center text-center text-white mt-16 sm:hidden h-screen">
                <span className='text-6xl xs:text-8xl font-bold italic'>WHOOPS</span>
                <p className='w-3/4 mt-[10vh] text-3xl'>
                    The mobile site for Mecha Mayhem is still under development. 
                    Until then, please use the desktop site for the best experience. 
                     </p>

            </div>
                <div className={'bg-gray-gradient ${styles.flexStart} sm:block hidden'}>
                    <div className={'$(styles.boxWidth}'}>
                        <Hero />
                    </div>
                </div>

                <div className={'bg-gray-gradident ${styles.flexStart} sm:block hidden'}>
                    <div className={'$(styles.boxWidth}'}>
                        <Register />
                    </div>
                </div>

                <div className={'bg-[#000000] ${styles.flexStart} sm:block hidden'}>
                    <div className={'$(styles.boxWidth}'}>
                        <About_Mecha />
                    </div>
                </div>

                <div className={'bg-[#151515] ${styles.flexStart} sm:block hidden'}>
                    <div className={'$(styles.boxWidth}'}>
                        <Links />
                    </div>
                </div>

            {/* <div className={'bg-gray-gradient ${styles.paddingX} ${styles.flexStart}'}>
                <div className={'$(styles.boxWidth}'}>
                    <Sponsors />
                </div>
            </div> */}
        </div>
    )
}

export default Home