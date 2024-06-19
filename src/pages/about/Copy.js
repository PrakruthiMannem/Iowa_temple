import "../../app/globals.css";

const Footer = () => {
    return (

        <footer className="  py-6">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-lg mt-5 text-gray-400">
                    <p>CopyRight &copy; 2020 Your Company. All rights reserved.</p>
                </div>
                <div className=" flex items-center justify-between mt-5">
                    <img src="images/donate2.png" alt="footerimg" />
                </div>
            </div>
        </footer>

    )
}
export default Footer;