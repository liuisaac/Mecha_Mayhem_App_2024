import React from "react";
import ImageFlipper from "./../components/Info/ImageFlipper";

const Info = () => {

	return (
		<div className="bg-black">
			<ImageFlipper />

			<div className="relative mt-10 ml-12 bg-black">
				<h1 className="text-white text-[88px] leading-[1.2] mt-12 pt-8 font-poppins">
					Canada's{" "}
					<span className="text-black font-bold tracking-wide" style={{WebkitTextStroke: "3px red"}}>LARGEST</span>{" "}
					<br /> Robotics Showdown.
				</h1>
				<h4 className="text-white text-3xl">
					Held in Calgary, Alberta, Canada.
				</h4>
				<div className="flex items-center gap-2 w-fit p-4 mt-4 bg-red-500 -skew-x-12 font-rubik font-bold text-white text-xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="white"
						className="w-6 h-6 skew-x-12"
					>
						{" "}
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
						/>{" "}
					</svg>
					<p className="skew-x-12">FEB 2-4, 2024</p>
					<p className="skew-x-12 font-black">|</p>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 skew-x-12"
					>
						{" "}
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
						/>{" "}
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
						/>{" "}
					</svg>
					<p className="skew-x-12">
						BMO Centre, 20 Roundup Way SE, T2G 2W1{" "}
					</p>
				</div>

				<p className="w-1/2 text-white text-xl mt-8">
					Started in 2023, Mecha Mayhem brings together over{" "}
					<span className="font-rubik font-bold text-red-500">
						160
					</span>{" "}
					High school and Middle school teams from around the world to
					compete at the BMO Centre for{" "}
					<span className="font-rubik font-bold text-red-500">
						three full days
					</span>{" "}
					of breathtaking competition.
					<br /> <br />
					The event is open to{" "}
					<span className="font-rubik font-bold text-red-500">
						ANYONE
					</span>{" "}
					who is interested in robotics! Come on down to watch or
					cheer on the teams, and chat with local tech companies and
					universities! In addition, we will be giving tours on how to
					start your own robotics team at your school or through our
					club!
				</p>

				<div className="mt-16">
					<h4 className="text-red-500 text-4xl font-rubik font-bold ">
						| WHAT IS VEX?
					</h4>
					<p className="text-white text-xl mt-2 w-1/2">
						VEX is an international robotics organization that
						supplies the tools and parts necessary for students to
						create and program robots. It is the largest robotics
						competition in the world, with <span className="font-rubik font-bold text-red-500">more than a million </span>
						students involved spanning 60+ different countries.
						Learn more about VEX and the game this year {" "}
						<a
							href="https://www.westernmech.ca/about-vex"
							target="_blank"
							className="underline"
						>
							here
						</a>
						.
					</p>
				</div>

				<div className="mt-16">
					<h4 className="text-red-500 text-4xl font-rubik font-bold ">
						| WHAT ARE SIGNATURE EVENTS?
					</h4>
					<p className="text-white text-xl mt-2 w-1/2">
						Signature Events give teams the opportunity to play at a
						tournament that is of the <span className="font-rubik font-bold text-red-500">highest caliber</span>. The mission
						of these events is to provide more opportunities for
						teams that do not typically attend Event Regional
						Championships or the World Championship to experience an
						event above and beyond a standard tournament. Signature
						Events also have the added bonus of qualifying teams
						directly to <span className="font-rubik font-bold text-red-500">the VEX Robotics World Championships</span>.

					</p>
				</div>
			</div>
		</div>
	);
};

export default Info;
