import React from "react";
import { Encore, Tourism, sponsors } from "../../assets";
const Sponsors = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <span className="text-white font-poppins font-bold text-[72px] mt-10 overflow-hidden">
                    THANKS TO OUR EVENT SPONSORS!
                </span>
                <span
                    className="text-[#ffd900] font-poppins font-semibold italic tracking-[5px] 
            text-5xl mt-10 drop-shadow-[0_0px_5px_rgba(255,205,5,0.95)]"
                >
                    GOLD SPONSORS
                </span>
            </div>
            <div className="bg-[#ffd900] w-4/5 h-1 rounded-full drop-shadow-[0_0px_5px_rgba(255,205,5,0.95)] my-5" />

            <div className="flex flex-row justify-center items-center gap-10">
                <img src={Tourism} className="w-1/3" />
                <img src={Encore} className="w-1/3" />
            </div>
            <div className="mb-[25vh]" />
        </div>
    );
};

export default Sponsors;
