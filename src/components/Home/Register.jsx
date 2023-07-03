import styles from "../../style";
import { tower } from "../../assets";
import { useState } from "react";
import "../../index.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";

import { motion } from "framer-motion";

const firebaseConfig = {
	apiKey: "AIzaSyDeTL7UJ1Rt-tKw_SaIJ1k2ZWuI6pXF_tI",
	authDomain: "mecha-mayhem-site.firebaseapp.com",
	projectId: "mecha-mayhem-site",
	storageBucket: "mecha-mayhem-site.appspot.com",
	messagingSenderId: "811457644737",
	appId: "1:811457644737:web:d934b0d3bb0fb6079d2c40",
	measurementId: "G-FXCPMBFZFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

const Register = () => {
	const [formState, setFormState] = useState({
		email: "",
		teamNumber: "",
	});

	const [signedUp, setSignedUp] = useState(false);
	const [formOpacity, setFormOpacity] = useState(1);

	const handleSubmit = () => {
		push(ref(db), {
			timestamp: Date().toString(),
			...formState,
		});

    setFormOpacity(0);
    setTimeout(() => setSignedUp(true), 400);
	};

	return (
		<section
			id="register"
			className={
				"flex flex-col ${styles.paddingY} items-center justify-center"
			}
		>
			<div
				className={`flex-1 ${styles.flexStart} bg-primary justify-center items-center 
      flex-col relative font-poppins mt-8 text-3xl xxs:mb-2 mb-10 w-full border-b-8 border-[#161616]`}
			>
				<div className="overflow-hidden">
					<img
						src={tower}
						data-aos="fade-up"
						data-aos-easing="ease-in-sine"
						data-aos-duration="500"
					/>
				</div>
				<div
					className={
						"flex flex-col items-center justify-center absolute sm:mt-10 xxs:mt-6 se:mt-8 mt-6"
					}
				>
					<h1
						className="text-white font-semibold mx-auto drop-shadow-[0_2px_5px_rgba(255,255,255,0.4)]  
          xl:text-6xl lg:text-5xl sm:text-xl xxs:text-lg text-sm"
						data-aos="fade-zoom-in"
						data-aos-duration="700"
					>
						SIGN UP TO RECEIVE UPDATES
					</h1>
					<p
						className="text-white sm:mt-8 mx-10 font-light
          xl:text-3xl md:text-2xl sm:text-lg text-sm sm:block hidden drop-shadow-[0_2px_5px_rgba(255,255,255,0.4)] "
						data-aos="fade-zoom-in"
						data-aos-duration="700"
						data-aos-delay-200
					>
						Receive e-mail updates regarding this event by
						submitting the form below.
					</p>

					{
            !signedUp ? <motion.form
						className="w-5/6 mb-10 mt-2 sm:mt-16"
            animate={{opacity: formOpacity}}
            transition={{duration: 0.4}}
						data-aos="fade-zoom-in"
						data-aos-duration="1000"
						data-aos-delay-200
					>
						<div
							className="grid gap-1 grid-cols-2 font-light text-[20px]
            content-evenly items-center justify-center my-2 w-full"
						>
							{/* EMAIL */}
							<div className="col-start-1 col-span-1 w-full flex flex-row justify-center drop-shadow-[0_0px_8px_rgba(220,220,220,0.5)]">
								<input
									type="text"
									className="rounded-sm sm:h-10 h-6 w-full rounded-l-full focus:outline-black
                  placeholder:text-gray-500 pl-[14px] text-black"
									placeholder=" E-mail"
									onChange={(e) =>
										setFormState({
											...formState,
											email: e.target.value,
										})
									}
								/>
							</div>

							{/* TEAM NUMBER */}
							<div className="col-start-2 col-span-1 flex flex-row justify-center">
								<input
									type="text"
									className="rounded-sm  text-black sm:h-10 h-6 w-full rounded-r-full focus:outline-black 
                  drop-shadow-[0_0px_8px_rgba(220,220,220,0.5)]
                  placeholder:text-gray-500 pl-[7px]"
									placeholder=" Team Number"
									onChange={(e) =>
										setFormState({
											...formState,
											teamNumber: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</motion.form>
            :
            (
              <div className="bg-red-500 -skew-x-12 mt-16 mb-[60px] shadow-2xl" animate={{ opacity: (1 - formOpacity)}} transition={{duration: 0.4}}>
                <h4 className="text-white font-rubik skew-x-12 py-4 px-12">Thanks for signing up!</h4>
              </div>
            )
          }
					

					{
						!signedUp && <motion.div
							className="grid grid-cols-10 content-evenly items-center w-5/6"
							data-aos="fade-zoom-in"
							data-aos-duration="1000"
							data-aos-delay-300
              animate={{opacity: formOpacity}}
              transition={{duration: 0.4}}
						>
							<button
								type="submit"
								className="col-start-5 col-span-2 
            text-white bg-black border-red-600 border-2 hover:bg-gray-700 focus:ring-2
            focus:outline-none focus:ring-red-500 rounded-full h-8 drop-shadow-2xl 
              sm:text-xl text-sm w-full sm:w-auto font-light text-center"
								onClick={handleSubmit}
							>
								Sign Up
							</button>
						</motion.div>
					}
				</div>
			</div>
		</section>
	);
};

export default Register;
