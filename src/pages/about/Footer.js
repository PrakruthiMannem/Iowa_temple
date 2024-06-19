import "../../app/globals.css";
import Copy from "./Copy";
const Footer = () => {
    return (
        <div>
            <footer class="bg-gray-800 py-6 text-gray-300">
                <div class="container flex mx-auto grid grid-cols-6 gap-4">
                    <div class="w-full px-4 col-span-2 col-end-3">
                        <img src="images/iowalogo.png" alt="Logo" className=" mt-10" />
                        <p className="text-md ml-3 mt-3">
                            Lorem ipsum dolor sit amet,<br />
                            consetetur sadipscing elitr,sed<br />
                            diam nonumy eirmod tempor<br />
                            invidunt ut labore et dolore magna.
                        </p>
                        <a href="#"><i class='bx bxl-facebook'></i></a>
                    </div>
                    <div class="grid grid-cols-4 col-span-4">
                        <div class="w-full  col-span-1">
                            <h2 className="text-lg font-bold  mt-10">Useful links</h2>
                            <p className="text-md mt-8 text-yellow-500 mt-2">Pooja Request</p>
                            <p className="text-yellow-500 mt-2">News Letter Signup</p>
                            <p className="text-yellow-500 mt-2">Volunteer Signup</p>
                            <p className="text-yellow-500 mt-2">Land Donation</p>
                        </div>
                        <div class="w-full px-4 col-span-1 ">
                            <h2 className="text-lg font-bold  mt-10">Privacy</h2>
                            <p className="text-md mt-8 text-yellow-500 mt-2">Donation</p>
                            <p className="text-yellow-500 mt-2">About Us</p>
                            <p className="text-yellow-500 mt-2">Contact Us</p>
                            <p className="text-yellow-500 mt-2">Services</p>

                        </div>
                        <div class="w-full px-4 col-span-1">
                            <h2 className="text-lg font-bold mt-10">Contact Info</h2>
                            <p className="grid svg-icons mt-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-yellow-500 pr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>


                                <span class=""> econtact@iowahindutemple.org</span>
                            </p>

                            <p className="grid svg-icons mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-yellow-500 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>


                                <span class="pb-2"> +1-(319)-396-3196 </span>
                            </p>
                            <p className="grid svg-icons mt-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-11 text-yellow-500 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>


                                <span class="pt-1">1700 Naoma Dr SW,Cedar Rapids,IA 52404</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <Copy />
        </div>



    )
}
export default Footer;