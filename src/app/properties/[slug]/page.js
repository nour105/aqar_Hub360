import Image from "next/image";
import { notFound } from "next/navigation";
import bgLocation from "../../../../public/aqarHub_ASSESTS/Mappreview.png";
import LocationMap from "@/components/LocationMap";
import MapButton from "@/components/MapButton";
import PropertyButtons from "@/components/PropertyButtons";
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
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  property.location || ""
)}`;
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
                  🛁 {property.bathrooms || "-"} Baths
                </span>

                <span>
                  📐 {property.area_sqft} sqft
                </span>

              </div>

              {/* BUTTONS */}

            <PropertyButtons
  location={property.location}
  bgImage={bgLocation.src}
/>

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


<MapButton location={property.location} />

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
{/* AGENT */}

<div
  className="
  relative
  bg-[#f6f4f4]
  border
  border-[#dddddd]
  rounded-[14px]
  px-5
  pb-7
  pt-12
  text-center
  "
>

  {/* IMAGE */}

  <div
    className="
    absolute
    -top-8
    left-1/2
    -translate-x-1/2
    "
  >

    <div className="relative">

  <img
  src="/aqarHub_ASSESTS/aqarFav.png"
  alt="AqarHub Logo"
  className="w-full h-full object-cover"
/>

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[22px]
        h-[22px]
        rounded-full
        bg-[#ff4141]
        text-white
        text-[11px]
        flex
        items-center
        justify-center
        border-2
        border-white
        "
      >
        ★
      </div>

    </div>

  </div>

  {/* NAME */}

<h3
  className="
  text-[16px]
  uppercase
  font-medium
  text-[#333]
  tracking-[0.5px]
  "
>
  PROPERTY CONSULTANT
</h3>
  {/* BUTTONS */}
  <div className="grid grid-cols-2 gap-2 mt-5">

    <a
     href="tel:+971585320443"
      className="
      h-[42px]
      rounded-full
      border
      border-[#ff8080]
      bg-white
      text-[#ff2c2c]
      text-[13px]
      flex
      items-center
      justify-center
      gap-2
      font-medium
      "
    >
      📞 Call
    </a>

    <a
     href="https://wa.me/971585320443"
      target="_blank"
      className="
      h-[42px]
      rounded-full
      bg-[#ff0000]
      text-white
      text-[13px]
      flex
      items-center
      justify-center
      gap-2
      font-medium
      "
    >
      💬 Whatsapp
    </a>

  </div>


  {/* DETAILS */}

  <div className="mt-5">

    <div
      className="
      text-[12px]
      text-[#555]
      "
    >
      ⭐ <span className="font-bold">5.0</span>
      <span className="ml-1">
        12 Ratings
      </span>
    </div>

    <div
      className="
      mt-2
      text-[12px]
      text-[#666]
      "
    >
      Usually Responds
      <span className="font-bold text-black">
        {" "}
        Within 5 Minutes
      </span>
    </div>

    <div
      className="
      mt-3
      text-[12px]
      text-[#777]
      "
    >
      🗨 English, Arabic
    </div>
<div
    className="rounded-[14px]  flex items-center justify-center px-8 "
  >
    <img
      src={property.agency?.logo}
      alt=""
      className="max-h-[150px] object-contain"
    />

  </div>
  </div>
</div>


           {/* Sponsored Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100">

                            <div className="bg-red-50 px-4 py-3 border-b">
                                <span className="text-red-600 font-bold text-sm uppercase">
                                    Sponsored
                                </span>
                            </div>

                            <div className="relative h-[320px]">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-4xl font-bold">
                                    AED 4,200,000
                                </h2>

                                <h3 className="text-xl font-semibold mt-3">
                                    Full Floor Residence Penthouse
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    📍 Downtown Dubai
                                </p>
                            </div>

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