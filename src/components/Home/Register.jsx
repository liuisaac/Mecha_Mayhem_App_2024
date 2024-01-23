import styles from "../../style";
import { tower, register_mb } from "../../assets";
import { useEffect, useState } from "react";
import "../../index.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";

import { motion } from "framer-motion";
import axios from "axios";

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

	useEffect(() => {
		// console.log()
		setSignedUp(localStorage.getItem("mechaMayhemHasSignedUp") ? true : false);
	}, [])
  


	const handleSubmit = () => {

		// Lambda Endpoint, subsequent realtime firebase db
		axios({
			method: 'put',
			url: 'https://eckvih8uab.execute-api.ca-central-1.amazonaws.com/v1',
			data: {
				"action": "sub",
				"param": {
					"email": formState.email,
					"vex_team": formState.teamNumber
				}
			}
		})
		.then(() => {
			// Push data to firebase as well
			push(ref(db), {
				timestamp: Date().toString(),
				...formState,
			});

			setFormOpacity(0);
			setTimeout(() => setSignedUp(true), 400);
			localStorage.setItem("mechaMayhemHasSignedUp", true);
		})
		.catch(err => {
			alert("Looks like there was an error with the form. Please try again later!");
		});
	};

	return (
		<section
			id="register"
			className={
				"flex flex-col ${styles.paddingY} items-center justify-center"
			}
		>
			<div
				className={`flex-1 ${styles.flexStart} bg-black justify-center items-center 
      flex-col relative font-poppins mt-8 text-3xl xxs:mb-2 mb-10 w-full border-b-8 border-[#161616]`}>
				<div className="overflow-hidden sm:border-0 border-2 rounded-xl border-gray-500/50 sm:backdrop-blur-[0px] backdrop-blur-[10px] mx-4">
					<img
						src={tower}
						className="sm:block hidden"
					/>
          			<img src={register_mb} className="w-[60vh] mx-auto mt-12 sm:hidden visible"/>
				</div>
				<div
					className={
						"flex flex-col items-center justify-center absolute sm:mt-10 xxs:mt-6 se:mt-8 mt-6" 
					}
				>
					<h1
						className="text-white font-semibold mx-auto drop-shadow-[0_2px_5px_rgba(255,255,255,0.4)]  
          xl:text-6xl lg:text-5xl sm:text-4xl text-3xl text-center"
					>
						SIGN UP <span className="sm:block hidden">TO RECIEVE UPDATES</span>
					</h1>
					<span className="text-white font-semibold mx-auto drop-shadow-[0_2px_5px_rgba(255,255,255,0.4)] sm:text-7xl xxs:text-3xl text-2xl sm:hidden flex">TO RECIEVE UPDATES</span>
					<p
						className="text-white sm:mt-8 mx-10 font-light
          xl:text-3xl md:text-2xl sm:text-lg text-sm md:block hidden drop-shadow-[0_2px_5px_rgba(255,255,255,0.4)] "
					>
						Receive e-mail updates regarding this event by
						submitting the form below.
					</p>
					
					{/* DESKTOP */}
					{
            !signedUp ? <motion.form
						className="w-5/6 mb-10 mt-10 sm:mt-2"
            animate={{opacity: formOpacity}}
            transition={{duration: 0.4}}
					>
						<div
							className="grid sm:gap-1 gap-5 sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 font-light text-[20px]
            content-evenly items-center justify-center my-2 w-full"
						>
							{/* EMAIL */}
							<div className="sm:col-start-1 col-span-1 row-start-1 w-full flex flex-row justify-center drop-shadow-[0_0px_8px_rgba(220,220,220,0.5)]">
								<input
									type="text"
									className="rounded-sm sm:h-10 h-6 w-full sm:rounded-l-full focus:outline-black
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-black bg-opacity-70 border-2 border-gray-800"
									placeholder=" E-mail Address"
									onChange={(e) =>
										setFormState({
											...formState,
											email: e.target.value,
										})
									}
								/>
							</div>

							{/* TEAM NUMBER */}
							<div className="sm:col-start-2 col-span-1 sm:row-start-1 row-start-2 flex flex-row justify-center">
								<input
									type="text"
									className="rounded-sm  text-white sm:h-10 h-6 w-full sm:rounded-r-full focus:outline-black 
                  drop-shadow-[0_0px_8px_rgba(220,220,220,0.5)]
                  placeholder:text-gray-500 pl-[7px] bg-black bg-opacity-70 border-2 border-gray-800"
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
              <div className="bg-red-500 -skew-x-12 mt-16 mb-260px] shadow-2xl" animate={{ opacity: (1 - formOpacity)}} transition={{duration: 0.4}}>
                <h4 className="text-white font-rubik skew-x-12 py-4 px-12">Thanks for signing up!</h4>
              </div>
            )
          }
					

					{
						!signedUp && <motion.div
							className="grid grid-cols-10 content-evenly items-center w-5/6"
              animate={{opacity: formOpacity}}
              transition={{duration: 0.4}}
						>
							<button
								type="submit"
								className="sm:col-start-5 sm:col-span-2 col-start-1 col-span-10  
            text-white bg-black bg-opacity-40 border-red-600 border-2 hover:bg-gray-700 focus:ring-2
            focus:outline-none focus:ring-red-500 sm:rounded-full h-8 drop-shadow-2xl 
              sm:text-xl text-sm w-full sm:w-auto font-light text-center sm:-mt-12"
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
