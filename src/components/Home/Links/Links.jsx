// import "../index.css";
// import "../gallery.css";
import Card from './Card';

import apparel from "../../../assets/Raster/Gallery/apparel.png"
import awards from "../../../assets/Raster/Gallery/awards.png"
import info from "../../../assets/Raster/Gallery/info.png"
import photography from "../../../assets/Raster/Gallery/photography.png"
import stream from "../../../assets/Raster/Gallery/stream.png"
import volunteer from "../../../assets/Raster/Gallery/volunteer.png"

const Links = () => {
  return (
    <section id="links" className="flex flex-col relative z-5">
      <div className="flex flex-col items-center justify-center my-5 text-white
      font-semibold italic tracking-wide text-[60px] bg-repeat h-[200px] bg-[url('../src/assets/Vector/marquee.svg')] bg-contain w-full">
        QUICK LINKS
        <h1 className="font-light text-2xl lg:visible invisible">(HOVER TO EXPAND)</h1>
        <h1 className="font-light text-4xl lg:invisible visible">(HOLD TO EXPAND)</h1>
      </div>
      <div className='w-full py-5 flex justify-center items-center'>        
        <div className="w-4/5 flex justify-center items-center">
          <Card bgImage={photography} name={"PHOTOGRAPHY"} route={"photography"}/>
          <Card bgImage={awards} name={"AWARDS"} route={"awards"}/>
          <Card bgImage={stream} name={"STREAM"} route={"stream"}/>
          <Card bgImage={apparel} name={"APPAREL"} route={"apparel"}/>
          <Card bgImage={info} name={"INFO"} route={"info"}/>
          <Card bgImage={volunteer} name={"VOLUNTEERS"} route={"volunteers"}/>
        </div>
      </div>
    </section>
  )
}

export default Links