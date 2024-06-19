import "../../app/globals.css";
import Ourtemple from "./Ourtemple"
const Pooja = () => {
    return (
        <div>
            <div className="min-h-auto w-auto relative ">
                <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un@2x.png" alt="image1" className="absolute mix-blend-overlay w-full h-full" />
                <div className="p-24 ">
                    <h1 className="text-white text-6xl font-bold ml-10 mt-20 ">Pooja Request</h1>
                    <p className=" text-white text-xl font-sans text-3xl mt-7 ml-10">Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing elit, sed doeiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.Ut enim ad
                    </p>
                </div>
            </div>
            <div className=" container mx-auto ">
                <h3 className="text-lg text-orange-500 font-bold mt-10 ">SERVICES</h3>
                <h1 className="text-6xl text-red-600 font-bold mt-3 ">Pooja Request Form</h1>
                <p className="text-xl font-sans p-3 mt-10">Religious Committee of the Temple Exective Committe will review & confirm the pooja/priest service request. sorry, no confirmation is made over the phone.</p>
                
                <div>
                    <img src="images/Placeholder_view_vector.svg.png " alt="placeholder" className="mt-5 w-auto h-auto py-10 px-36 " />
                </div>
            </div>
            <Ourtemple />
        </div>
    )
}
export default Pooja;