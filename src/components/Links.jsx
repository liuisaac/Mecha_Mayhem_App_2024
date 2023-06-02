import styles from '../style';
import "../index.css";
import "../gallery.css";

const Links = () => {
  return (
    <section id="links" className={'flex flex-col relative z-5'}>
      <div className="flex flex-row items-center justify-center my-5 text-white font-bold text-[40px]">
        QUICK LINKS
      </div>
      <div className='gallery lg:visible invisible'>        
        <div className="cards">
          <div className="card">
            <h3>
              PHOTOGRAPHY
            </h3>
          </div>

          <div className="card">
            <h3>
              AWARDS
            </h3>
          </div>

          <div className="card">
            <h3>
              STREAM
            </h3>
          </div>

          <div className="card">
            <h3>
              APPAREL
            </h3>
          </div>


          <div className="card">
            <h3>
              INFO
            </h3>
          </div>


          <div className="card">
            <h3>
              VOLUNTEERS
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Links