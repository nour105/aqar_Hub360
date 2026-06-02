import Link from "next/link";

export default function PropertyCard({ property }) {
    return (
        <Link
            href={`/properties/${property.slug || property.id}`}
            className="group flex bg-white rounded-2xl overflow-hidden border hover:shadow-2xl transition-all duration-300"
        >
            {/* IMAGE */}
            <div className="relative w-[42%] min-h-[220px] overflow-hidden">
                <img
                    src={
                        property.cover ||
                        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
                    }
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* PRICE */}
                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-md">
                    {property.price}
                </div>

                {/* TYPE */}
                <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full capitalize font-medium">
                    {property.property_type}
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex-1 flex flex-col justify-between">

                {/* TITLE + LOCATION */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-600 transition">
                        {property.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        📍 {property.city?.name || property.location}
                    </p>

                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                        {property.description ||
                            "Modern residence in a prime location with premium finishing and excellent amenities."}
                    </p>
                </div>

                {/* STATS (CLEAN + MODERN) */}
                <div className="flex items-center gap-5 text-xs text-gray-600 mt-4">

                    <div className="flex flex-col items-center">
                        <span className="text-gray-900 font-semibold">
                            {property.bedrooms || 0}
                        </span>
                        <span className="text-gray-400">Beds</span>
                    </div>

                    <div className="w-px h-6 bg-gray-200"></div>

                    <div className="flex flex-col items-center">
                        <span className="text-gray-900 font-semibold">
                            {property.bathrooms || 0}
                        </span>
                        <span className="text-gray-400">Baths</span>
                    </div>

                    <div className="w-px h-6 bg-gray-200"></div>

                    <div className="flex flex-col items-center">
                        <span className="text-gray-900 font-semibold">
                            {property.area_sqft || 0}
                        </span>
                        <span className="text-gray-400">Sqft</span>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-4 border-t pt-3">

                    <span className="text-xs text-gray-500">
                        <span className="font-medium text-gray-700">
                            {property.developer?.name || "Developer"}
                        </span>
                    </span>

                    <span className="text-emerald-600 font-semibold text-sm group-hover:translate-x-1 transition">
                        View Details →
                    </span>
                </div>
            </div>
        </Link>
    );
}