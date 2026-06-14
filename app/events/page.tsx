export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold">Discover Events</h1>

        {/* Search Bar */}
        <div className="mt-3 flex gap-2">
          <input
            placeholder="Search events..."
            className="w-full p-2 border rounded-lg"
          />
          <button className="px-4 bg-black text-white rounded-lg">
            Search
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 flex gap-2 overflow-x-auto">
        <button className="px-3 py-1 bg-black text-white rounded-full text-sm">
          All
        </button>
        <button className="px-3 py-1 bg-white border rounded-full text-sm">
          Music
        </button>
        <button className="px-3 py-1 bg-white border rounded-full text-sm">
          Tech
        </button>
        <button className="px-3 py-1 bg-white border rounded-full text-sm">
          Sports
        </button>
      </div>

      {/* Event Grid */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Event Card */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="h-40 bg-gray-200 rounded-t-xl"></div>
          <div className="p-3">
            <h2 className="font-semibold">Music Night Colombo</h2>
            <p className="text-sm text-gray-500">Colombo • Dec 20</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="h-40 bg-gray-200 rounded-t-xl"></div>
          <div className="p-3">
            <h2 className="font-semibold">Tech Meetup 2026</h2>
            <p className="text-sm text-gray-500">Kandy • Jan 5</p>
          </div>
        </div>

      </div>
    </div>
  );
}