
import "../../app/globals.css";
import Header from "./Header";
// import welcome from "./welcome";

const about = () => {
  return (
    <div>
    <nav className=" bg-red-500 py-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/images/iowalogo.png" alt="logo" />
          </div>
          <div className="hidden md:block flex-shrink-0 ">
            <ul className="ml-4 flex space-x-4 gap-3">
              <li><a href="#" className="text-white text-lg">HOME</a></li>

              <li className="group relative" >
                <a href="#" className="text-white text-lg">EVENTS

                </a>

                <ul className="absolute hidden group-hover:block bg-red-500 text-white py-1 mt-2 rounded-md shadow-lg">
                  <li><a href="#" className="block px-4 py-2 ">ALL EVENTS</a></li>
                  <li><a href="#" className="block px-4 py-2 ">BRAHMOTSAVAM</a></li>
                  <li><a href="#" className="block px-4 py-2 ">CALENDER</a></li>
                </ul>
              </li>

              <li><a href="#" className="text-white text-lg">SERVICES</a></li>

              <li className="group relative">
                <a href="#" className="text-white text-lg">OUR TEMPLE</a>
                <ul className="absolute hidden group-hover:block bg-red-500 text-white py-1 mt-2 rounded-md shadow-lg">
                  <li><a href="#" className="block px-4 py-2">ABOUT US</a></li>
                  <li><a href="#" className="block px-4 py-2">GUIDELINES</a></li>
                  <li><a href="#" className="block px-4 py-2">OUR PRIEST</a></li>
                </ul>

              </li>
              <li><a href="#" className="text-white text-lg">FORMS</a></li>
              <li><a href="#" className="text-white text-lg">VIDHYAA</a></li>
              <li><a href="#" className="text-white text-lg">NEW TEMPLE</a></li>
              <li><a href="#" className="text-white text-lg">CONTACT US</a></li>
              <li><a href="#" className="text-white text-lg">DONATE</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <Header />
    {/* <welcome /> */}
    </div>
  )
}
export default about;
