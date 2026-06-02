import Link from "next/link";
import { getDevelopers } from "@/lib/api";

export default async function DevelopersPage() {

    const res = await getDevelopers();
    const developers = res?.data ?? [];

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold mb-10">
                Developers
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {developers.map((dev) => (
                    <Link
                        key={dev.id}
                        href={`/developers/${dev.id}`}
                        className="border rounded-xl p-5 hover:shadow-lg transition"
                    >

                        {dev.logo && (
                            <img
                                src={`http://127.0.0.1:8000/storage/${dev.logo}`}
                                className="h-[120px] w-full object-contain mb-4"
                            />
                        )}

                        <h2 className="text-xl font-bold">{dev.name}</h2>

                        <p className="text-gray-600">
                            {dev.description}
                        </p>

                        <p className="mt-3 text-sm text-blue-600">
                            View Properties →
                        </p>

                    </Link>
                ))}

            </div>

        </main>
    );
}