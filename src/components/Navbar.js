import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                <Link href="/" className="text-2xl font-bold">
                    Aqar Hub 360
                </Link>

                <nav className="flex gap-6">

                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/properties">
                        Properties
                    </Link>

                    <Link href="/about-us">
                        About Us
                    </Link>

                    <Link href="/contact-us">
                        Contact
                    </Link>

                </nav>

            </div>
        </header>
    );
}