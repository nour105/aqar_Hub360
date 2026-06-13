"use client";

import { useEffect, useState } from "react";
import PropertyFilter from "./PropertyFilter";

export default function PropertySearch({ properties }) {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 6;

    const filteredProperties = properties.filter((property) => {
        const value = search.toLowerCase();

        const matchesSearch =
            property.title?.toLowerCase().includes(value) ||
            property.location?.toLowerCase().includes(value) ||
            property.city?.name?.toLowerCase().includes(value) ||
            property.property_type?.toLowerCase().includes(value);

        const matchesLocation = property.location
            ?.toLowerCase()
            .includes(location.toLowerCase());

        return matchesSearch && matchesLocation;
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [search, location]);

    const totalPages = Math.ceil(
        filteredProperties.length / ITEMS_PER_PAGE
    );

    const paginatedProperties = filteredProperties.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <>
            {/* SEARCH */}
            <div className="-mt-12 relative z-20">
                <div className="bg-white rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.12)] p-4">

                    <div className="text-[9px] font-bold text-[#ff3c2f] uppercase tracking-wide mb-3">
                        {filteredProperties.length} PROPERTIES AVAILABLE
                    </div>

<div className="flex flex-col sm:flex-row gap-3">
                            <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="City, Community or Building"
className="w-full flex-1 h-[42px] border border-[#e6e6e6] rounded-full px-5 text-sm outline-none"                        />

                        <button className="h-[42px] bg-[#ff4b42] text-white px-7 rounded-full text-xs font-medium">
                            Search Now
                        </button>
                    </div>
                </div>
            </div>

            <PropertyFilter
                properties={paginatedProperties}
                location={location}
                setLocation={setLocation}
                totalResults={filteredProperties.length}
            />

            {/* PAGINATION */}
            {totalPages > 1 && (
<div className="flex flex-wrap justify-center gap-2 py-10 px-4">                    {Array.from({ length: totalPages }).map(
                        (_, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    setCurrentPage(index + 1)
                                }
                                className={`w-10 h-10 rounded-full border transition ${
                                    currentPage === index + 1
                                        ? "bg-red-500 text-white border-red-500"
                                        : "bg-white hover:bg-gray-50"
                                }`}
                            >
                                {index + 1}
                            </button>
                        )
                    )}
                </div>
            )}
        </>
    );
}