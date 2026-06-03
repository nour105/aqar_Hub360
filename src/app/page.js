import Link from "next/link";
import { getCities,getProperties,getDevelopers } from "@/lib/api";
import DeveloperSlider from "@/components/DeveloperSlider";
import SearchBox from "@/components/SearchBox";

export default async  function HomePage() {
     const citiesRes = await getCities();

    const cities = citiesRes?.data || [];
      const propertiesRes = await getProperties();

    const featuredProperties =
        propertiesRes?.data?.data?.slice(0, 3) || [];
        const developersRes = await getDevelopers();
const developers = developersRes?.data || [];
    return (
        <main className="bg-white">

            {/* HERO */}
            <section className="relative min-h-screen flex items-center">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000')",
                    }}
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative container mx-auto px-6">

                    <div className="max-w-4xl">

                        <span className="inline-block bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
                            UAE Rental Properties
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mt-8 leading-tight">
                            Find Your Perfect Rental Property In UAE
                        </h1>

                        <p className="text-xl text-gray-200 mt-6 max-w-2xl">
                            Discover apartments, villas, offices and commercial
                            spaces across the UAE with Aqar Hub 360.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">

                            <Link
                                href="/properties"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold"
                            >
                                Browse Properties
                            </Link>

                            <Link
                                href="/contact-us"
                                className="border border-white text-white px-8 py-4 rounded-xl font-semibold"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* SEARCH */}
    <SearchBox
    cities={cities}
    developers={developers}
/>
{/* DEVELOPERS */}
<section className="">

    <DeveloperSlider developers={developers} />

</section>

          
      {/* CITIES */}
<section className="pb-24">

    <div className="container mx-auto px-6">

        <div className="text-center mb-14">

            <h2 className="text-5xl font-bold">
                Explore Popular Cities
            </h2>

            <p className="text-gray-600 mt-4">
                Discover rental opportunities across the UAE
            </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

            {cities.length > 0 ? (

                cities.map((city) => (
                  <Link
    key={city.id}
    href={`/cities/${city.id}`}
    className="h-72 rounded-3xl bg-gradient-to-br from-black to-gray-700 flex items-end p-8 text-white hover:scale-105 transition"
>
                        <div>
                            <h3 className="text-3xl font-bold">
                                {city.name}
                            </h3>

                            <p className="text-gray-300 mt-2">
                                Browse Properties →
                            </p>
                        </div>
                    </Link>
                ))

            ) : (

                <p className="text-center col-span-3">
                    No cities found
                </p>

            )}

        </div>

    </div>

</section>

       
{/* FEATURED PROPERTIES */}
<section className="py-28 bg-gradient-to-b from-gray-50 to-white">

    <div className="container mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">

            <div>

                <span className="text-emerald-600 font-semibold uppercase tracking-widest">
                    Featured Properties
                </span>

                <h2 className="text-5xl font-bold mt-3">
                    Discover Premium Rentals
                </h2>

                <p className="text-gray-600 mt-4 max-w-2xl">
                    Explore the newest rental properties across the UAE.
                </p>

            </div>

            <Link
                href="/properties"
                className="mt-6 lg:mt-0 bg-black text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
                View All Properties
            </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {featuredProperties.length > 0 ? (

                featuredProperties.map((property) => (

                    <Link
                        key={property.id}
                        href={`/properties/${property.id}`}
                        className="group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >

                        {/* IMAGE */}

                        <div className="relative h-[300px] overflow-hidden">

                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                                alt={property.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute top-5 left-5">

                                <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold capitalize">
                                    {property.property_type}
                                </span>

                            </div>

                            <div className="absolute bottom-5 left-5 right-5 text-white">

                                <h3 className="text-2xl font-bold line-clamp-2">
                                    {property.title}
                                </h3>

                                <p className="mt-2 text-gray-200">
                                    📍 {property.city?.name || property.location}
                                </p>

                            </div>

                        </div>

                        {/* CONTENT */}

                        <div className="p-6">

                            <div className="flex justify-between items-center mb-6">

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Rental Price
                                    </p>

                                    <h4 className="text-3xl font-bold text-emerald-600">
                                        {property.price}
                                    </h4>

                                </div>

                                <div>

                                    <p className="text-xs text-gray-500 uppercase">
                                        Area
                                    </p>

                                    <p className="font-semibold">
                                        {property.area_sqft} sqft
                                    </p>

                                </div>
                            </div>

                        

                            <div className="flex justify-between items-center border-t-1 border-gray-100 pt-5">

                                <div>

                                    <p className="text-xs text-gray-500">
                                        Developer
                                    </p>

                                    <p className="font-semibold">
                                        {property.developer?.name || "N/A"}
                                    </p>

                                </div>

                                <span className="text-emerald-600 font-semibold group-hover:translate-x-1 transition">
                                    View Details →
                                </span>

                            </div>

                        </div>

                    </Link>

                ))

            ) : (

                <div className="col-span-3 text-center py-20">
                    <h3 className="text-2xl font-bold">
                        No Featured Properties Found
                    </h3>
                    <p className="text-gray-500 mt-3">
                        New listings will appear here soon.
                    </p>
                </div>

            )}

        </div>

    </div>

</section>

            {/* WHY US */}
            <section className="bg-gray-50 py-24">

                <div className="container mx-auto px-6">

                    <div className="text-center mb-16">

                        <h2 className="text-5xl font-bold">
                            Why Choose Aqar Hub 360
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        <div className="bg-white rounded-3xl p-10 shadow">
                            <h3 className="text-2xl font-bold mb-4">
                                Verified Listings
                            </h3>

                            <p className="text-gray-600">
                                Every property is carefully reviewed to ensure
                                accurate information and trusted listings.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow">
                            <h3 className="text-2xl font-bold mb-4">
                                Trusted Agents
                            </h3>

                            <p className="text-gray-600">
                                Work directly with professional real estate
                                experts and agencies.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow">
                            <h3 className="text-2xl font-bold mb-4">
                                Fast Search
                            </h3>

                            <p className="text-gray-600">
                                Powerful filtering tools help you find the
                                perfect rental property quickly.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="bg-black text-white py-28">

                <div className="container mx-auto px-6 text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        Ready To Find Your Next Home?
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Browse thousands of verified rental properties across
                        the UAE and connect with trusted real estate agents.
                    </p>

                    <Link
                        href="/properties"
                        className="bg-emerald-600 hover:bg-emerald-700 px-10 py-4 rounded-xl font-semibold inline-block"
                    >
                        Browse Properties
                    </Link>

                </div>

            </section>

        </main>
    );
}