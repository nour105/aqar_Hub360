import Image from "next/image";
import { notFound } from "next/navigation";
import bgLocation from "../../../../public/aqarHub_ASSESTS/Mappreview.png";
import LocationMap from "@/components/LocationMap";

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

  const gallery =
    property.gallery_images?.length > 0
      ? property.gallery_images
      : [{ url: property.cover_image }];

  return (
    <main className="bg-[#f5f5f5] min-h-screen">

      {/* TOP GALLERY */}
      <section className="max-w-[1280px] mx-auto px-5 pt-5">

        <div className="grid lg:grid-cols-[2fr_1fr] gap-2">

          <img
            src={property.cover_image}
            className="
            h-[420px]
            w-full
            object-cover
            rounded-xl
            "
          />

          <div className="grid grid-rows-2 gap-2">

            {gallery.slice(0, 2).map((img, i) => (
              <img
                key={i}
                src={img.url}
                className="
                h-[205px]
                rounded-xl
                object-cover
                w-full
                "
              />
            ))}

          </div>

        </div>

      </section>

      <section className="max-w-[1280px] mx-auto px-5 py-6">

        <div className="grid lg:grid-cols-[1fr_320px] gap-5">

          {/* LEFT */}
          <div className="bg-[#f5f5f5]">

            {/* PRICE */}

            <div className="pb-8 border-b border-[#e3e3e3]">

              <h1 className="text-[34px] font-bold text-[#2a2a2a]">
                {property.price}
              </h1>

              <div className="flex gap-5 mt-4 text-[13px] text-[#6d6d6d]">

                <span>
                  🛏 {property.bedrooms || "-"} Beds
                </span>

                <span>
                  🛁 {property.bathrooms || "-"} Baths
                </span>

                <span>
                  📐 {property.area_sqft} sqft
                </span>

              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-3 mt-5">

                {[
                  "Upfront Costs",
                  "View on map",
                  "Floor plan",
                ].map((btn) => (

                  <button
                    key={btn}
                    className="
          h-[36px]
          px-5
          text-[13px]
          rounded-md
          bg-[#fff4f4]
          text-[#ff2a2a]
          hover:bg-red-500
          hover:text-white
          transition
          "
                  >
                    {btn}
                  </button>

                ))}

              </div>

            </div>



            {/* DESCRIPTION */}

            <section className="py-8 border-b border-[#e3e3e3]">

              <div className="text-[#b8b8b8] text-[11px] mb-2">
                Apartment | For Rent
              </div>

              <h2
                className="
      text-[38px]
      uppercase
      font-black
      leading-[1.1]
      text-[#222]
      mb-5
      "
              >
                {property.title}
              </h2>

              <div className="text-[13px] text-[#ff3131] mb-5">

                Available From:
                <span className="font-bold ml-2">
                  6-12-2026
                </span>

              </div>

              <p
                className="
      text-[#666]
      text-[14px]
      leading-[28px]
      "
              >
                {property.description}
              </p>


              {/* FEATURES */}

              {/* <div className="mt-8">

      <div
        className="
        font-semibold
        text-[14px]
        mb-4
        "
      >
        Property Features :
      </div>

      <div className="grid md:grid-cols-2 gap-y-4">

        <Feature text="Bright and spacious layout" />
        <Feature text="Kitchen fully furnished with appliances" />

        <Feature text="Modern interior" />
        <Feature text="Balcony with community views" />

        <Feature text="Built-in wardrobes" />
        <Feature text="Covered parking" />

      </div>

    </div> */}


              <button
                className="
      mt-8
      px-8
      h-[42px]
      rounded-full
      bg-[#ff0000]
      text-white
      text-[13px]
      font-medium
      "
              >
                See Location →
              </button>

            </section>



            {/* AMENITIES */}

            <section className="py-8 ">

              <h3
                className="
      text-[34px]
      font-black
      uppercase
      mb-8
      "
              >
                Amenities
              </h3>

              <div
                className="
      grid
      md:grid-cols-3
      gap-y-5
      text-[14px]
      "
              >

                {property.amenities?.map((a) => (

                  <div
                    key={a.id}
                    className="
          flex
          items-center
          gap-3
          "
                  >

                    <span className="text-[#555]">
                      ⌂
                    </span>

                    <span>
                      {a.name}
                    </span>

                  </div>

                ))}

              </div>

            </section>



            {/* LOCATION */}
          <h3
                className="
      text-[34px]
      font-black
      uppercase
      mb-8
      "
              >
                Location
              </h3>

  <div
  className="relative h-[150px] bg-cover rounded-md bg-center"
  style={{
    backgroundImage: `url(${bgLocation.src})`,
  }}
>

  <LocationMap location={property.location} />
</div>

          </div>

          {/* RIGHT */}

          <aside className="sticky top-6 h-fit space-y-5">

            {/* AGENT */}

            <div className="bg-white rounded-xl p-5">

              <div className="flex items-center gap-4">

                {/* <img
                  src={
                    property.agent?.photo ||
                    `https://ui-avatars.com/api/?name=${property.agent?.name}`
                  }
                  className="
                  w-16
                  h-16
                  rounded-full
                  object-cover
                  "
                /> */}

                <div>

                  <div className="font-bold">
                    {/* {property.agent?.name} */}
                  </div>

                  <div className="text-sm text-gray-500">
                    Property Consultant
                  </div>

                </div>

              </div>

              <button
                className="
                mt-5
                w-full
                bg-red-500
                text-white
                rounded-full
                py-3
                "
              >
                Contact Agent
              </button>

            </div>

            {/* AGENCY */}

            <div className="bg-white rounded-xl p-5 text-center">

              <img
                src={property.agency?.logo}
                className="
                h-14
                mx-auto
                object-contain
                "
              />

              <div className="mt-4 font-semibold">
                {property.agency?.name}
              </div>

            </div>

            {/* PROPERTY CARD */}

            <div className="bg-white rounded-xl overflow-hidden">

              <img
                src={property.cover_image}
                className="
                h-[180px]
                w-full
                object-cover
                "
              />

              <div className="p-4">

                <div className="font-bold text-[22px]">
                  {property.price}
                </div>

                <div className="mt-2 line-clamp-2">

                  {property.title}

                </div>

                <button
                  className="
                  mt-5
                  w-full
                  border
                  border-red-500
                  text-red-500
                  rounded-full
                  py-3
                  "
                >
                  View Details
                </button>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}

function Feature({ text }) {
  return (
    <div
      className="
      flex
      items-start
      gap-3
      text-[14px]
      text-[#555]
      "
    >
      <span>•</span>
      <span>{text}</span>
    </div>
  );
}