"use client";

import { useState } from "react";
import LocationMap from "@/components/LocationMap";

export default function PropertyButtons({ location, bgImage }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-3 mt-5">

        {["Upfront Costs", "View on map", "Floor plan"].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "View on map") {
                setShowMap(!showMap);
              }
            }}
            className="h-[36px] px-5 text-[13px] cursor-pointer rounded-md bg-[#fff4f4] text-[#ff2a2a] hover:bg-red-500 hover:text-white transition" >
            {btn}
          </button>
        ))}

      </div>

      {/* MAP */}
      {showMap && (
        <div
          className="relative h-[150px] cursor-pointer bg-cover rounded-md bg-center mt-5"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <LocationMap location={location} />
        </div>
      )}

    </div>
  );
}