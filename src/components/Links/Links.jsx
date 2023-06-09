import styles from '../../style';
// import "../index.css";
// import "../gallery.css";
import Card from './Card';

import apparel from "../../assets/Raster/Gallery/apparel.png"
import awards from "../../assets/Raster/Gallery/awards.png"
import info from "../../assets/Raster/Gallery/info.png"
import photography from "../../assets/Raster/Gallery/photography.png"
import stream from "../../assets/Raster/Gallery/stream.png"
import volunteer from "../../assets/Raster/Gallery/volunteer.png"

const Links = () => {
  return (
    <section id="links" className="flex flex-col relative z-5">
      <div className="flex flex-row items-center justify-center my-5 text-white font-space_mono font-bold text-[40px]">
        QUICK LINKS
      </div>
      <div className='gallery w-full flex justify-center items-center lg:visible invisible'>        
        <div className="cards w-4/5 flex justify-center items-center">
          <Card bgImage={photography} name={"PHOTOGRAPHY"} />
          <Card bgImage={awards} name={"AWARDS"} />
          <Card bgImage={stream} name={"STREAM"} />
          <Card bgImage={apparel} name={"APPAREL"} />
          <Card bgImage={info} name={"INFO"} />
          <Card bgImage={volunteer} name={"VOLUNTEERS"} />
        </div>
      </div>
    </section>
  )
}

export default Links