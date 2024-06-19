import "../../app/globals.css";
import Youth from "./Youth";
const Our = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="mt-20 ml-20 font-bold w-1/2">
                    <h4 className="text-orange-500">VOLUNTEERS</h4>
                    <h1 className="text-red-600 text-5xl mt-5">Our Volunteers <br /> Achievments</h1>
                    <h2 className="text-black-300 font-bold mt-8">Shri Murli Manohar</h2>
                    <h6 className="text-gray-300 mt-2">Member</h6>
                    <p className="text-black-300 font-bold mt-5">
                        We Hindus believe that the vedas transcend all<br />
                        time and vedas transcend all time don't have a<br />
                        beginning or an end.
                    </p>
                    {/* <div>
                        <i class="fa-regular fa-circle-small"></i>
                    </div> */}
                </div>
                <div className="container mx-auto p-6 mt-9 w-1/2">
                    <div className="overflow-hidden">
                        <img src="images/rhema-kallianpur-jbJ-_hw2yag-u_go.png" alt="Image" className="w-auto h-auto object-cover" />
                    </div>
                </div>
            </div>
            <Youth />
        </div>
    )
}
export default Our;