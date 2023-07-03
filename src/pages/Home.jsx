import React from 'react'
import { Hero, Links, Sponsors, Register, About_Mecha } from "../components/Home"
const Home = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className='sm:hidden flex flex-col items-center justify-center text-center text-white h-screen w-full bg-primary pt-16'>
                <h1 className='sm:text-6xl text-8xl italic font-bold'>WHOOPS.</h1>
                <p className='w-3/4 text-3xl mt-[15vh]'>The mobile site for Mecha Mayhem is still under development. Until then, please use the desktop site for the best experience</p>
            </div>
            <div className={'bg-gray-gradient ${styles.flexStart}'}>
                <div className={'$(styles.boxWidth}'}>
                    <Hero />
                </div>
            </div>

            <div className={'bg-gray-gradident ${styles.flexStart}'}>
                <div className={'$(styles.boxWidth}'}>
                    <Register />
                </div>
            </div>

            <div className={'bg-[#000000] ${styles.flexStart}'}>
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