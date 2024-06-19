import "../../app/globals.css";
import Pooja from "./Pooja"
const Tabel = () => {
    return (
        <div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto mt-16">
                <table className="w-full text-md text-left rtl:text-right text-white-500 dark:text-white-900">
                    <thead className="text-lg text-white-700 uppercase bg-gray-900 ">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-white">
                                Service Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-white">
                                Click to view
                            </th>
                            <th scope="col" className="px-6 py-3 text-white">
                                Scheduled by Ec in temple (3 hours)
                            </th>
                            <th scope="col" className="px-6 py-3 text-white">
                                Requested by Devotees in temple (3 hours)
                            </th>
                            <th scope="col" className="px-6 py-3 text-white">
                                Outside temple(3 hours)($50 extra for weekend)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Archana
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg ">Materials</button>
                            </td>

                            <td className="px-6 py-4 text-lg font-bold">
                                $11
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $11
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Abhishekam
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>

                            <td className="px-6 py-4 text-lg font-bold">
                                $51
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Vahana/Vehicle Pooja
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>

                            <td className="px-6 py-4 text-lg font-bold">
                                $51
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Hair Offering(Chaula Karma)
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $51
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Navagraha Pooja/Shanthi
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Navagraha Pooja/Shanthi with Homa/Havan
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Hiranya Shraddham
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151**
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Pinda Shraddam
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151**
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Kalyanatsavam or Mangal Vivah for God
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $351*
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Satyanarayana pooja
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $51
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                AyushyaHoma
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $201
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Punya Vachanam
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $51
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Namkarana(Naming)
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Aksharabhyasa
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $75
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Annaprashana
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $75
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Bhoomi Pooja(Ground Breaking)
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                House Warming(Gruha Pravesham)
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold" >
                                House Warming with Navagraha Shathi
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                House Warming with Homa
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                House Warming Satyanarayana Puja
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Wedding (Guidelines for Ceremony)
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $501*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $501
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Seemantham/Baby Shower
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Upanayanam (Sacred Thread Ceremony)
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Shashtipoorthi(60 Birthday)
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $251
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Lakshmi Pooja
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $51
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Engagement/Mangni/Nichayatartham
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151*
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $201
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Ganapathy Homa/Havan
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $201
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Mrityunjaya Homa/Havan
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $201
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Sudarshana Homa/Havan
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $201
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Lakshmi Narayana Homa/Havan
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">

                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $151
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $201
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 text-lg font-bold">
                                Amavasya Tarpanam/Mahalaya
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-yellow-400 px-4 py-2 text-white text-lg">Materials</button>
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $51
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $51
                            </td>
                            <td className="px-6 py-4 text-lg font-bold">
                                $101
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="container mx-auto p-2">
                <p className="mt-10 text-xl font-sans">* Temple kitchen & dining hall if required, must be reserved separately. Use facilities reservation form to reserve kitchen & dinning hall. Prayer hall is available only for religious services. Sponsors must supply or buy all pooja materials. Temple would supply pooja materials in case they are unavailable, for a nominal donation to Temple.</p>
                <p className="mt-16 text-xl font-sans">** Make checks payable to "Hindu Temple association of Eastern Iowa". Please donate to temple generously (donations are eligible for tax deduction).</p>
            </div>
            <footer class="bg-gray-800 py-6 text-gray-300 mt-10">
                <div class="container flex mx-auto grid grid-cols-6 gap-4">
                    <div class="w-full px-4 col-span-2 col-end-3">
                        <img src="images/iowalogo.png" alt="Logo" className=" mt-10" />
                        <p className="text-xl font-sans ml-3 mt-3 ">
                            Lorem ipsum dolor sit amet,<br />
                            consetetur sadipscing elitr,sed<br />
                            diam nonumy eirmod tempor<br />
                            invidunt ut labore et dolore magna.
                        </p>
                        <a href="#"><i class='bx bxl-facebook'></i></a>
                    </div>
                    <div class="grid grid-cols-4 col-span-4">
                        <div class="w-full  col-span-1">
                            <h2 className="text-lg font-bold  mt-10">Useful links</h2>
                            <p className="text-md mt-8 text-yellow-500 mt-2">Pooja Request</p>
                            <p className="text-yellow-500 mt-2">News Letter Signup</p>
                            <p className="text-yellow-500 mt-2">Volunteer Signup</p>
                            <p className="text-yellow-500 mt-2">Land Donation</p>
                        </div>
                        <div class="w-full px-4 col-span-1 ">
                            <h2 className="text-lg font-bold  mt-10">Privacy</h2>
                            <p className="text-md mt-8 text-yellow-500 mt-2">Donation</p>
                            <p className="text-yellow-500 mt-2">About Us</p>
                            <p className="text-yellow-500 mt-2">Contact Us</p>
                            <p className="text-yellow-500 mt-2">Services</p>

                        </div>
                        <div class="w-full px-4 col-span-1">
                            <h2 className="text-lg font-bold mt-10">Contact Info</h2>
                            <p className="grid svg-icons mt-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-yellow-500 pr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>


                                <span class=""> econtact@iowahindutemple.org</span>
                            </p>

                            <p className="grid svg-icons mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-yellow-500 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>


                                <span class="pb-2"> +1-(319)-396-3196 </span>
                            </p>
                            <p className="grid svg-icons mt-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-11 text-yellow-500 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>


                                <span class="pt-1">1700 Naoma Dr SW,Cedar Rapids,IA 52404</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
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
        <Pooja />
        </div>
    )
}
export default Tabel;