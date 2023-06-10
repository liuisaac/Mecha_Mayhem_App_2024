import styles from '../style';
import {play, triballsvg} from '../assets';
import "../index.css";


const Register = () => {
  return (
    <section id="register" className={'flex flex-col ${styles.paddingY} items-center justify-center'}>
      <div className={`flex-1 ${styles.flexStart} bg-primary justify-center items-center 
      flex-col relative font-poppins font-bold mt-8 text-[10px] xxs:text-[12px] sm:text-[25px] lg:text-[30px] xxs:mb-2 mb-10`}>
        <h1 className="text-white mx-auto text-[60px]">
            SIGN UP TO RECEIVE UPDATES
        </h1>
        <p className="text-white font-semibold">
          Receive e-mail updates regarding this event by submitting the form below.
        </p>





        <form className="w-5/6 mb-10">
          <div className="grid gap-1 grid-cols-2 font-light text-[20px]
          content-evenly items-center justify-center my-2 w-full">
            {/* EMAIL */}
            <div className="col-start-1 col-span-1 w-full flex flex-row justify-center drop-shadow-[0_0px_8px_rgba(220,220,220,0.5)]">
              <input type="text" className="rounded-sm h-10 w-full rounded-l-full
              placeholder:text-gray-500 pl-[14px] text-black" placeholder=" E-mail"/><br></br>
            </div>

            {/* TEAM NUMBER */}
            <form className="col-start-2 col-span-1 flex flex-row justify-center">
              <input type="text" className="rounded-sm  text-black h-10 w-full rounded-r-full drop-shadow-[0_0px_8px_rgba(220,220,220,0.5)]
              placeholder:text-gray-500 pl-[7px]" placeholder=" Team Number"/>
            </form>
          </div>

          {/* BUTTON */}
          <div className="grid grid-cols-10 content-evenly items-center">
            <button type="submit" className="col-start-5 col-span-2 
            text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-lg
              xs:text-[20px] text-[8px] w-full sm:w-auto px-5 py-2.5 text-center">
              Submit
            </button>
          </div>
        </form>

        <img src={triballsvg} className="mx-auto"/>

      </div>
    </section>
  )
}

export default Register