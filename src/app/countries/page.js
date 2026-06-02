import Link from "next/link";
import { getCountries } from "@/lib/api";

export default async function CountriesPage() {

    const countries = await getCountries();

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold mb-10">
                Countries
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {countries.map((country) => (

                    <Link
                        key={country.id}
                        href={`/countries/${country.id}`}
                        className="border rounded-2xl p-6 hover:shadow-lg transition"
                    >

                        <h2 className="text-2xl font-bold">
                            {country.name}
                        </h2>

                    </Link>

                ))}

            </div>

        </main>
    );
}