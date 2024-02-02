import React from "react";
import {
    Hero,
    Links,
    Sponsors,
    Register,
    About_Mecha,
} from "../components/Home";
const Home = () => {
    return (
        <div className="bg-primary w-screen overflow-x-hidden">
            <div className="flex flex-col items-center justify-center text-center text-white"></div>
            <div className={"bg-gray-gradient ${styles.flexStart}"}>
                <div className={"$(styles.boxWidth} "}>
                    <Hero />
                </div>
            </div>

            <div
                className={
                    "bg-gray-gradient flex flex-col items-center justify-center w-screen"
                }
            >
                <div className="mt-16">
                    <h4 className="text-red-500 text-7xl font-poppins font-bold mb-4">
                        EVENT SCHEDULE
                    </h4>
                    <div className="flex flex-col justify-center items-center text-center">
                        <div>
                            <span className="text-white text-3xl font-bold my-8">
                                FRIDAY, Feb - 2
                            </span>
                            <span className="text-dimWhite block font-light">
                                2:00 pm - Doors Open, Check-in, Inspection,
                                Skills Runs
                            </span>
                            <span className="text-dimWhite block font-light">
                                6:00 pm - Practice Matches Start
                            </span>
                            <span className="text-dimWhite block font-light">
                                9:00 pm - Doors Close
                            </span>
                        </div>
                        <div className="mt-4">
                            <span className="text-white text-3xl font-bold mt-8">
                                SATURDAY, Feb - 3
                            </span>
                            <span className="text-dimWhite block font-light">
                                7:00 am - Doors Open
                            </span>
                            <span className="text-dimWhite block font-light">
                                7:45 am - Pre-Show
                            </span>
                            <span className="text-dimWhite block font-light">
                                8:30 am - Driver Meeting & Opening Ceremony
                            </span>
                            <span className="text-dimWhite block font-light">
                                9:15 am - Qualifications Start, Skills and
                                Judging Open
                            </span>
                            <span className="text-dimWhite block font-light">
                                12:00 pm - Lunch Break
                            </span>
                            <span className="text-dimWhite block font-light">
                                1:00 pm - Qualifications Resume
                            </span>
                            <span className="text-dimWhite block font-light">
                                4:00 pm - Qualification Break
                            </span>
                            <span className="text-dimWhite block font-light">
                                4:30 pm - Qualifications Resume
                            </span>
                            <span className="text-dimWhite block font-light">
                                7:30 pm - Qualifications Finish for the day
                            </span>
                            <span className="text-dimWhite block font-light">
                                8:00 pm - Doors Close
                            </span>
                        </div>
                        <div className="mt-4">
                            <span className="text-white text-3xl font-bold mt-8">
                                SUNDAY, Feb - 4
                            </span>
                            <span className="text-dimWhite block font-light">
                                7:00 am - Doors Open
                            </span>
                            <span className="text-dimWhite block font-light">
                                8:15 am - Qualifications resume
                            </span>
                            <span className="text-dimWhite block font-light">
                                11:00 am - Qualifications finish, Alliance
                                selection
                            </span>
                            <span className="text-dimWhite block font-light">
                                11:30 am - Lunch break
                            </span>
                            <span className="text-dimWhite block font-light">
                                1:00 pm - Eliminations begin
                            </span>
                            <span className="text-dimWhite block font-light">
                                3:30 pm - Division finals, Overall finals
                            </span>
                            <span className="text-dimWhite block font-light">
                                4:30 pm - Awards & Closing Ceremony
                            </span>
                            <span className="text-dimWhite block font-light">
                                6:30 pm - Cleanup
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={
                    "bg-gray-gradient ${styles.flexStart} flex flex-col items-center justify-center"
                }
            >
                <div className={"$(styles.boxWidth} "}>
                    <div className="mt-16">
                        <h4 className="text-red-500 text-7xl font-poppins font-bold">
                            BUS SCHEDULE
                        </h4>
                        <div className="flex flex-col justify-center items-center text-center">
                            <div>
                                <span className="text-white text-3xl font-bold my-8">
                                    FRIDAY, Feb - 2
                                </span>
                                <span className="text-white text-2xl font-semi block mt-2">
                                    {`BMO Center -> Hotels`}
                                </span>
                                <span className="text-dimWhite block font-light">
                                    4:00 pm - First Departure
                                </span>
                                <span className="text-dimWhite block font-light">
                                    9:30 pm - Final Departure from BMO
                                </span>
                            </div>
                            <div className="mt-4">
                                <span className="text-white text-3xl font-bold my-8">
                                    SATURDAY, Feb - 3
                                </span>
                                <span className="text-white text-2xl font-semi block mt-2">
                                    {`Hotels -> BMO Center`}
                                </span>
                                <span className="text-dimWhite block font-light">
                                    6:00 am - First Departure
                                </span>
                                <span className="text-dimWhite block font-light">
                                    8:00 am - Final Departure from Hotels
                                </span>

                                <span className="text-white text-2xl font-semi block mt-2">
                                    {`BMO Center -> Hotels`}
                                </span>
                                <span className="text-dimWhite block font-light">
                                    7:00 pm - First Departure
                                </span>
                                <span className="text-dimWhite block font-light">
                                    9:00 pm - Final Departure from BMO
                                </span>
                            </div>
                            <div className="mt-4">
                                <span className="text-white text-3xl font-bold my-8">
                                    SUNDAY, Feb - 4
                                </span>
                                <span className="text-white text-2xl font-semi block mt-2">
                                    {`Hotels -> BMO Center`}
                                </span>
                                <span className="text-dimWhite block font-light">
                                    6:00 am - First Departure
                                </span>
                                <span className="text-dimWhite block font-light">
                                    8:00 am - Final Departure from Hotels
                                </span>

                                <span className="text-white text-2xl font-semi block mt-2">
                                    {`BMO Center -> Hotels`}
                                </span>
                                <span className="text-dimWhite block font-light">
                                    5:00 pm - First Departure
                                </span>
                                <span className="text-dimWhite block font-light">
                                    8:30 pm - Final Departure from BMO
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={
                    "bg-gray-gradient ${styles.flexStart} flex flex-col items-center justify-center"
                }
            >
                <div className={"$(styles.boxWidth} "}>
                    <div className="mt-16">
                        <h4 className="text-red-500 text-7xl font-poppins font-bold text-center">
                            HOTEL PRACTICE ROOM RULES
                        </h4>
                        <div className="flex flex-col justify-center items-center gap-8">
                            <span className="text-white text-3xl font-bold my-8 block text-center">
                                ROOM IS ONLY FOR MECHA MAYHEM COMPETITORS AND
                                SUPERVISORS
                            </span>
                            <span className="text-white text-3xl font-bold my-8 block text-center">
                                PRACTICE ROOM CLOSES AT{" "}
                                <span className="text-red-500">11 PM</span>
                            </span>
                            <span className="text-white text-3xl font-bold my-8 block text-center">
                                ADULT SUPERVISION FROM YOUR TEAM MUST BE PRESENT
                                AT ALL TIMES
                            </span>
                            <span className="text-white text-3xl font-bold my-8 block text-center">
                                SHARE THE FIELD WITH OTHER TEAMS SO EVERYONE
                                GETS A FAIR CHANCE TO PRACTICE
                            </span>
                            <span className="text-white text-3xl font-bold my-8 block text-center">
                                CLEAN UP YOUR MESS. DO NOT LEAVE YOUR EQUIPMENT
                                BEHIND
                            </span>

                            <span className="text-white text-3xl font-bold my-8 block text-center">
                                DO NOT REMOVE ARENA PARTS OR GAME ELEMENTS
                            </span>

                            <div className="flex flex-col justify-center items-center">
                                <span className="text-white text-3xl font-semi-bold my-8 block text-left">
                                    1. Teams using this courtesy field are asked
                                    to set up and maintain the arena and
                                    surrounding space
                                </span>
                                <span className="text-white text-3xl font-semi-bold my-8 block text-left">
                                    2. MAX practice time is 15 minutes, if
                                    another team is waiting
                                </span>
                                <span className="text-white text-3xl font-semi-bold my-8 block text-left">
                                    3. Set up a queue list if more than one team
                                    is present
                                </span>
                                <span className="text-white text-3xl font-semi-bold my-8 block text-left">
                                    4. Contact Justin Zhou at 
                                    <span className="text-red-500"> justin@westernmech.ca </span> if there is an issue
                                </span>
                            </div>

                            <span className="text-white text-3xl font-extrabold my-16 block text-center italic">
                                Have fun at Mecha Mayhem!
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"bg-[#000000] ${styles.flexStart} pt-12"}>
                <div className={"$(styles.boxWidth}"}>
                    <About_Mecha />
                </div>
            </div>

            <div className={"bg-gray-gradident ${styles.flexStart}"}>
                <div className={"$(styles.boxWidth}"}>
                    <Register />
                </div>
            </div>

            <div className={"bg-[#151515] ${styles.flexStart}"}>
                <div className={"$(styles.boxWidth}"}>
                    <Links />
                </div>
            </div>

            <div className={"bg-black ${styles.paddingX} ${styles.flexStart}"}>
                <div className={"$(styles.boxWidth}"}>
                    <Sponsors />
                </div>
            </div>
        </div>
    );
};

export default Home;
