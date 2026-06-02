import Link from "next/link";
import { getCountryCities } from "@/lib/api";

export default async function CountryCitiesPage({ params }) {

    // 🔥 مهم جداً بـ Next 15/16
    const { id } = await params;

    const cities = await getCountryCities(id);

    console.log(cities);

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold mb-10">
                Cities
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {cities.length > 0 ? (

                    cities.map((city) => (

                        <Link
                            key={city.id}
                            href={`/cities/${city.id}`}
                            className="border rounded-2xl p-6 hover:shadow-lg transition"
                        >

                            <h2 className="text-2xl font-bold">
                                {city.name}
                            </h2>

                        </Link>

                    ))

                ) : (

                    <p>No cities found</p>

                )}

            </div>

        </main>
    );
}