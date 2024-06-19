import "../../app/globals.css";
import Welcome from "./welcome";
const Header = () => {
    return (
        <div>
            <div className="min-h-screen w-full relative bg-orange-400 bg-opacity-50">
                <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un@2x.png" alt="image1" className="absolute mix-blend-overlay w-full h-full" />
                <div className="p-24 ">
                    <h1 className="text-white text-5xl font-bold ml-10 mt-20 ">Welcome to Hindu Temple<br />Association of Eastern Iowa</h1>
                    <p className="not-italic text-sm text-white  text-3xl mt-7 ml-10">Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing elit, sed doeiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.Ut enim ad
                    </p>
                    <div className="group relative">
                        <button className="px-2 py-1 text-sm bg-yellow-500 bg-opacity-100 text-white font-sans md:px-6 mdpy-3 md:text-xl lg:px-5 lg:py-3 lg:text-xl hover:bg-red-500 mt-7 ml-8 shadow-sm">LEARN MORE</button>
                    </div>
                </div>
            </div>
            <Welcome />
        </div>

    )
}
export default Header;
