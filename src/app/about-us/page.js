export default function AboutPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-16">

            {/* Hero Section */}
            <section className="text-center mb-16">

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    About Us
                </h1>

                <p className="text-gray-600 text-lg leading-7 max-w-3xl mx-auto">
                    We are a real estate platform dedicated to connecting buyers,
                    sellers, and investors with the best properties in the market.
                    Our mission is to simplify property discovery and make real estate
                    decisions faster, smarter, and more transparent.
                </p>

            </section>

            {/* Mission / Vision */}
            <section className="grid md:grid-cols-2 gap-10 mb-16">

                <div className="border rounded-2xl p-6 hover:shadow-md transition">
                    <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                    <p className="text-gray-600 leading-7">
                        To provide a seamless real estate experience by offering accurate
                        listings, verified developers, and advanced search tools that help
                        users find their ideal property quickly and efficiently.
                    </p>
                </div>

                <div className="border rounded-2xl p-6 hover:shadow-md transition">
                    <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                    <p className="text-gray-600 leading-7">
                        To become the leading real estate platform in the region by
                        combining technology, data, and user experience into one powerful
                        ecosystem.
                    </p>
                </div>

            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">

                <div className="border rounded-xl p-6">
                    <h3 className="text-3xl font-bold">500+</h3>
                    <p className="text-gray-500">Properties</p>
                </div>

                <div className="border rounded-xl p-6">
                    <h3 className="text-3xl font-bold">50+</h3>
                    <p className="text-gray-500">Developers</p>
                </div>

                <div className="border rounded-xl p-6">
                    <h3 className="text-3xl font-bold">10+</h3>
                    <p className="text-gray-500">Cities</p>
                </div>

                <div className="border rounded-xl p-6">
                    <h3 className="text-3xl font-bold">1000+</h3>
                    <p className="text-gray-500">Clients</p>
                </div>

            </section>

            {/* Footer CTA */}
            <section className="text-center bg-gray-50 rounded-2xl p-10">

                <h2 className="text-3xl font-bold mb-4">
                    Ready to find your next property?
                </h2>

                <p className="text-gray-600 mb-6">
                    Explore thousands of listings and discover the perfect home or investment.
                </p>

                <a
                    href="/properties"
                    className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
                >
                    Browse Properties
                </a>

            </section>

        </main>
    );
}