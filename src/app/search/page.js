import { getProperties } from "@/lib/api";

export default async function SearchPage({ searchParams }) {

    const params = await searchParams;

    console.log(params);

 const filters = {
    city_id: params.city_id || "",
    property_type: params.property_type || "",
    developer_id: params.developer_id || "",
    purpose: params.purpose || "",
    search: params.search || "",
    budget: params.budget || "",
};

    const res = await getProperties(filters);

    const properties = res?.data?.data || [];

    

    return (
        <main className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold mb-10">
                Search Results
            </h1>

            {properties.length === 0 ? (
                <p>No results found</p>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">

                    {properties.map((p) => (
                        <div key={p.id} className="border rounded-xl p-4">
                            <h2 className="font-bold">{p.title}</h2>
                            <p>{p.city?.name}</p>
                            <p>{p.price}</p>
                        </div>
                    ))}

                </div>
            )}

        </main>
    );
}