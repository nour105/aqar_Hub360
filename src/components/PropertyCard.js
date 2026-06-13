"use client";

import Link from "next/link";
import {
    Bath,
    Ruler,
    MapPin,
    Phone,
    Heart,
} from "lucide-react";

export default function PropertyCard({ property }) {
    return (
        <Link
            href={`/properties/${property.slug || property.id}`}
            className="group block rounded-[18px] overflow-hidden bg-white border border-[#ECECEC] hover:shadow-xl transition duration-300"
        >
            <div className="flex flex-col lg:flex-row">

                {/* IMAGE */}
<div className="relative w-full lg:w-[290px] h-[240px] sm:h-[280px] lg:h-auto shrink-0">
                    <img
                        src={
                            property.cover_image ||
                            property.cover ||
                            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                        }
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
                    />

                    <div className="absolute left-4 top-4 flex gap-2">

                        <span className="h-7 px-3 rounded-full bg-white flex items-center text-[10px] font-bold">
                            VERIFIED
                        </span>

                        <span className="h-7 px-3 rounded-full bg-[#FF3B3B] text-white flex items-center text-[10px] font-bold">
                            FEATURED
                        </span>

                    </div>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white flex items-center justify-center"
                    >
                        <Heart size={16} />
                    </button>

                    <div className="absolute left-4 bottom-4 px-3 py-2 rounded-full bg-[#FF3B3B] text-white text-[11px] font-semibold">
                        {property.purpose?.toUpperCase() ||
                            "FOR SALE"}
                    </div>

                </div>

                {/* CONTENT */}
                <div className="flex-1 p-5 flex flex-col">

                    <div className="flex flex-col lg:flex-row justify-between gap-5">

                        <div>

<h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-black leading-none tracking-[-1px]">                                {property.price}
                            </h2>

                            <h3 className="mt-2 font-extrabold text-[18px]">
                                {property.title}
                            </h3>

                            <div className="mt-2 flex items-center gap-2 text-[#8A8A8A] text-sm">
                                <MapPin size={14} />
                                {property.location}
                            </div>

                        </div>

                        <div className="text-left lg:text-right">

                            <p className="text-[10px] uppercase text-[#A0A0A0]">
                                Agency
                            </p>

                            <div className="flex items-center lg:justify-end gap-2 mt-2">

                                {property.agency?.logo && (
                                    <img
                                        src={property.agency.logo}
                                        alt={property.agency.name}
                                        className="w-10 h-10 rounded-full object-cover border"
                                    />
                                )}

                                <div className="text-[16px] font-black">
                                    {property.agency?.name || "-"}
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* FEATURES */}
<div className="flex flex-wrap gap-4 sm:gap-8 mt-6 pb-5 border-b">
                        <Feature
                            icon={<Bath size={18} />}
                            value={property.bathrooms || 0}
                            label="Baths"
                        />

                        <Feature
                            icon={<Ruler size={18} />}
                            value={Number(
                                property.area_sqft || 0
                            ).toLocaleString()}
                            label="sqft"
                        />

                    </div>

                    <p className="mt-4 text-[13px] text-[#666] line-clamp-2">
                        {property.unit_type}
                    </p>

                    {/* FOOTER */}
                    <div className="mt-auto pt-5 flex flex-col lg:flex-row justify-between gap-4 lg:items-end">

                        <div>

                            <div className="text-[10px] uppercase text-[#999]">
                                Property Type
                            </div>

                            <div className="mt-2 rounded-full px-4 h-9 bg-[#F7F7F7] inline-flex items-center text-sm font-semibold capitalize">
                                {property.property_type}
                            </div>

                        </div>

<div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                className="h-10 w-full sm:w-auto px-6 rounded-full border border-[#FF3B3B] text-[#FF3B3B] text-sm font-semibold flex items-center gap-2"
                            >
                                <Phone size={14} />
                                Call
                            </button>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                className="h-10 w-full sm:w-auto px-7 rounded-full  bg-[#FF3B3B] text-white text-sm font-semibold"
                            >
                                WhatsApp
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </Link>
    );
}

function Feature({ icon, value, label }) {
    return (
        <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-[#F8F8F8] flex items-center justify-center">
                {icon}
            </div>

            <div>

                <div className="font-black">
                    {value}
                </div>

                <div className="text-xs text-[#8A8A8A]">
                    {label}
                </div>

            </div>

        </div>
    );
}