import React from "react";
import {
    Encore,
    Tourism,
    TCEnergy,
    GES,
    Avantech,
    Eaton,
    Fotile,
    Alphadigital,
    ANDMIR,
    Calgary3D,
    GongCha,
    UofA,
    IDesign,
    TelusSpark,
    Sponsor,
} from "../../assets";
const Sponsors = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <span className="text-white font-poppins font-bold lg:text-6xl sm:text-4xl xs:text-2xl text-lg mt-16 my-5 overflow-hidden hidden sm:flex">
                    THANKS TO LAST YEAR'S EVENT SPONSORS!
                </span>
                <div className="flex-col justify-center items-center sm:hidden flex mt-10">
                    <span className="text-white font-poppins font-bold lg:text-[72px] sm:text-4xl xs:text-5xl text-4xl mt-2 overflow-hidden">
                        THANKS TO LAST YEAR'S
                    </span>
                    <span className="text-white font-poppins font-bold lg:text-[72px] sm:text-4xl xs:text-5xl text-4xl mt-2 overflow-hidden">
                        EVENT SPONSORS!
                    </span>
                </div>

                <img src={Sponsor} className="w-3/4" />
                {/* <span
                    className="text-[#ffd900] font-poppins font-semibold italic tracking-[5px] 
            sm:text-5xl text-3xl mt-10 drop-shadow-[0_0px_5px_rgba(255,205,5,0.95)]"
                >
                    GOLD SPONSORS
                </span> */}
            </div>
            {/* <div className="bg-[#ffd900] w-4/5 h-1 rounded-full drop-shadow-[0_0px_5px_rgba(255,205,5,0.95)] my-5" />

            <div className="flex-row justify-center items-center gap-10 sm:flex hidden">
                <img src={Tourism} className="w-1/3" />
                <img src={Encore} className="w-1/3" />
            </div>
            <div className="flex flex-col justify-center items-center gap-16 sm:hidden">
                <img src={Tourism} className="w-3/4" />
                <img src={Encore} className="w-3/4" />
            </div>
            <img src={TCEnergy} className="sm:w-1/3 w-3/4 mt-16" />
            <div className="mb-[5vh]" />
            <span
                className="text-[#ecf8fb] font-poppins font-semibold italic tracking-[5px] 
            sm:text-5xl text-3xl mt-20 drop-shadow-[0_0px_5px_rgba(150,150,255,0.95)]"
            >
                SILVER SPONSORS
            </span>
            <div className="bg-[#ecf8fb] w-4/5 h-1 rounded-full drop-shadow-[0_0px_5px_rgba(150,150,255,0.95)] mt-5" />
            <div className="w-full flex flex-row justify-center items-center gap-5">
                <img src={GES} className="w-1/4 mt-6" />
                <img src={Avantech} className="w-1/4 mt-6" />
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-5">
                <img src={Eaton} className="w-1/4 mt-6" />
                <img src={Fotile} className="w-1/4 mt-6" />
            </div>

            {/* Alphadigital, ANDMIR, Calgary3D, GongCha, UofA, 
    IDesign, TelusSpark, 
            <span
                className="text-[#f4a159] font-poppins font-semibold italic tracking-[5px] 
            sm:text-5xl text-3xl mt-20 drop-shadow-[0_0px_5px_rgba(400,150,100,0.95)]"
            >
                BRONZE SPONSORS
            </span>
            <div className="bg-[#f4a159] w-4/5 h-1 rounded-full drop-shadow-[0_0px_5px_rgba(400,150,100,0.95)] mt-5" />

            <div className="w-full flex flex-row justify-center items-center gap-5">
                <img src={Alphadigital} className="w-1/4 mt-6" />
                <img src={ANDMIR} className="w-1/4 mt-6" />
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-5 mt-3">
                <img src={Calgary3D} className="w-1/4 mt-6" />
                <img src={GongCha} className="w-1/4 mt-6" />
                <img src={UofA} className="w-1/4 mt-6" />
            </div>

            <span
                className="text-[#f45959] font-poppins font-semibold italic tracking-[5px] 
            sm:text-5xl text-3xl mt-20 drop-shadow-[0_0px_5px_rgba(400,50,100,0.95)]"
            >
                SUPPORTERS
            </span>
            <div className="bg-[#f45959] w-4/5 h-1 rounded-full drop-shadow-[0_0px_5px_rgba(400,50,100,0.95)] mt-5" />
            <img src={IDesign} className="w-1/4 mt-6" />
            <img src={TelusSpark} className="w-1/4 mt-6" /> */}
        </div>
    );
};

export default Sponsors;
