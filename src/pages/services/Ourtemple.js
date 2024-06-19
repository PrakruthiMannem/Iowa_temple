import "../../app/globals.css";
import Logo from "./Logo";
const Ourtemple = () => {
    return (
        <div>
            <div className="min-h-auto w-auto relative mt-16 ">
                <img src="images/mohamed-ajufaan-GFcWwwGNu_w-un@2x.png" alt="image1" className="absolute mix-blend-overlay w-full h-full" />
                <div className="p-24 ">
                    <h1 className="text-white text-6xl font-bold ml-10 mt-20 ">Our Priest</h1>
                    <p className="text-white text-xl font-sans text-3xl mt-7 ml-10">Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing elit, sed doeiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.Ut enim ad
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className=" container mx-auto w-1/2 mt-20 ml-20">
                    <h3 className="text-lg text-orange-400 font-bold mt-16 ">ABOUT US - OUR PRIEST</h3>
                    <h1 className="text-6xl text-red-600 font-bold mt-3 ">Meet Our Priest</h1>
                    <h4 className="text-lg font-bold mt-5">Priest Sri Sheshashai B.Srinivasa</h4>
                    <p className="text-xl font-sans p-2 mt-1">Please meet our priest, Sri. Sheshashai B. Srinivasa, from Addagal,<br />Srinivaspur Taluk, in the state of Karnataka, India. Sri Sheshashai <br /> started in this Temple in February 2012. </p>
                    <p className="text-xl font-sans p-2 mt-1">Priest Sheshashai has over 20 years of exprience as a priest. Prior to <br /> joining this temple, he has served as a priest at Sri Venkateswara <br />Temple, Devangere, Karnataka, India and in the United States at <br /> Pomona, New York and Orlando, Florida. </p>
                    <p className="text-xl font-sans p-2 mt-1">Sri Sheshashai has completed Pancharatra Agama Pravara from <br /> Maharaja Sanskrit College, Mysuru and graduated as SHASTRY from <br /> Rashtriya Sanskrit Vidyapeetha, Tirupathi in Chittoor district in the <br />state of Andhra Pradesh, India.</p>
                    <p className="text-xl font-sans p-2 mt-1">Sri Sheshashai is well-trained and very Knowledgeable and an expert <br /> at performing various religious services such as Abhishekam, <br />Gruthapravesha, Satyanarayana Puja, Sudharshana Homa, <br />NavagrahaPuja and Homa, Rudraabhishekam, kalyanotsavam, <br /> Namakarnam, Annaprashanam, Ayushya Homa and many more.</p>
                    <p className="text-xl font-sans p-2 mt-1">Sri Sheshashal is fluent in English, Hindi, Kannada, Tamil, Telugu and <br /> Sanskrit. He is married and has three children.</p>
                    <p className="text-xl font-sans p-2 mt-1">Sri Sheshashai is avaliable for in-temple, outside-temple and also <br /> virtual services except on On Thursdays when the Temple remains <br /> closed. Please call Temple at 319-396-3196 or mobile phone at <br /> 319-775-1552 or to discuss the needed Pooja service prior to filling the <br/> Pooja Request form.</p>
                    <h1 className="text-2xl font-bold text-red-600 mt-5"> Thanks,</h1>
                    <h1 className="text-2xl font-bold text-red-600 mt-3">Chair-Person, The Hindu Templ Association of <br /> Eastern Iowa.</h1>
                </div>
                <div className="w-1/2">
                    <img src="images/rhema-kallianpur-jbJ-_hw2yag-u_i.png" alt="image" className="h-screen mt-10"/>
                </div>
            </div>
            <Logo />
        </div>
    )
}
export default Ourtemple;