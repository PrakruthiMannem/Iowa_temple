import "../../app/globals.css";
import Tabel from "./Tabel";
const Header2 = () => {
    return (
        <div>
            <div className="min-h-auto w-auto relative ">
                <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un@2x.png" alt="image1" className="absolute mix-blend-overlay w-full h-full" />
                <div className="p-24 ">
                    <h1 className="text-white text-6xl font-bold ml-10 mt-20 ">Services</h1>
                    <p className="text-white text-xl font-sans text-3xl mt-7 ml-10">Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing elit, sed doeiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.Ut enim ad
                    </p>
                </div>
            </div>
            <div className="container mx-auto">
                <h4 className="text-1xl text-orange-500 font-bold mt-10 mr-10 ">SERVICES</h4>
                <h3 className="text-6xl text-red-600 font-bold mt-5 ">Learn more about our services</h3>
                <div className="flex">
                    <div className="flex flex-row gap-4 mt-16 gap-x-20 ">
                        <div className="border border-red-600 rounded-xl p-4  ">
                            <h1 className="text-5xl  font-bold mt-10 ">Priest Services</h1>
                            <p className="text-gray-400 text-xl font-sans mt-5">Lorem ipsum dolor sit smet, consetetur sadipscing<br /> sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore mango aliquyam erat, sed diam voluptua<br />
                                Lorem ipsum dolor sit smet, consetetur sadipscing <br /> sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore mango aliquyam erat, sed diam voluptua
                            </p>
                            <p className="text-3xl font-bold mt-8">LEARN MORE</p>

                        </div>

                        <div className="border border-red-600 rounded-xl p-4 ">
                            <h1 className="text-5xl font-bold mt-10 ">Pooja</h1>
                            <p className="text-gray-400 text-xl font-sans mt-5"> Lorem ipsum dolor sit smet, consetetur sadipscing <br /> sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore mango aliquyam erat, sed diam voluptua<br />
                                Lorem ipsum dolor sit smet, consetetur sadipscing <br /> sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore mango aliquyam erat, sed diam voluptua
                            </p>
                            <p className="text-3xl font-bold mt-8 mb-10">LEARN MORE</p>

                        </div>

                    </div>


                </div>
                <div>
                    <p className="text-xl font-sans mt-16">Temple Executive Committee has made avaliable the services listed in the tabulation below. Temple Executive Committee needs 30-days advance notice to process and approve your service. All services are handled on a first-come-first-served basis. Temple's own programs receive priority over requested services. </p>
                </div>
            </div>

            <Tabel />

        </div>
    )
}
export default Header2;