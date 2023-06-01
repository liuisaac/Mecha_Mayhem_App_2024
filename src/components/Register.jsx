import styles from '../style';
import "../index.css";


const Register = () => {
  return (
    <section id="register" className={'flex flex-col ${styles.paddingY}'}>
      <div className={`flex-1 ${styles.flexStart} bg-primary justify-center flex-col relative font-poppins font-bold mt-8 text-[10px] xxs:text-[12px] sm:text-[25px] lg:text-[30px] mb-10`}>
        <h1 className="text-white mx-auto">
            REGISTER INTEREST AND SIGNUP TO RECEIVE UPDATES
        </h1>

        <form className="w-full mb-10">
          <div className="grid gap-1 md:grid-cols-4 grid-cols-2 content-evenly items-center text-red-500 my-2 mx-5">
            {/* EMAIL */}
            <div className="col-span-2 w-full flex flex-row justify-center">
              <label>E-MAIL:</label>
              <input type="text" className="ml-10 focus:border-blue-500 rounded-sm mb-4  text-black" placeholder="your_email@gmail.com"/><br></br>
            </div>

            {/* TEAM NUMBER */}
            <div className="col-span-2 w-full flex flex-row justify-center">
              <label className="mr-10">TEAM NUMBER:</label>
              <input type="text" className="rounded-sm mb-4  text-black" placeholder="#######"/>
            </div>
          </div>

          {/* BUTTON */}
          <div className="grid grid-cols-4 content-evenly items-center">
            <button type="submit" className="col-start-2 col-span-2 text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-200 font-md rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Submit
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Register