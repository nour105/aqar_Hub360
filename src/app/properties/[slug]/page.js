import Image from "next/image";
import { notFound } from "next/navigation";

async function getProperty(slug) {
  try {
    const res = await fetch(
      `https://admin.aqarhub360.com/api/properties/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    if (!data.success) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const property = await getProperty(slug);

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: property.title,
    description: property.description || property.title,
  };
}

export default async function PropertyPage({ params }) {
  const { slug } = await params;

  const property = await getProperty(slug);

  if (!property) {
    notFound();
  }

return (
  <div className="bg-[#f8f9fb] min-h-screen">
    {/* HERO */}

    <section className="relative h-[650px]">
      <img
        src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2000"
        alt={property.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 pb-10 text-white">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
              {property.purpose}
            </span>

            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              {property.property_type}
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-3">
            {property.title}
          </h1>

          <p className="text-lg opacity-90">
            {property.location}, {property.city?.name},{" "}
            {property.country?.name}
          </p>

          <div className="mt-6 text-4xl font-bold">
            {property.price}
          </div>
        </div>
      </div>
    </section>

    {/* CONTENT */}

    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* LEFT */}

        <div className="lg:col-span-2 space-y-8">
          {/* FEATURES */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="grid grid-cols-4 gap-6">
              <Feature
                title="Bedrooms"
                value={property.bedrooms}
              />

              <Feature
                title="Bathrooms"
                value={property.bathrooms}
              />

              <Feature
                title="Area"
                value={`${property.area_sqft} sqft`}
              />

              <Feature
                title="Type"
                value={property.property_type}
              />
            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-5">
              Description
            </h2>

            <p className="text-gray-600 leading-8">
              {property.description ||
                "Luxury property located in one of the most desirable locations in Dubai. Designed for modern living with premium finishes and excellent amenities."}
            </p>
          </div>

          {/* DETAILS */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">
              Property Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <Detail
                label="Reference Number"
                value={property.reference_no}
              />

              <Detail
                label="Purpose"
                value={property.purpose}
              />

              <Detail
                label="Property Type"
                value={property.property_type}
              />

              <Detail
                label="Unit Type"
                value={property.unit_type}
              />

              <Detail
                label="City"
                value={property.city?.name}
              />

              <Detail
                label="Country"
                value={property.country?.name}
              />
            </div>
          </div>

          {/* AMENITIES */}

          {property.amenities?.length > 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">
                Amenities
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {property.amenities.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-xl p-4 font-medium"
                  >
                    ✓ {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR */}

        <div className="space-y-6">
          {/* CONTACT */}

          <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-24">
            <h3 className="text-2xl font-bold mb-6">
              Contact Agent
            </h3>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200" />

              <div>
                <div className="font-bold text-lg">
                  {property.agent?.name}
                </div>

                <div className="text-gray-500">
                  Property Consultant
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <p>{property.agent?.phone}</p>
              <p>{property.agent?.email}</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold">
              Call Agent
            </button>
          </div>

          {/* DEVELOPER */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              Developer
            </h3>

            <div className="font-semibold text-lg">
              {property.developer?.name}
            </div>

            <p className="text-gray-600 mt-3">
              {property.developer?.description}
            </p>
          </div>

          {/* LOCATION */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              Location
            </h3>

            <p>{property.location}</p>
            <p>{property.city?.name}</p>
            <p>{property.country?.name}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}


function Feature({ title, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">
        {value}
      </div>

      <div className="text-gray-500 text-sm mt-1">
        {title}
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="border rounded-xl p-4">
      <div className="text-sm text-gray-500">
        {label}
      </div>

      <div className="font-semibold mt-1">
        {value || "-"}
      </div>
    </div>
  );
}