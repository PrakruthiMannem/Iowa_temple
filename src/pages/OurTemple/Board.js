import "../../app/globals.css";

// import Trustes from "./Trustes";
const  Board= () => {
    return (
        <div>
            <div className="container mx-auto">
                <div class="flex items-center justify-center mt-10 gap-8">
                    <div class="w-1/2 px-4">
                        <h1 className="text-5xl font-bold text-red-600">Chairman</h1>
                        <h4 className="text-lg font-bold mt-3">Sundar Munagala</h4>
                        <p class="text-xl font-sans mt-8">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br />
                            diam ninumy eirmod tempor invidunt ut labore et ddolore<br />
                            magna aliquyam erat, sed diam voluptua. At vero eos et<br />
                            accusam et justo duo dolores et ea rebum. Stet clita kased<br />
                            gubergren, no sea takimata sanctus est lorem ipsum dolor sit<br />
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </p>
                    </div>
                    <div class="w-1/2 mt-10">
                        <img src="images/vicky-sim-mj51pZwan9c-unsplash.png" alt="side Image" class="w-screen h-auto" />
                    </div>
                </div>
                <div class="flex items-center justify-center mt-10 gap-8">
                    <div class="w-1/2 mt-10">
                        <img src="images/vicky-sim-mj51pZwan9c-unsplash.png" alt="side Image" class="w-screen h-auto" />
                    </div>
                    <div class="w-1/2 px-4">
                        <h1 className="text-5xl font-bold text-red-600">Vice Chairman</h1>
                        <h4 className="text-lg font-bold mt-3">Subramaniyan(Subu) Nagarajan</h4>
                        <p class="text-xl font-sans mt-8">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br />
                            diam ninumy eirmod tempor invidunt ut labore et ddolore<br />
                            magna aliquyam erat, sed diam voluptua. At vero eos et<br />
                            accusam et justo duo dolores et ea rebum. Stet clita kased<br />
                            gubergren, no sea takimata sanctus est lorem ipsum dolor sit<br />
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </p>
                    </div>

                </div>
            </div>
            {/* <Trustes /> */}
           
        </div>
    )
}
export default Board;