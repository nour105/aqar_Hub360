import Link from "next/link";

export default function Hero() {

    return (
        <section className="relative h-[700px] bg-black text-white flex items-center">

            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                <h1 className="text-7xl font-bold leading-tight max-w-4xl">
                    Discover Luxury Properties In Dubai
                </h1>

                <p className="mt-6 text-xl text-gray-200 max-w-2xl">
                    Find apartments, villas, penthouses and premium investments.
                </p>

                <Link
                    href="/properties"
                    className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold"
                >
                    Explore Properties
                </Link>

            </div>

        </section>
    );
}