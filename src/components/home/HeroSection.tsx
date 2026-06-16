import Navbar from "../layout/Navbar";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-30">

        <div className="max-w-3xl">

          <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            Discover • Connect • Enjoy
          </span>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mt-6 leading-tight">
            Discover Amazing Events Across<br/>
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </h1>

          <p className="text-gray-300 mt-5 text-lg max-w-2xl">
            Find festivals, concerts, cultural events, sports and more.
          </p>

        </div>

        {/* Search Bar */}
        <div className="mt-20 max-w-7xl">
          <SearchBar />
        </div>

      </div>

    </section>
  );
}