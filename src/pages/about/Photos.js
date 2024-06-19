import "../../app/globals.css";
import Join from "./Join";
const Photos = () => {
    return (
        <div>
            <div className="mt-20 ml-20">
                <h4 className="text-orange-500 font-bold">PHOTOS</h4>
                <h1 classNameName="text-red-600 text-5xl font-bold mt-5">Temple Photos</h1>
                {/* <div class="flex flex-row-1 mt-5">
                    <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un_cu.png" alt="Image8 " />
                    <img src="images/manuel-moreno-DGa0LQ0yDPc-unsp.png" alt="Image9" />
                    <img src="images/rhema-kallianpur-jbJ-_hw2yag-u_ct.png" alt="Image10" />
                    <img src="images/eddi-aguirre-ZAVHbpOn4Jk-unspl_cs.png" alt="Image11" />
                    <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un_cz.png" alt="Image12" />
                    <img src="images/manuel-moreno-DGa0LQ0yDPc-unsp_c.png" alt="Images13" />
                    <img src="images/rhema-kallianpur-jbJ-_hw2yag-u_cy.png" alt="Images14" />
                    <img src="images/n_a8dc252d1044f0f243c8046d4737.png" alt="Images15" />
                    
                </div>   */}

            </div>


            <div id="controls-carousel" className="relative w-full" data-carousel="static">

                <div className="relative h-56 overflow-hidden rounded-lg corousel-shell">
                    <div className="flex flex-row-1 mt-5 duration-700 ease-in-out" data-carousel-item id="move">
                        <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un_cu.png" alt="Image8 " />
                        <img src="images/manuel-moreno-DGa0LQ0yDPc-unsp.png" alt="Image9" />
                        <img src="images/rhema-kallianpur-jbJ-_hw2yag-u_ct.png" alt="Image10" />
                        <img src="images/eddi-aguirre-ZAVHbpOn4Jk-unspl_cs.png" alt="Image11" />
                        <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un_cz.png" alt="Image12" />
                        <img src="images/manuel-moreno-DGa0LQ0yDPc-unsp_c.png" alt="Images13" />
                        <img src="images/rhema-kallianpur-jbJ-_hw2yag-u_cy.png" alt="Images14" />
                        <img src="images/n_a8dc252d1044f0f243c8046d4737.png" alt="Images15" />

                    </div>
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <Join />
        </div>
    )
}
export default Photos;