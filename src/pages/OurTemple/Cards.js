import "../../app/globals.css";
// import Board from "./Board";
import Past from "./Past"
const Cards = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className=" text-center mt-5 p-4">
                    <h4 className="text-orange-400 font-bold">ABOUT US</h4>
                    <h1 className="text-red-600 text-5xl font-bold mt-2">Welcome to Eastern Iowa Hindu Temple</h1>
                    <p className="text-xl font-sans  mt-8">The Hindu Temple Association of Eastern Iowa was established and incorporated as non-profit corporation under the Iowa non-profit corporation Act, Chapter 504A, 1999. Select the link below to read article of incorporation and by-laws:</p>

                </div>
            </div>
            <div className="container mx-auto ">
                <div class="flex gap-5">
                    <div class=" border border-red-600 rounded-xl w-1/3 p-4">

                        <h1 className="text-4xl  font-semibold mt-10 ">Article of Incorporation</h1>

                        <p className="text-2xl font-semibold mt-8">LEARN MORE</p>

                    </div>
                    <div className=" border border-red-600 rounded-xl w-1/3 p-4">

                        <h1 className="text-4xl  font-semibold mt-10 mb-16">By - Laws</h1>

                        <p className="text-2xl font-semibold mt-8">LEARN MORE</p>

                    </div>
                    <div className=" border border-red-600 rounded-xl w-1/3 p-4">

                        <h1 className="text-4xl font-semibold mt-10 ">Board Of Trustees</h1>

                        <p className="text-2xl font-semibold mt-16">LEARN MORE</p>

                    </div>
                </div>


            </div >
            <div className="container mx-auto text-center">
                <p className="text-xl font-sans  mt-16">The functioning of the Temple shall be in accordance with the listed Articles of Incorporation and By-laws. The Board of Trustees set the vision and create an endowment of a substantial amount to support the mission of the temple. Select the Board of Trustees or the Current Executive Committee links to see current list of members</p>
                <p className="text-xl font-sans  mt-8">The founding executive committee members were elected to exected to executive office on January 16, 2000. The executive committee runs day to day operations of temple and strives to achieve the vision set by Board of Trustees for the temple. Follow the link below to see current and past executive committee members along with editors of Pranava and web masters for Temple Website.</p>
            </div>
            <div className=" container mx-auto mt-16">
                <div className="flex gap-5">
                    <div className=" border border-red-600 rounded-xl w-1/3 p-3">

                        <h1 className="text-5xl  font-semibold mt-10 ">Current Executive Committee</h1>
                        <p className="text-2xl font-semibold mt-8">LEARN MORE</p>

                    </div>
                    <div className=" border border-red-600 rounded-xl w-1/3 p-3">

                        <h1 className="text-5xl  font-semibold mt-10 mb-20">Past Executive Committees</h1>
                        <p className="text-2xl font-semibold mt-8">LEARN MORE</p>

                    </div>
                    <div className=" border border-red-600 rounded-xl w-1/3 p-3">

                        <h1 className="text-5xl font-semibold mt-10 ">Guidelines For Temple Facility Use</h1>
                        <p className="text-2xl font-semibold mt-8 mb-10">LEARN MORE</p>

                    </div>
                </div>

            </div>
            <div className="container mx-auto text-center">
                <p className="text-xl font-sans  mt-16">The executive committee members have created following guidelines for Temple facility use by general body and consuming public interested in using the facility for social, religious,eductional or fund raising purposes and these guidelines must be followed at all times without fail. Failure to follw these guidelines would result in banning the person(s) or group(s) from using the facility for a period of one year or more at the discretion of the executive committee.</p>
            </div>
            {/* <Board /> */}
            <Past />

        </div >
    )
}
export default ard;
