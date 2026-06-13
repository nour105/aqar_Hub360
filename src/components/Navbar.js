import Link from "next/link";
import Image from "next/image";
import logoAqarHUb from "../../public/aqarHub_ASSESTS/Vector.png";

export default function Navbar() {
    return (
        <header className="bg-[#EFEFEF]">
            <div className="max-w-7xl  mx-auto px-4 py-4 flex items-center justify-between">

                <Link href="/" className="text-2xl font-bold">
<img
  src={logoAqarHUb.src}
  alt="AqarHub360 Logo"
  width={120}
  height={50}
/>                </Link>

                <nav className="flex text-center gap-6">

                    <Link href="/">
                       <h3 className="text-md uppercase">Home</h3> 
                    </Link>

                    <Link href="/properties">
                        <h3 className="text-md  uppercase">Properties</h3>
                    </Link>

                    <Link href="/about-us">
                        <h3 className="text-md  uppercase">About us</h3>
                    </Link>

                    <Link href="/contact-us">
                        <h3 className="text-md  uppercase">Contact</h3>
                    </Link>

                </nav>
                <div className="flex gap-4">
                    <Link href="/login" className="px-4 py-2 uppercase font-extrabold text-black rounded-md">
                       <h2> Sign In</h2>
                    </Link>   
                     <Link href="/properties" className="px-4 py-2 uppercase text-md  rounded-4xl text-white bg-[#FF0000]">
                       <h2>Property</h2> 
                    </Link>  
                </div>
            </div>
        </header>
    );
}