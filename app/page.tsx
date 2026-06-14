import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/home/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR + HERO */}
      <div className="relative">
        <Hero />
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">

        {/* Search Bar */}
        <div className="bg-white shadow-md rounded-xl p-3 flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full p-3 border rounded-lg outline-none"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
            Search
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto mt-6 pb-2">
          {["All", "Music", "Tech", "Sports", "Food", "Art"].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full border whitespace-nowrap hover:bg-black hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <h2 className="text-2xl font-bold mt-10 mb-5">
          Popular Events
        </h2>

        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold">Music Night Colombo</h3>
              <p className="text-sm text-gray-500">Colombo • Dec 20</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold">Tech Meetup 2026</h3>
              <p className="text-sm text-gray-500">Kandy • Jan 5</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold">Food Festival</h3>
              <p className="text-sm text-gray-500">Galle • Jan 10</p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}