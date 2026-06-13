"use client";

import PropertyCard from "@/components/PropertyCard";
import { MapPin } from "lucide-react";

export default function PropertyFilter({
    properties,
    location,
    setLocation,
    totalResults,
}) {
    const locations = [
        "Mina Al Arab",
        "Al Hamra Village",
        "Al Marjan Island",
        "Flamingo Villas",
        "Marbella",
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
                {/* LIST */}
                <div className="space-y-4">

                    {properties.length > 0 ? (
                        properties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
                        ))
                    ) : (
                        <div className="bg-white rounded-2xl border p-10 text-center">
                            No Properties Found
                        </div>
                    )}

                </div>

                {/* SIDEBAR */}
           <aside className="space-y-4 order-first lg:order-last">

                    <div className="bg-white rounded-2xl border overflow-hidden">

                        <div className="p-4 border-b">
                            <h3 className="font-semibold text-sm">
                                Travel Selection
                            </h3>
                        </div>

                        <div className="p-4">

                            <label className="text-xs text-gray-500 block mb-2">
                                Search By Location
                            </label>

                            <div className="border rounded-lg h-11 flex items-center px-3">

                                <MapPin
                                    size={16}
                                    className="text-gray-400"
                                />

                                <input
                                    value={location}
                                    onChange={(e) =>
                                        setLocation(
                                            e.target.value
                                        )
                                    }
                                    type="text"
                                    placeholder="Search location..."
                                    className="ml-2 w-full outline-none text-sm"
                                />

                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">

                                {locations.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() =>
                                            setLocation(item)
                                        }
                                        className={`px-3 py-2 rounded-lg text-xs border transition ${
                                            location === item
                                                ? "bg-red-500 text-white border-red-500"
                                                : "bg-white hover:bg-gray-50"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                ))}

                            </div>

                            <div className="mt-4 text-xs text-gray-500">
                                {totalResults} Properties Found
                            </div>

                        </div>

                    </div>

                    {/* Sponsored Card */}
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
                                    alt=""
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
                            </div>

                        </div>
                    </div>

                </aside>

            </div>

        </div>
    );
}