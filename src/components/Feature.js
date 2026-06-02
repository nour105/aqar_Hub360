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