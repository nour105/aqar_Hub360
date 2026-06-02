"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox({ cities, developers }) {
    const router = useRouter();

    const [cityId, setCityId] = useState("");
    const [developerId, setDeveloperId] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [budget, setBudget] = useState("");

    const handleSearch = () => {
        const params = new URLSearchParams();

        if (cityId) params.set("city_id", cityId);
        if (developerId) params.set("developer_id", developerId);
        if (propertyType) params.set("property_type", propertyType);
        if (budget) params.set("budget", budget);

        router.push(`/search?${params.toString()}`);
    };

    return (
        <section className="container mx-auto px-6 -mt-16 relative z-20">
            <div className="bg-white rounded-3xl shadow-2xl p-8">

                <div className="grid md:grid-cols-5 gap-4">

                    <select
                        value={cityId}
                        onChange={(e) => setCityId(e.target.value)}
                        className="border rounded-xl px-4 py-4"
                    >
                        <option value="">All Cities</option>

                        {cities.map((city) => (
                            <option key={city.id} value={city.id}>
                                {city.name}
                            </option>
                        ))}
                    </select>

                    <select
                        value={developerId}
                        onChange={(e) => setDeveloperId(e.target.value)}
                        className="border rounded-xl px-4 py-4"
                    >
                        <option value="">All Developers</option>

                        {developers.map((dev) => (
                            <option key={dev.id} value={dev.id}>
                                {dev.name}
                            </option>
                        ))}
                    </select>

                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="border rounded-xl px-4 py-4"
                    >
                        <option value="">Property Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="office">Office</option>
                        <option value="commercial">Commercial</option>
                    </select>

                    <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="border rounded-xl px-4 py-4"
                    >
                        <option value="">Budget</option>
                        <option value="50000">Below 50K AED</option>
                        <option value="100000">Below 100K AED</option>
                        <option value="200000">Below 200K AED</option>
                    </select>

                    <button
                        onClick={handleSearch}
                        className="bg-black text-white rounded-xl font-semibold"
                    >
                        Search
                    </button>

                </div>

            </div>
        </section>
    );
}
