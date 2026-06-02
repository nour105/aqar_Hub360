import { getCityProperties } from "@/lib/api";
import PropertyCard from "@/components/PropertyCard";

export default async function CityPropertiesPage({ params }) {

    const { id } = await params;

    const properties = await getCityProperties(id);

    console.log("PROPERTIES:", properties);

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold mb-10">
                City Properties
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {properties && properties.length > 0 ? (

                    properties.map((property) => (

                   <PropertyCard key={property.id} property={property} />

                    ))

                ) : (

                    <p>No properties found</p>

                )}

            </div>

        </main>
    );
}