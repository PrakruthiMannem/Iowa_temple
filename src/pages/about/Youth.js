import "../../app/globals.css";
import Daily from "./Daily";
const Youth = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="mt-20 ml-20 w-1/2">
                    <h4 className="text-orange-500 font-bold">YOUTH EDUCATION SCHOOL</h4>
                    <h1 className="text-red-600 text-5xl font-bold mt-5">VDYALAYA-</h1>
                    <h2 className="text-red-600 text-4xl font-bold mt-8">Youth Education School</h2>
                    <p className="text-black-300 font-bold mt-5">
                        An important aspect of Hinduism is to educate our<br />
                        Youth about our culture and religion. The Hindu temple<br />
                        of Eastern Iowa achieves this through our unique<br />
                        program, Vidyalaya. The focus of this program is to<br />
                        help our youth understand our rich Hindu culture,our<br />
                        scriptures,rituals and Dharma. This program aids an<br />
                        individual to become a better person and advance in<br />
                        their spiritual Saadana. Parents are welcome to join<br />
                        along and benefit from this program. We have three<br />
                        levels in our programs and curriculum is designed<br />
                        appropriate to the group.
                    </p>
                    <div className="group relative">
                        <button className="px-2 py-1 text-sm bg-yellow-500 bg-opacity-100 text-white font-sans md:px-6 mdpy-3 md:text-xl lg:px-5 lg:py-3 lg:text-xl  hover:bg-red-500 mt-5 ml-1 shadow-xl">READ MORE</button>
                    </div>
                </div>
                <div className="container mx-auto p-6 mt-9 w-1/2 mt-15">
                    <div className="overflow-hidden">
                        <img src="images/rhema-kallianpur-jbJ-_hw2yag-u_i.png" alt="Image1" className="w-auto h-auto object-cover" />
                    </div>
                </div>
            </div>
            <Daily />
        </div>
    )
}
export default Youth;