export default function SearchBar() {
  return (
    <section className="max-w-7xl mx-auto px-4 -mt-0">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-6 border border-gray-100">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

          <input
            placeholder="Search events, places, categories..."
            className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200
            focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <option>All Cities</option>
          </select>

          <select className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <option>Any Date</option>
          </select>

          <button className="w-full p-4 rounded-2xl text-white font-semibold
          bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition">
            Search
          </button>

        </div>

      </div>
    </section>
  );
}