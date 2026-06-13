import Link from "next/link";
import Image from "next/image";
import logo from "../../public/aqarHub_ASSESTS/Vector.png";

export default function Footer() {
    return (
        <footer className="bg-[#F3F3F3] border-t mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                    {/* LEFT SECTION */}
                    <div className="md:col-span-1">
                        <Image
                            src={logo}
                            alt="Aqar Hub 360"
                            width={140}
                            height={60}
                        />

                        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                            The modern property marketplace. Verified listings, expert agents,
                            and tools that put buyers first.
                        </p>

                        {/* Social */}
                        <div className="flex gap-3 mt-5">
                            <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                                in
                            </div>
                            <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                                X
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 1 */}
                    <div>
                        <h3 className="font-semibold mb-4">FIND PROPERTY</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Buy a Home</li>
                            <li>Rent a Home</li>
                            <li>New Developments</li>
                            <li>Commercial Property</li>
                            <li>Land & Plots</li>
                        </ul>
                    </div>

                    {/* COLUMN 2 */}
                    <div>
                        <h3 className="font-semibold mb-4">SELL & RENT OUT</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>List Your Property</li>
                            <li>Free Valuation</li>
                            <li>Find an Agent</li>
                            <li>Landlord Services</li>
                            <li>Conveyancing</li>
                        </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div>
                        <h3 className="font-semibold mb-4">TOOLS & DATA</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Mortgage Calculator</li>
                            <li>Price History</li>
                            <li>Market Reports</li>
                            <li>Neighbourhood Guide</li>
                            <li>Price Trends</li>
                        </ul>
                    </div>

                    {/* COLUMN 4 */}
                    <div>
                        <h3 className="font-semibold mb-4">COMPANY</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>About Us</li>
                            <li>Our Agents</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © 2026 Aqar Hub 360. All rights reserved.
                    </p>

                    <div className="flex gap-5 text-sm text-gray-500">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Use</Link>
                        <Link href="#">Cookie Settings</Link>
                        <Link href="#">Fair Housing</Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}