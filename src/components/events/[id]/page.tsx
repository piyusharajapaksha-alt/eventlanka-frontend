export default function EventDetails() {
  return (
    <div className="min-h-screen bg-white">

      {/* Banner */}
      <div className="h-64 bg-gray-300"></div>

      <div className="max-w-3xl mx-auto p-5">

        {/* Title */}
        <h1 className="text-3xl font-bold">
          Music Night Colombo
        </h1>

        {/* Meta */}
        <p className="text-gray-500 mt-2">
          Colombo • December 20 • 7:00 PM
        </p>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Register
          </button>
          <button className="border px-4 py-2 rounded-lg">
            Save
          </button>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg">About this event</h2>
          <p className="text-gray-600 mt-2">
            Enjoy a night of live music featuring top artists in Colombo.
            Food, drinks, and entertainment included.
          </p>
        </div>

        {/* Map placeholder */}
        <div className="mt-6 h-40 bg-gray-200 rounded-xl flex items-center justify-center">
          Map Location
        </div>

      </div>
    </div>
  );
}