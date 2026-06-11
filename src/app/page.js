import Link from "next/link";
import { getCities, getProperties, getDevelopers } from "@/lib/api";
import DeveloperSlider from "@/components/DeveloperSlider";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import {
    ShieldCheck,
    Handshake,
    CirclePlay,
    Phone,
    Mail,
    MapPin,
    ArrowRight,
} from "lucide-react";
export default async function HomePage() {
    const citiesRes = await getCities();

    const cities = citiesRes?.data || [];
    const propertiesRes = await getProperties();

    const featuredProperties =
        propertiesRes?.data?.data?.slice(0, 4) || [];
    const developersRes = await getDevelopers();
    const developers = developersRes?.data || [];
    return (
        <main className=" min-h-screen">

            {/* HERO */}
            <section className="relative min-h-screen flex items-center">
                <div className="absolute bg-cover bg-[#EFEFEF] bg-center" />
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
radial-gradient(
circle at center,
rgba(255,59,59,0.18) 0%,
rgba(255,59,59,0.08) 18%,
rgba(255,59,59,0.03) 30%,
transparent 45%
),
#EFEFEF
`
                    }}
                />
                <div className="relative container mx-auto px-6">
                    <div className="max-w-4xl">

                        <span className="inline-block bg-[#C9974A17] border-[#C9974A17] text-[#FF0000] px-5 py-2 rounded-full text-sm font-semibold">
                            UAE Rental Properties
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-black mt-8 leading-tight">
                            Find Your Perfect Rental Property In UAE
                        </h1>

                        <p className="text-xl text-black mt-6 max-w-2xl">
                            Discover apartments, villas, offices and commercial
                            spaces across the UAE with Aqar Hub 360.
                        </p>

                        <div className="flex flex-wrap gap-4 my-10">
                            <Link
                                href="/contact-us"
                                className="border border-white  bg-white text-black px-8 py-4 rounded-full font-semibold"
                            >
                                Speak To An Agent
                            </Link>
                            <Link
                                href="/properties"
                                className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 py-4 rounded-full font-semibold"
                            >
                                Browse Properties
                            </Link>

                        </div>

                    </div>
                    {/* SEARCH */}
                    <SearchBox
                        cities={cities}
                        developers={developers}
                    />
                </div>

            </section>

            {/* FEATURED PROPERTIES */}
            <section className="py-28 bg-[#EFEFEF]">

                <div className="container mx-auto px-6">

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">

                        <div>

                            <span className="text-[#FF0000] font-semibold uppercase tracking-widest">
                                <span className="inline-block w-10 h-[2px] bg-[#FF0000] align-middle mr-2"></span>
                                Featured Properties
                            </span>

                            <h2 className="text-5xl uppercase font-bold mt-3">
                                Handpicked <br></br>for you.
                            </h2>


                        </div>

                        <Link
                            href="/properties"
                            className="mt-6 lg:mt-0 bg-transparent text-black px-6 py-3 rounded-full border-1 border-[#E0D9D1] hover:bg-[#FF0000] hover:text-white">
                            View All Properties →
                        </Link>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* LEFT SIDE - 4 PROPERTIES */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {featuredProperties.slice(0, 4).map((property) => (

                                    <Link
                                        key={property.id}
                                        href={`/properties/${property.id}`}
                                        className="group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                    >

                                        {/* IMAGE */}
                                        <div className="relative h-[300px] overflow-hidden">

                                            <img
                                                src={property.cover_image}
                                                alt={property.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                            <div className="absolute top-5 left-5">
                                                <span className="bg-[#FFFFFFE5] text-black px-4 py-2 rounded-full text-sm font-semibold capitalize">
                                                    {property.property_type}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                                <p className="text-sm text-white/80">
                                                    Rental Price
                                                </p>

                                                <h4 className="text-3xl font-bold text-white">
                                                    {property.price}
                                                </h4>
                                            </div>

                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-6">

                                            <h3 className="text-2xl font-bold line-clamp-2">
                                                {property.title}
                                            </h3>

                                            <p className="mt-2 border-b border-gray-100 text-black pb-2">
                                                📍 {property.city?.name || property.location}
                                            </p>

                                            <div className="flex gap-4 mt-3 text-sm text-gray-700">

                                                <div className="flex items-center gap-2">
                                                    <span>🛁</span>
                                                    <span>{property.bathrooms} Baths</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <span>📐</span>
                                                    <span>{property.area_sqft} sqft</span>
                                                </div>

                                            </div>

                                            <div className="flex justify-between items-center border-t border-gray-100 pt-5 mt-5">

                                                <Image
                                                    src={property.agency.logo}
                                                    alt={property.agency?.name || "Agency"}
                                                    width={100}
                                                    height={40}
                                                    className="object-contain"
                                                />

                                                <span className="text-black font-semibold">
                                                    View Details →
                                                </span>

                                            </div>

                                        </div>

                                    </Link>

                                ))}

                            </div>
                        </div>

                        {/* RIGHT SIDE - SPONSORED */}
                        <div className="lg:col-span-1">

                            <div className="sticky top-24 bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100">

                                <div className="bg-red-50 px-4 py-3 border-b">
                                    <span className="text-red-600 font-bold text-sm uppercase">
                                        Sponsored
                                    </span>
                                </div>

                                <div className="relative h-[320px]">

                                    <img
                                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                                        alt="Sponsored Property"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                <div className="p-6">

                                    <h2 className="text-4xl font-bold">
                                        AED 4,200,000
                                    </h2>

                                    <h3 className="text-xl font-semibold mt-3">
                                        Full Floor Residence Penthouse
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        📍 Downtown Dubai
                                    </p>

                                    <div className="flex gap-4 mt-4 text-sm text-gray-600">
                                        <span>🛏️ 4 Beds</span>
                                        <span>🛁 4 Baths</span>
                                        <span>📐 4500 sqft</span>
                                    </div>

                                    <div className="flex gap-3 mt-6">

                                        <button className="flex-1 border border-red-500 text-red-500 rounded-full py-3">
                                            Call
                                        </button>

                                        <button className="flex-1 bg-red-500 text-white rounded-full py-3">
                                            WhatsApp
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CITIES */}
            <section className="relative py-24 bg-[#141010] overflow-hidden">

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-900/40" />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="mb-14">

                        <span className="text-red-500 text-xs font-bold uppercase tracking-[4px]">
                            Top Cities
                        </span>

                        <h2 className="text-5xl md:text-7xl font-black uppercase text-white mt-3 leading-none">
                            Explore Popular Cities
                        </h2>

                        <p className="text-gray-400 text-lg mt-3">
                            Discover Rental Opportunities Across The UAE
                        </p>

                    </div>

                    {/* Cities Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

                        {cities.length > 0 ? (

                            cities.slice(0, 5).map((city, index) => (

                                <Link
                                    key={city.id}
                                    href={`/cities/${city.id}`}
                                    className="group relative h-[430px] rounded-[22px] overflow-hidden"
                                >

                                    {/* Background Image */}
                                    <Image
                                        src={`https://admin.aqarhub360.com/uploads/${city.image}`}
                                        alt={city.name}
                                        width={200}
                                        height={200}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-between">

                                        <div>
                                            <span className="text-white/70 text-2xl font-light">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <div>

                                            <h3 className="text-white text-3xl font-black uppercase">
                                                {city.name}
                                            </h3>

                                            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                                                Tell us your budget, preferred
                                                neighbourhoods and must-haves. Our smart
                                                matching engine surfaces the most relevant
                                                listings within hours.
                                            </p>

                                            <div className="flex items-center justify-between mt-8">

                                                <span className="text-white text-xs uppercase tracking-[2px]">
                                                    Browse Properties
                                                </span>

                                                <span className="text-white text-xl group-hover:translate-x-2 transition">
                                                    →
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </Link>

                            ))

                        ) : (

                            <div className="col-span-5 text-center text-white py-10">
                                No cities found
                            </div>

                        )}

                    </div>

                </div>

            </section>

            {/* DEVELOPERS */}
            {/* <section className="">

                <DeveloperSlider developers={developers} />

            </section> */}
            {/* WHY US */}


{/* WHY CHOOSE */}
<section className="bg-[#EFEFEF] py-20 rounded-[28px] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">

        <div className="mb-14">

            <span className="uppercase text-[11px] tracking-[3px] text-red-500 font-semibold">
                Discover Why We Stand Out
            </span>

            <h2 className="text-[58px] leading-none font-black uppercase text-black mt-3">
                Why Choose Aqar Hub 360
            </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

            {[
                {
                    icon: ShieldCheck,
                    title: "Verified Listings",
                    desc:
                        "Every property is carefully reviewed to ensure accurate information and trusted listings.",
                },
                {
                    icon: Handshake,
                    title: "Trusted Agents",
                    desc:
                        "Work directly with professional real estate experts and agencies.",
                },
                {
                    icon: CirclePlay,
                    title: "Fast Search",
                    desc:
                        "Powerful filtering tools help you find the perfect rental property quickly.",
                },
            ].map((item, i) => {
                const Icon = item.icon;

                return (
                    <div
                        key={i}
                        className="
                            bg-[#F7F4F1]
                            border
                            border-[#DDDDDD]
                            rounded-[18px]
                            p-6
                            flex
                            items-start
                            gap-4
                            hover:-translate-y-1
                            transition
                        "
                    >
                        <div
                            className="
                                w-[56px]
                                h-[56px]
                                rounded-full
                                bg-black
                                text-white
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >
                            <Icon size={24} />
                        </div>

                        <div>
                            <h3 className="uppercase font-black text-lg">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2 leading-6">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                );
            })}

        </div>
    </div>
</section>


{/* CTA */}
<section className="relative py-24 overflow-hidden">

    {/* dark bg */}
    <div className="absolute inset-0 bg-[#0F0A0A]" />

    {/* red glow */}
    <div
        className="
            absolute
            bottom-[-120px]
            left-0
            w-[600px]
            h-[300px]
            bg-[#FF1A1A]
            blur-[180px]
            opacity-40
        "
    />

    <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1.6fr_0.8fr] gap-10 items-center">

            <div>

                <span className="text-[11px] uppercase tracking-[3px] text-red-500 font-semibold">
                    Discover Your New Home
                </span>

                <h2
                    className="
                        mt-6
                        text-white
                        uppercase
                        font-black
                        text-[90px]
                        leading-[0.9]
                    "
                >
                    Your Next Address
                    <br />
                    <span className="text-gray-500">
                        Awaits You.
                    </span>
                </h2>

            </div>

            <div className="space-y-6 text-white">

                <div className="flex items-center gap-3">
                    <Phone size={16} />
                    <span>+971 58 532 0443</span>
                </div>

                <div className="flex items-center gap-3">
                    <Mail size={16} />
                    <span>hello@aqarhub360.com</span>
                </div>

                <div className="flex items-start gap-3">
                    <MapPin size={16} />
                    <span>
                        540 Park Ave,
                        <br />
                        New York
                    </span>
                </div>

                <Link
                    href="/properties"
                    className="
                        inline-flex
                        items-center
                        gap-3
                        bg-[#FF2323]
                        hover:bg-red-600
                        px-8
                        py-4
                        rounded-full
                        font-semibold
                        mt-6
                    "
                >
                    Browse All Properties
                    <ArrowRight size={18} />
                </Link>

            </div>

        </div>

    </div>

</section>

        </main>
    );
}