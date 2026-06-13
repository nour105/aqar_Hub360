import { getProperties } from "@/lib/api";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import PropertySearch from "@/components/PropertySearch";

import Link from "next/link";

export default async function PropertiesPage() {

    const propertiesRes = await getProperties({ });
    const properties = (propertiesRes?.data || []).sort(
        (a, b) =>
            Number(a.bathrooms || 0) -
            Number(b.bathrooms || 0)
    );
    


    return (
        <main className="bg-[#FAFAFA] min-h-screen">

            {/* HERO */}
<section className="bg-[#ececec] pb-16">

    <div className="max-w-7xl mx-auto px-4 pt-5">

        {/* TOP */}
<div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-8 items-center">
            {/* LEFT */}
            <div>

<h1 className="text-[42px] sm:text-[56px] lg:text-[82px] leading-[0.9] font-black uppercase tracking-[-1px] lg:tracking-[-3px] text-black">
                    PROPERTIES FOR
                    <br />
                    RENT IN UAE

                </h1>

                <p className="mt-4 text-[#6f6f6f] text-sm max-w-md leading-relaxed">

                    Browse thousands of verified listings across the country's most sought-after neighbourhoods.

                </p>

            </div>

            {/* RIGHT */}
            <div>

                <img
                    src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2000"
                    alt=""
className="w-full h-[220px] sm:h-[280px] lg:h-[330px] rounded-[14px] object-cover"                />

            </div>

        </div>

        {/* SEARCH CARD */}
   <PropertySearch properties={properties} />

    </div>

</section>

            {/* <PropertyFilter properties={properties} /> */}
       {/* CTA */}
            <section className="relative py-24 overflow-hidden">

                {/* dark bg */}
                <div className="absolute inset-0 bg-[#0F0A0A]" />

                {/* red glow */}
                <div
                    className="absolute bottom-[-120px]  left-0  w-[600px] h-[300px]  bg-[#FF1A1A] blur-[180px] opacity-40 "
                />
                <div className="relative max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-10 items-center">                        <div>
                            <span className="text-[11px] uppercase tracking-[3px] text-red-500 font-semibold">
                                Discover Your New Home
                            </span>
                            <h2
                               className="mt-6 text-white uppercase font-black text-[42px] sm:text-[60px] lg:text-[90px] leading-[0.9]"
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
                                className="inline-flex items-center gap-3 bg-[#FF2323]  hover:bg-red-600   px-8 py-4 rounded-full font-semibold mt-6 "
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