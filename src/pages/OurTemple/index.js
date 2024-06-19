import "../../app/globals.css";
import Box from "./Box";
const Eastern = () => {
    return (
        <div>
            <div className="min-h-auto w-auto relative ">
                <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un@2x.png" alt="image1" className="absolute mix-blend-overlay w-full h-full" />
                <div className="p-24 ">
                    <h1 className="text-white text-6xl font-bold ml-10 mt-20 ">About Us</h1>
                    <p className="text-sm text-white font-sans  mt-7 ml-10">Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing elit, sed doeiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.Ut enim ad
                    </p>
                </div>
            </div>
            <Box />
        </div>
    )
}
export default Eastern;