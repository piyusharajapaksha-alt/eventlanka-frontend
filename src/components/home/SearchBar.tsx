export default function SearchBar() {
  return (
    <div className="relative z-30 -mt-24 max-w-6xl mx-auto px-6">
      <div className="backdrop-blur-xl bg-white/90 border border-white/30 shadow-2xl rounded-3xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Search events..."
            className="h-14 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <select className="h-14 px-4 rounded-xl border border-gray-200">
            <option>All Locations</option>
            <option>Colombo</option>
            <option>Kandy</option>
            <option>Galle</option>
            <option>Jaffna</option>
          </select>

          <input
            type="date"
            className="h-14 px-4 rounded-xl border border-gray-200"
          />

          <button className="h-14 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
            Search Events
          </button>

        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-gray-500 text-sm">
            Popular:
          </span>

          {[
            "Music",
            "Festival",
            "Sports",
            "Food",
            "Technology",
            "Business"
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}