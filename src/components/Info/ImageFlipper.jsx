import React, { useEffect, useState } from "react";
import lowResImages from "../../assets/Vector/Info/ImageFlipper/low-res/index";
import useInterval from "../../hooks/useInterval";


const ImageFlipper = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [numRotationsLeft, setNumRotationsLeft] = useState(12); // Used for both rotations until stop AND start
	const [isFlipping, setIsFlipping] = useState(false);

	const imageFlashDelay = 100;
	const imageStayRotations = 75;

	useInterval(() => {
		if(numRotationsLeft > 0 && isFlipping){
			setCurrentImage(Math.floor(Math.random() * lowResImages.length));
			setNumRotationsLeft(num => num - 1);
		} else if(numRotationsLeft > 0 && !isFlipping) {
			setNumRotationsLeft(num => num - 1);
		} else {
			setNumRotationsLeft(isFlipping ? imageStayRotations : 4);
			setIsFlipping(f => !f);
		}

		console.log(numRotationsLeft);
		console.log(isFlipping);

	}, imageFlashDelay);

	return (
		<div className="text-white overflow-x-clip z-20 relative">
			<svg className="absolute h-[125vh] -top-[10vh] -right-[5vw] overflow-x-hidden" width="578" height="844" viewBox="0 0 578 844" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
				<g clip-path="url(#clip0_30_67)">
					<path d="M395.027 714.548L394.511 716.648L392.356 716.823L50.5013 744.546L46.3869 744.88L47.3399 740.864L248.848 -108.438L249.604 -111.623L252.711 -110.593L569.052 -5.70618L571.682 -4.83418L571.021 -2.1432L395.027 714.548Z" fill="#D9D9D9" stroke="#FF0000" stroke-width="6"/>
					<mask id="mask0_30_67" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="45" y="-113" width="528" height="859">
						<path d="M394.056 714.309L393.712 715.709L392.275 715.826L50.4205 743.55L47.6775 743.772L48.3128 741.094L249.821 -108.207L250.325 -110.33L252.397 -109.643L568.737 -4.75702L570.491 -4.17567L570.05 -2.38168L394.056 714.309Z" fill="#D9D9D9" stroke="#FF0000" stroke-width="4"/>
					</mask>
					<g mask="url(#mask0_30_67)">
						<rect x="-8" y="-1" width="595" height="770" fill="url(#pattern0)"/>
					</g>
					<path d="M16.8999 649.078L181.591 -38.2294L201.211 -33.528L25.6205 699.268L16.8999 649.078Z" fill="#FF0000"/>
					<path d="M408.327 761.575L577.709 54.6871L635 68.4149L454.407 822.088L408.327 761.575Z" fill="#FF0000"/>
				</g>
				<defs>
					<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
						<use href="#image0_30_67" transform="matrix(0.000473862 0 0 0.000366166 -0.47047 0)"/>
					</pattern>
					<clipPath id="clip0_30_67">
						<rect width="578" height="844" fill="white"/>
					</clipPath>
					<image id="image0_30_67" width="4096" height="2731" href={lowResImages[currentImage]}/>
				</defs>
			</svg>



		</div>
	);
};

export default ImageFlipper;
