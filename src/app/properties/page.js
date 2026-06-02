import { getProperties } from "@/lib/api";
import PropertyCard from "@/components/PropertyCard";

export default async function PropertiesPage() {
    const propertiesRes = await getProperties();

    const properties = propertiesRes?.data?.data || [];

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold mb-10">
                Properties
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}

            </div>

        </main>
    );
}