"use client";

export default function MapButton({ location }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location || ""
  )}`;

  return (
    <button
      onClick={() => window.open(mapUrl, "_blank")}
      className="mt-8 px-8 h-[42px]  rounded-full cursor-pointer bg-[#ff0000] text-white text-[13px] font-medium">
      See Location →
    </button>
  );
}