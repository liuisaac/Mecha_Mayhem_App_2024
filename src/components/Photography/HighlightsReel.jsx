import React, { useState } from "react";
import images from "../../assets/Raster/Highlights";
import { motion, useMotionValue } from "framer-motion";
import useInterval from './../../hooks/useInterval';

const HighlightsReel = () => {

	const [currentImage, setCurrentImage] = useState(0);
	const [opacity, setOpacity] = useState(1);

	const interval = useInterval(() => {
		setOpacity(0);
		setTimeout(() => {
			setCurrentImage(c => (c + 1 > images.length) ? 0 : c + 1);
			setOpacity(1);
		}, 500);
	}, 5000);

	return (
		<div className="">
			<svg
				width="758"
				viewBox="0 0 1049 994"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				xlink="http://www.w3.org/1999/xlink"
				className="h-screen -ml-4"
			>
				<g filter="url(#filter0_d_47_78)">
					<path d="M0 46H1049L921.096 994H0V46Z" fill="#FF0000" />
				</g>
				<mask
					id="mask0_47_78"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="26"
					width="1009"
					height="1200"
				>
					<path d="M0 26H1009L885.974 1015H0V26Z" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_47_78)">
					<rect
						x="0.5"
						y="24.5"
						width="1057"
						height="990"
						fill="url(#pattern0)"
						stroke="#FF0000"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_47_78"
						x="-2"
						y="0"
						width="1109"
						height="1048"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood
							floodOpacity="0"
							result="BackgroundImageFix"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="8" dy="4" />
						<feGaussianBlur stdDeviation="25" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_47_78"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_47_78"
							result="shape"
						/>
					</filter>
					<pattern
						id="pattern0"
						patternContentUnits="objectBoundingBox"
						width="1"
						height="1"
					>
						<use
							href="#image0_47_78"
							transform="matrix(0.000725311 0 0 0.000782273 -0.485437 -0.000393181)"
						/>
					</pattern>

                    {/* The actual code part of it */}
					<div className="bg-white w-full h-full">
						<motion.image className="z-10 scale-110" animate={{opacity}} transition={{ duration: 0.5 }} id="image0_47_78" width="2048" height="1365" href={images[currentImage]} />
					</div>
				</defs>
			</svg>
		</div>
	);
};

export default HighlightsReel;
