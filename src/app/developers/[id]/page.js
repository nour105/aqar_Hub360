import { getDeveloperProperties } from "@/lib/api";

export default async function DeveloperPage({ params }) {

    // ✅ مهم
    const { id } = await params;

    // ✅ fetch data
    const properties = await getDeveloperProperties(id);

    // ✅ debug
    console.log("PROPERTIES:", properties);

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold mb-10">
                Developer {id} Properties
            </h1>

            {properties?.length > 0 ? (

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {properties.map((p) => (

                        <div
                            key={p.id}
                            className="border rounded-2xl overflow-hidden shadow"
                        >

                            <img
                                src="/placeholder.jpg"
                                alt={p.title}
                                className="w-full h-[220px] object-cover"
                            />

                            <div className="p-5">

                                <h2 className="text-2xl font-bold mb-2">
                                    {p.title}
                                </h2>

                                <p className="text-gray-500">
                                    {p.location}
                                </p>

                                <p className="font-bold text-xl mt-3">
                                    {p.price}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            ) : (

                <p className="text-red-500">
                    No properties found
                </p>

            )}

        </main>
    );
}