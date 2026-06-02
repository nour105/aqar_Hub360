"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

export default function DevelopersSlider({ developers = [] }) {
    return (
        <section className="py-24 bg-white">

            <div className="container mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-14">

                    <h2 className="text-5xl font-bold">
                        Our Developers
                    </h2>

                    <p className="text-gray-500 mt-4">
                        Trusted real estate partners
                    </p>

                </div>

                {/* SLIDER */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={5}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >

                    {developers.map((dev) => (
                        <SwiperSlide key={dev.id}>

                            <Link
                                href={`/developers/${dev.id}`}
                                className="flex flex-col items-center group cursor-pointer"
                            >

                                {/* IMAGE */}
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden group-hover:scale-110 transition">

                                    {dev.logo ? (
                                        <Image
                                            src={`https://admin.aqarhub360.com/storage/${dev.logo}`}
                                            alt={dev.name}
                                            width={80}
                                            height={80}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span className="text-xl font-bold text-gray-400">
                                            {dev.name?.charAt(0)}
                                        </span>
                                    )}

                                </div>

                                {/* NAME */}
                                <p className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-emerald-600 transition">
                                    {dev.name}
                                </p>

                            </Link>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

        </section>
    );
}