import "../../app/globals.css";
import Footer from "./Footer";
const Join = () => {
    return (
        <div>
            <div className="flex flex-row bg-red-700 py-11 text-center">
                <div className="container mx-auto lg:flex-row justify-between items-center">
                    <div className="mb-4  lg:mb-0 text-center">
                        <img className="footer-logo" src="images/iowalogo.png" alt="Logo"  />
                    </div>
                    <div className="mt-4 lg:mb-0">
                        <h1 className="text-white text-4xl font-bold">Join the Temple mailing</h1>
                        <p className=" mt-4 text-white text-2xl font-bold">Get updates on upcoming events,Hindu holidays and special occastion</p>
                    </div>
                    <form>
                        <div className="mb-4 mx-auto max-w-md rounded mt-5">
                            <label className="mb-2 block text-sm font-bold text-gray-700" for="Email">  </label>
                            <input className="focus:shadow-outline w-full appearance-none rounded-full border px-9 py-5 leading-tight text-gray-700 shadow focus:outline-none" id="password" type="password" placeholder="Email" />
                        </div>
                    </form>
                    <div className=" flex justify-center items-center">
                        <button className="focus:shadow-outline rounded-full bg-yellow-500 px-8 py-3 font-bold text-white hover:bg-red-500 focus:outline-none shadow-xl">SUBSCRIBS</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Join;