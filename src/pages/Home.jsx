import React from 'react'
import { Navbar, Hero, Links, Sponsors, Footer, Register, About_Mecha } from "../components"

const Home = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
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

            <div className={'bg-[#151515] ${styles.flexStart}'}>
                <div className={'$(styles.boxWidth}'}>
                    <Links />
                </div>
            </div>

            <div className={'bg-gray-gradient ${styles.paddingX} ${styles.flexStart}'}>
                <div className={'$(styles.boxWidth}'}>
                    <Sponsors />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home