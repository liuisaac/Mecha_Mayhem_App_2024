import React from 'react'
import { Hero, Links, Sponsors, Register, About_Mecha } from "../components/Home"
const Home = () => {
    return (
        <div className="bg-primary w-screen overflow-x-hidden">
            <div className="flex flex-col items-center justify-center text-center text-white">
            </div>
                <div className={'bg-gray-gradient ${styles.flexStart}'}>
                    <div className={'$(styles.boxWidth} '}>
                        <Hero />
                    </div>
                </div>

                <div className={'bg-[#000000] ${styles.flexStart} pt-12'}>
                    <div className={'$(styles.boxWidth}'}>
                        <About_Mecha />
                    </div>
                </div>

                <div className={'bg-gray-gradident ${styles.flexStart}'}>
                    <div className={'$(styles.boxWidth}'}>
                        <Register />
                    </div>
                </div>

                <div className={'bg-[#151515] ${styles.flexStart}'}>
                    <div className={'$(styles.boxWidth}'}>
                        <Links />
                    </div>
                </div>

            <div className={'bg-black ${styles.paddingX} ${styles.flexStart}'}>
                <div className={'$(styles.boxWidth}'}>
                    <Sponsors />
                </div>
            </div>
        </div>
    )
}

export default Home