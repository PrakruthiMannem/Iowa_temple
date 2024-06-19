import "../../app/globals.css";
import Brahma from "./Brahma";
const Card1 = () => {
    return (
        <div>
            <div className="container mx-auto  ">
                <div className="w-full md:w-1/2 p-4">
                    <h4 className="text-2xl text-yellow-400 font-bold mt-5 ml-15">Events</h4>
                    <h1 className="text-6xl text-red-600 font-bold mt-2 ml-15">Upcoming Events</h1>
                </div>
                <div className="bg-white rounded-lg shadow-xl w-auto">
                    <div className="flex justify-center mx-auto max-w-auto  gap-10">

                        <div className="w-1/2 p-5">
                            <h2 className="text-5xl font-bold mt-6 text-red-600">09 JUNE</h2>
                            <h1 className="text-4xl font-bold mt-6 ">Summer Retreat</h1>
                            <h5 className="mt-8"><span className="font-bold text-lg "> Time </span> <span className="text-gray-400"> 9:30 AM - 8:00 PM </span> <span className=" font-bold text-lg"> Cost </span> <span className="text-gray-400"> $30 </span> </h5>
                            <p className="text-gray-400 font-sans text-lg mt-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
                                nonumy eirmod tempor invidunt ut labore et dolore magna <br />
                                aliquyam erat, sed diam voluptua. At vero eos et accusam <br />
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                            <div className="group relative">
                                <button className="px-2 py-1 text-sm bg-yellow-500 bg-opacity-100 text-white font-sans md:px-6 mdpy-3 md:text-xl lg:px-5 lg:py-3 lg:text-xl hover:bg-red-500 mt-7 ml-8 shadow-xl">READ MORE</button>
                            </div>
                        </div>

                        <div className="w-1/2 p-3">
                            <img src="images/vicky-sim-mj51pZwan9c-unsplash.png" alt="Image" className="w-screen h-auto  " />
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg shadow-xl w-auto mt-10 ">
                    <div className="flex justify-center mx-auto max-w-auto  gap-10">

                        <div className="w-1/2 p-5">
                            <h2 className="text-5xl font-bold mt-6 text-red-600">15 JUNE</h2>
                            <h1 className="text-4xl font-bold mt-6 ">Summer Retreat</h1>
                            <h5 className="mt-8"><span className="font-bold text-lg "> Time </span> <span className="text-gray-400"> 9:30 AM - 8:00 PM </span> <span className=" font-bold text-lg"> Cost </span> <span className="text-gray-400"> $30 </span> </h5>
                            <p className="text-gray-400 font-sans text-lg mt-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
                                nonumy eirmod tempor invidunt ut labore et dolore magna <br />
                                aliquyam erat, sed diam voluptua. At vero eos et accusam <br />
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                            <div className="group relative">
                                <button className="px-2 py-1 text-sm bg-yellow-500 bg-opacity-100 text-white font-sans md:px-6 mdpy-3 md:text-xl lg:px-5 lg:py-3 lg:text-xl hover:bg-red-500 mt-7 ml-8 shadow-xl">READ MORE</button>
                            </div>
                        </div>

                        <div className="w-1/2 p-3">
                            <img src="images/vicky-sim-mj51pZwan9c-unsplash_dg.png" alt="Image" className="w-screen h-auto  " />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl w-auto mt-10">
                    <div className="flex justify-center mx-auto max-w-auto  gap-10">

                        <div className="w-1/2 p-5 ">
                            <h2 className="text-5xl font-bold mt-6 text-red-600">25 JULY</h2>
                            <h1 className="text-4xl font-bold mt-6 ">Vesak Ceremony</h1>
                            <h5 className="mt-8"><span className="font-bold text-lg "> Time </span> <span className="text-gray-400"> 9:30 AM - 8:00 PM </span> <span className=" font-bold text-lg"> Cost </span> <span className="text-gray-400"> $30 </span> </h5>
                            <p className="text-gray-400 font-sans text-lg mt-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
                                nonumy eirmod tempor invidunt ut labore et dolore magna <br />
                                aliquyam erat, sed diam voluptua. At vero eos et accusam <br />
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                            <div className="group relative">
                                <button className="px-2 py-1 text-sm bg-yellow-500 bg-opacity-100 text-white font-sans md:px-6 mdpy-3 md:text-xl lg:px-5 lg:py-3 lg:text-xl hover:bg-red-500 mt-7 ml-8 shadow-xl">READ MORE</button>
                            </div>
                        </div>

                        <div className="w-1/2 ">
                            <img src="images/vicky-sim-mj51pZwan9c-unsplash_dq.png" alt="Image" className="w-screen h-auto  " />
                        </div>
                    </div>
                </div>

            </div >
            <Brahma />
        </div>
    )
}
export default Card1;