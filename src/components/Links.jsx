import styles from '../style';
import "../index.css";
import "../gallery.css";

const Links = () => {
  return (
    <section id="links" className={'flex flex-col relative z-5'}>
      <div className="flex flex-row items-center justify-center my-5 text-white font-bold text-[20px]">
        QUICK LINKS
      </div>
      <div className='gallery'>        
        <div className="cards">
          <div className="card">
            <h3>
              Photography
            </h3>
          </div>

          <div className="card">
            <h3>
              Hello
            </h3>
          </div>

          <div className="card">
            <h3>
              Hello
            </h3>
          </div>

          <div className="card">
            <h3>
              Hello
            </h3>
          </div>


          <div className="card">
            <h3>
              Hello
            </h3>
          </div>


          <div className="card">
            <h3>
              Hello
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Links