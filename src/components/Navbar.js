"use client";

import { useState } from "react";
import Link from "next/link";

import logoAqarHUb from "../../public/aqarHub_ASSESTS/Vector.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-[#EFEFEF] relative">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/">
                    <img
                        src={logoAqarHUb.src}
                        alt="AqarHub360 Logo"
                        width={120}
                        height={50}
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-md uppercase">Home</Link>
                    <Link href="/properties" className="text-md uppercase">Properties</Link>
                    <Link href="/about-us" className="text-md uppercase">About us</Link>
                    <Link href="/contact-us" className="text-md uppercase">Contact</Link>
                </nav>

                {/* Right Buttons (Desktop) */}
                <div className="hidden md:flex gap-4">
                    <Link href="/login" className="px-4 py-2 uppercase font-extrabold text-black">
                        Sign In
                    </Link>

                    <Link href="/properties" className="px-4 py-2 uppercase text-white bg-[#FF0000] rounded-full">
                        Property
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#EFEFEF] px-4 pb-4 space-y-4">
                    <Link href="/" className="block uppercase">Home</Link>
                    <Link href="/properties" className="block uppercase">Properties</Link>
                    <Link href="/about-us" className="block uppercase">About us</Link>
                    <Link href="/contact-us" className="block uppercase">Contact</Link>

                    <div className="flex flex-col gap-3 pt-3 border-t">
                        <Link href="/login" className="uppercase font-bold">
                            Sign In
                        </Link>

                        <Link href="/properties" className="uppercase text-white bg-[#FF0000] px-4 py-2 rounded-full text-center">
                            Property
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}