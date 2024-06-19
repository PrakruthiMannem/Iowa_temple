import "../../app/globals.css";
const Imgcard = () => {
    return (
        <div className="container">
            <div class="relativ mt-20 max-h-auto w-auto  mx-auto relative px-10 mx-10 ">
    <img class="h-64 w-full object-cover rounded-md w-screen h-screen" src="images/vicky-sim-mj51pZwan9c-unsplash.png" alt="Random image" />
    <div class="absolute inset-0 bg-orange-700 opacity-80 rounded-md image-overlay">
    <div class="absolute inset-0 flex grid-cols-2 items-center justify-center">
    <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-11 text-white-500 events-map obsolute">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg></span><span className="text-white font-bold  mb-5 mb-10 ">15th July(9:30 AM - 8:00 PM)</span>
                                
                    <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-11 text-white-500 events-map obsolute ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg></span>
                                <span className="text-white font-bold ml-7 mb-5">56 Thatacher Avenue River Forest
                    </span>
        {/* <h2 class="text-white text-3xl font-bold">Get Lost in Mountains</h2> */}
    </div>
    </div>
</div>
            <div className="max-h-auto w-auto  mx-auto relative px-10 mx-10  mt-10">
            <img src="images/vicky-sim-mj51pZwan9c-unsplash.png" alt="Image" className="obsolute mix-blend-overlay w-screen h-screen "/>
            <div className=" absolute  grid grid-cols-2  mt-60 ml-30 w-screen  ribbon-area">
                    <div className=" text-center">
                    <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-11 text-white-500 events-map obsolute">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg></span><span className="text-white font-bold  mb-5 mb-10 ">15th July(9:30 AM - 8:00 PM)</span>
                                </div>
                    <div>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-11 text-white-500 events-map obsolute ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg></span>
                                <span className="text-white font-bold ml-7 mb-5">56 Thatacher Avenue River Forest
                    </span></div>
                </div>
                </div>
            <div className="  grid grid-cols-2 gap-2" >
                 <div className="  w-1/2  ">
                 <h5><span className="font-bold text-md">DATE</span><span className="text-gray-400"> 15th July</span></h5>
                 <h5><span className="font-bold text-md">EVENT CATEGORY</span><span className="text-gray-400"> Summwer Retreat</span></h5>
                 <h5><span className="font-bold text-md">ORGANIZER</span><span className="text-gray-400"> Lorem ipsum </span></h5>
                </div>
             <div className="   ">
                 <h5><span className="font-bold text-md">PHONE</span><span className="text-gray-400"> Lorem ipsum</span></h5>
                 <h5><span className="font-bold text-md">EMAIL</span><span className="text-gray-400"> Lorem ipsum </span></h5>
                 <h5><span className="font-bold text-md">COST</span><span className="text-gray-400"> $30 </span></h5>
             </div>
         </div>   
        </div>
    )
}
export default Imgcard;