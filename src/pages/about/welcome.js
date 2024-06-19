
import "../../app/globals.css";
import Cards from "./Cards"
const Welcome = () => {
    return (
        <div>
            <div class="container mx-auto p-6">
                <div class="flex flex-wrap md:flex-nowrap">
                    <div class="w-full md:w-1/2 p-4">
                        <h4 className="text-sm text-yellow-400 font-bold mt-5 ml-8">ABOUT US</h4>
                        <h1 className="text-4xl text-red-500 font-bold mt-5 ml-8">Welcome to Eastern<br /> Iowa Hindu Temple </h1>
                        <p className="text-lg text-black-200 font-bold leading-relaxed mt-5 ml-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                            elit, sed eiusmod tempor incididunt ut labore et<br />
                            dolore magno aliiqua. Ut enim ad minim veniam,quis
                        </p>
                        <p className="text-lg mt-5 ml-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do<br />
                            eiusmod tempor incididunt ut labore et dolore magno aliiqua.<br />
                            Ut enim ad minim veniam,quis nostrud exercitation ullamco<br />
                            laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                        <div className="group relative">
                            <button className="px-2 py-1 text-sm bg-yellow-500 bg-opacity-100 text-white font-sans md:px-6 mdpy-3 md:text-xl lg:px-5 lg:py-3 lg:text-xl hover:bg-red-500 mt-7 ml-8 shadow-xl">READ MORE</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex flex-wrap">
                        <div className="w-1/2 p-2">
                            <img src="images/rhema-kallianpur-jbJ-_hw2yag-u.png" alt="Image2" className="w-full h-auto" />
                        </div>
                        <div className="w-1/2 p-2">
                            <img src="images/chelsea-gates-0653_wY0nRc-unsp.png" alt="Image3" className="w-full h-auto" />
                        </div>
                        <div className="w-1/8 p-2">
                            <img src="images/eddi-aguirre-ZAVHbpOn4Jk-unspl@2x.png" alt="Image4" className="w-auto h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <Cards />
        </div>

    )
}
export default Welcome;
