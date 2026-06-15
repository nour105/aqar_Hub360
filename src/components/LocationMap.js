"use client";
import { MapPin } from "lucide-react";
import MAPpin from  '../../public/aqarHub_ASSESTS/mapPing.png'
export default function LocationMap({ location }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location || ""
  )}`;

  return (
    <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-center  z-20">

      <div className="text-[14px] font-bold text-black">
<img src={MAPpin.src} alt="Map Pin" className="w-6 inline-block mr-2" />
        {location}
      </div>

 <button
  onClick={() => window.open(mapUrl, "_blank")}
  className="flex items-center gap-1 bg-[#F7F5F2] p-2 border-[#F7F5F2] rounded-md text-[#ff2a2a] cursor-pointer text-sm hover:underline"
>
  <MapPin size={16} className="text-[#ff2a2a]" />
  View on map
</button>

    </div>
  );
}