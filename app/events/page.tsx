export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔝 TOP NAVBAR */}
      <div className="sticky top-0 z-50 bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        
        <h1 className="text-xl font-bold">EventLanka</h1>

        {/* Search */}
        <div className="flex items-center gap-2 w-full max-w-md mx-4">
          <input
            placeholder="Search events..."
            className="w-full px-3 py-2 border rounded-lg outline-none"
          />
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            Search
          </button>
        </div>

        <div className="flex gap-2">
          <button className="px-3 py-2 text-sm border rounded-lg">
            Create
          </button>
          <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* 🧭 FILTER BAR */}
      <div className="bg-white px-4 py-3 flex gap-2 overflow-x-auto border-b">
        <button className="px-3 py-1 bg-black text-white rounded-full text-sm">
          All
        </button>
        <button className="px-3 py-1 bg-white border rounded-full text-sm">
          🔴 Live
        </button>
        <button className="px-3 py-1 bg-white border rounded-full text-sm">
          🔵 Upcoming
        </button>
        <button className="px-3 py-1 bg-white border rounded-full text-sm">
          ⚫ Past
        </button>
        <button className="px-3 py-1 bg-white border rounded-full text-sm">
          📍 Near Me
        </button>
      </div>

      {/* 📦 MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4">

        {/* 🟦 FEED */}
        <div className="md:col-span-3 space-y-4">

          {/* EVENT POST */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

            {/* Organizer */}
            <div className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold">Event Lanka Official</p>
                <p className="text-xs text-gray-500">Organizer</p>
              </div>
            </div>

            {/* Event Title */}
            <div className="px-4">
              <h2 className="text-lg font-bold">
                🎤 Music Night Colombo 2026
              </h2>
              <p className="text-sm text-gray-500">
                Colombo • Dec 20 • 7:00 PM • 🔵 Upcoming
              </p>
            </div>

            {/* Image */}
            <div className="h-52 bg-gray-200 mt-3"></div>

            {/* Description */}
            <p className="px-4 py-3 text-sm text-gray-600">
              Join the biggest music night in Colombo with DJs, live bands,
              food stalls and amazing crowd energy.
            </p>

            {/* Actions */}
            <div className="flex items-center justify-between px-4 py-3 border-t text-sm">

              <div className="flex gap-4">
                <button>👍 Like</button>
                <button>💬 Comment</button>
                <button>🔗 Share</button>
                <button>💾 Save</button>
              </div>

              <button className="bg-black text-white px-4 py-1 rounded-lg">
                More Info →
              </button>
            </div>
          </div>

          {/* SECOND EVENT */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold">Tech Sri Lanka</p>
                <p className="text-xs text-gray-500">Organizer</p>
              </div>
            </div>

            <div className="px-4">
              <h2 className="text-lg font-bold">
                💻 Tech Meetup 2026
              </h2>
              <p className="text-sm text-gray-500">
                Kandy • Jan 5 • 🔵 Upcoming
              </p>
            </div>

            <div className="h-52 bg-gray-200 mt-3"></div>

            <p className="px-4 py-3 text-sm text-gray-600">
              Developers meetup with AI, Web, Mobile and Startup talks.
            </p>

            <div className="flex items-center justify-between px-4 py-3 border-t text-sm">
              <div className="flex gap-4">
                <button>👍 Like</button>
                <button>💬 Comment</button>
                <button>🔗 Share</button>
                <button>💾 Save</button>
              </div>

              <button className="bg-black text-white px-4 py-1 rounded-lg">
                More Info →
              </button>
            </div>

          </div>

        </div>

        {/* 📊 RIGHT SIDEBAR */}
        <div className="hidden md:block space-y-4">

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">🔥 Trending Events</h3>
            <p className="text-sm">Colombo Music Fest</p>
            <p className="text-sm">AI Summit Sri Lanka</p>
            <p className="text-sm">Food Carnival</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">📍 Near You</h3>
            <p className="text-sm">Beach Party</p>
            <p className="text-sm">Startup Meetup</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">⭐ Recommended</h3>
            <p className="text-sm">Coding Bootcamp</p>
            <p className="text-sm">Music Workshop</p>
          </div>

        </div>

      </div>
    </div>
  );
}