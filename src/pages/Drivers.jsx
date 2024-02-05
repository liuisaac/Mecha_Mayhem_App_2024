import React, { useLayoutEffect, useState } from "react";
import MovieClip from "../components/MovieClip";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Drivers = () => {
    const [width, height] = useWindowSize();

    return (
        <div
            className={`bg-[#0a0a0a] bg-[url('../src/assets/Vector/tesselatingwrap.svg')] 
            bg-repeat bg-cover w-screen h-screen flex flex-col justify-center items-center`}
        >
            <span className="font-poppins font-bold text-white text-7xl mb-24 scale">
                PRE DRIVERS MEETING
            </span>
            <div style={{'transform' : `scale(${String(Math.min(Math.max(0.5, width/1000), 1.5))})` }}>
                <MovieClip />
            </div>
        </div>
    );
};

export default Drivers;
