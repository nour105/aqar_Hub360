"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox({
    cities = [],
    developers = [],
}) {
    const router = useRouter();

    const avenueAgency =
        developers.find((a) =>
            a.name
                ?.toLowerCase()
                .includes(
                    "avenue properties"
                )
        );

    const [propertyType, setPropertyType] =
        useState("");

    const [budget, setBudget] =
        useState("");

    const [cityId, setCityId] =
        useState("");

    const [bathrooms, setBathrooms] =
        useState("");

    // FIX HYDRATION
    const [agencyId, setAgencyId] =
        useState(
            avenueAgency?.id?.toString() ||
            ""
        );

    const quickTypes = [
        "Apartment",
        "Villa",
        "Studio",
        "Townhouse",
        "Office",
    ];

    const handleSearch = () => {
        const params =
            new URLSearchParams();

        if (propertyType)
            params.set(
                "property_type",
                propertyType
            );

        if (budget)
            params.set(
                "budget",
                budget
            );

        if (cityId)
            params.set(
                "city_id",
                cityId
            );

        if (bathrooms)
            params.set(
                "bathrooms",
                bathrooms
            );

        if (agencyId)
            params.set(
                "agency_id",
                agencyId
            );

        router.push(
            `/search?${params}`
        );
    };

    return (
        <section className="container mx-auto my-5">

            <div className="bg-white rounded-3xl p-8 shadow-lg">

                <div className="border-b pb-4">
                    <button className="border-b-2 border-red-500 pb-2 font-bold uppercase">
                        Rent
                    </button>
                </div>

                <div className="grid lg:grid-cols-5 gap-5 mt-8">

                    <select
                        value={
                            propertyType
                        }
                        onChange={(e)=>
                            setPropertyType(
                                e.target.value
                            )
                        }
                        className="rounded-xl border p-4"
                    >
                        <option value="">
                            Property Type
                        </option>

                        <option value="apartment">
                            Apartment
                        </option>

                        <option value="villa">
                            Villa
                        </option>

                        <option value="studio">
                            Studio
                        </option>

                    </select>

                    <select
                        value={budget}
                        onChange={(e)=>
                            setBudget(
                                e.target.value
                            )
                        }
                        className="rounded-xl border p-4"
                    >
                        <option value="">
                            Price
                        </option>

                        <option value="50000">
                            Under 50K
                        </option>

                        <option value="100000">
                            Under 100K
                        </option>

                    </select>

                    <select
                        value={cityId}
                        onChange={(e)=>
                            setCityId(
                                e.target.value
                            )
                        }
                        className="rounded-xl border p-4"
                    >
                        <option value="">
                            Location
                        </option>

                        {cities.map(
                            (city) => (
                                <option
                                    key={
                                        city.id
                                    }
                                    value={
                                        city.id
                                    }
                                >
                                    {
                                        city.name
                                    }
                                </option>
                            )
                        )}

                    </select>

                    <select
                        value={
                            bathrooms
                        }
                        onChange={(e)=>
                            setBathrooms(
                                e.target.value
                            )
                        }
                        className="rounded-xl border p-4"
                    >
                        <option value="">
                            Bathrooms
                        </option>

                        <option value="1">
                            1+
                        </option>

                        <option value="2">
                            2+
                        </option>

                        <option value="3">
                            3+
                        </option>

                    </select>

                    <select
                        value={
                            agencyId
                        }
                        onChange={(e)=>
                            setAgencyId(
                                e.target.value
                            )
                        }
                        className="rounded-xl border p-4"
                    >
                        <option value="">
                            Agency
                        </option>

                        {developers.map(
                            (
                                agency
                            ) => (
                                <option
                                    key={
                                        agency.id
                                    }
                                    value={
                                        agency.id
                                    }
                                >
                                    {
                                        agency.name
                                    }
                                </option>
                            )
                        )}

                    </select>

                </div>

                <div className="flex flex-wrap gap-3 mt-8">

                    {quickTypes.map(
                        (item) => (
                            <button
                                key={
                                    item
                                }
                                type="button"
                                onClick={() =>
                                    setPropertyType(
                                        item.toLowerCase()
                                    )
                                }
                                className={`px-4 py-2 rounded-full border ${
                                    propertyType ===
                                    item.toLowerCase()
                                        ? "bg-black text-white"
                                        : "bg-white"
                                }`}
                            >
                                {item}
                            </button>
                        )
                    )}

                    <button
                        type="button"
                        onClick={
                            handleSearch
                        }
                        className="ml-auto bg-black text-white px-8 rounded-full"
                    >
                        Search
                    </button>

                </div>

            </div>

        </section>
    );
}