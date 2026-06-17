import Image from "next/image";
import Gradient from "../../../public/aqarHub_ASSESTS/Gradient.png";
import {
    ShieldCheck,
    Handshake,
    CirclePlay,
    Phone,
    Mail,
    MapPin,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* HERO SECTION */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold tracking-wide">ABOUT US</h1>

        <p className="max-w-3xl mx-auto text-gray-500 mt-4 text-sm leading-relaxed">
          We are a real estate platform dedicated to connecting buyers, sellers,
          and investors with the best properties in the market. Our mission is
          to simplify property discovery and make real estate decisions faster,
          smarter, and more transparent.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">
          {[
            { number: "4,820", label: "ACTIVE LISTINGS" },
            { number: "100+", label: "CLIENTS" },
            { number: "320+", label: "VERIFIED AGENTS" },
            { number: "20+", label: "CITIES COVERED" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-lg py-5 shadow-sm"
            >
              <div className="text-xl font-bold">{item.number}</div>
              <div className="text-xs text-gray-500 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPANY SECTION */}
      <div className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold mb-6">ABOUT OUR COMPANY</h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* MISSIONS */}
          <div className="space-y-6">
            {[
              {
                id: "01",
                title: "OUR MISSION",
                desc:
                  "We provide a seamless real estate experience by offering accurate listings, verified developers, and advanced search tools.",
              },
              {
                id: "02",
                title: "OUR VISION",
                desc:
                  "To redefine property discovery by making it faster, simpler, and more transparent for everyone.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-start border-b pb-5"
              >
                <div className="text-2xl font-light text-gray-400">
                  {item.id}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>

                <span className="text-gray-400">→</span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold">
            LEARN MORE
          </button>
        </div>

        {/* RIGHT SIDE IMAGE CARD */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
     <img
  src={Gradient.src}
  alt="gradient"
  className="w-full h-full object-cover"
/>

          {/* overlay label */}
          <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-2 rounded-md">
            Project name goes here
          </div>
        </div>
      </div>

                  <section className="bg-[#EFEFEF] py-20 rounded-[28px] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-14">

                        <span className="uppercase text-[11px] tracking-[3px] text-red-500 font-semibold">
                            Discover Why We Stand Out
                        </span>

                        <h2 className="text-[58px] leading-none font-black uppercase text-black mt-3">
                            Why Choose Aqar Hub 360
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-6">

                        {[
                            {
                                icon: ShieldCheck,
                                title: "Verified Listings",
                                desc:
                                    "Every property is carefully reviewed to ensure accurate information and trusted listings.",
                            },
                            {
                                icon: Handshake,
                                title: "Trusted Agents",
                                desc:
                                    "Work directly with professional real estate experts and agencies.",
                            },
                            {
                                icon: CirclePlay,
                                title: "Fast Search",
                                desc:
                                    "Powerful filtering tools help you find the perfect rental property quickly.",
                            },
                        ].map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={i}
                                    className="
                            bg-[#F7F4F1]
                            border
                            border-[#DDDDDD]
                            rounded-[18px]
                            p-6
                            flex
                            items-start
                            gap-4
                            hover:-translate-y-1
                            transition
                        "
                                >
                                    <div
                                        className="
                                w-[56px]
                                h-[56px]
                                rounded-full
                                bg-black
                                text-white
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                                    >
                                        <Icon size={24} />
                                    </div>

                                    <div>
                                        <h3 className="uppercase font-black text-lg">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-2 leading-6">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
               <section className="relative py-24 overflow-hidden">

                {/* dark bg */}
                <div className="absolute inset-0 bg-[#0F0A0A]" />

                {/* red glow */}
                <div
                    className="
            absolute
            bottom-[-120px]
            left-0
            w-[600px]
            h-[300px]
            bg-[#FF1A1A]
            blur-[180px]
            opacity-40
        "
                />

                <div className="relative max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-10 items-center">
                        <div>

                            <span className="text-[11px] uppercase tracking-[3px] text-red-500 font-semibold">
                                Discover Your New Home
                            </span>

                            <h2
                    className="mt-6 text-white uppercase font-black text-[42px] sm:text-[60px] lg:text-[90px] leading-[0.9]"
                            >
                                Your Next Address
                                <br />
                                <span className="text-gray-500">
                                    Awaits You.
                                </span>
                            </h2>

                        </div>

                        <div className="space-y-6 text-white">

                            <div className="flex items-center gap-3">
                                <Phone size={16} />
                                <span>+971 58 532 0443</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={16} />
                                <span>hello@aqarhub360.com</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin size={16} />
                                <span>
                                    540 Park Ave,
                                    <br />
                                    New York
                                </span>
                            </div>

                            <Link
                                href="/properties"
                                className="
                        inline-flex
                        items-center
                        gap-3
                        bg-[#FF2323]
                        hover:bg-red-600
                        px-8
                        py-4
                        rounded-full
                        font-semibold
                        mt-6
                    "
                            >
                                Browse All Properties
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                    </div>

                </div>

            </section>
    </div>
  );
}