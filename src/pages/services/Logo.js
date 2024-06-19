import "../../app/globals.css";
const Logo = () => {
    return (
        <div>
            <div class="container mx-auto px-7 mt-10 ">
                <div class="grid grid-cols-4 gap-16  justify-between ">
                    <div class="text-center ">
                        <div class="flex items-center justify-center bg-gray-900 rounded-full w-14 h-14 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white mail-icons">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div>
                           <h2 className="text-lg font-bold mt-4" >Email</h2> 
                           <p className="text-xl text-gray-400 font-sans mt-3">priest@iowahindutemple.org</p>
                        </div>
                    </div>
                    <div class="text-center ">
                        <div class="flex items-center justify-center bg-gray-900 rounded-full w-14 h-14 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div className="text-lg font-bold">
                            <h1 className="text-lg font-bold mt-4">Phone</h1>
                            <p className="text-lg text-gray-400 font-sans mt-3">319-396-3196 (Temple)</p>
                        </div>
                    </div>
                    <div class="text-center ">
                        <div class="flex items-center justify-center bg-gray-900 rounded-full w-14 h-14 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6  text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                        </div>
                        <div className="text-lg font-bold">
                            <h1 className="text-lg font-bold mt-4">Mobile</h1>
                            <p className="text-lg text-gray-400 font-sans mt-3">319-775-1552</p>
                            </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Logo;