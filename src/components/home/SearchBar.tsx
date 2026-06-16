import {
  Search,
  MapPin,
  Calendar,
  Sun,
  SunDim,
  CalendarDays,
  MapPinned,
  Ticket,
  Radio,
} from "lucide-react";

export default function SearchBar() {
  const filters = [
    { label: "Today", icon: Calendar },
    { label: "Tomorrow", icon: CalendarDays },
    { label: "This Weekend", icon: Sun },
    { label: "Nearby", icon: MapPinned },
    { label: "Free Events", icon: Ticket },
    { label: "Live Events", icon: Radio },
  ];

  return (
    <section className="w-full">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-4">

        {/* Search Row */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch">

          {/* Search Input */}
          <div className="flex-[3] relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <Search size={16} className="text-orange-500" />
            </div>

            <input
              type="text"
              placeholder="Search events, places, categories..."
              className="w-full h-14 pl-12 pr-5 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Location */}
          <div className="flex-1">
            <select className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none">
              <option>All Cities</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex-1">
            <select className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none">
              <option>Today</option>
            </select>
          </div>

          {/* Button */}
          <button className="lg:w-[180px] h-14 px-8 rounded-2xl text-white font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition">
            Search
          </button>

        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-orange-100 hover:text-orange-600 transition"
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}