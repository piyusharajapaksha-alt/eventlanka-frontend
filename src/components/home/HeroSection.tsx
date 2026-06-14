import Navbar from "../layout/Navbar";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="relative min-h-[750px]">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-36">

        <div className="max-w-3xl">
          <span className="bg-white/10 px-4 py-2 rounded-full text-white">
            Discover • Connect • Enjoy
          </span>

          <h1 className="text-white text-4xl md:text-7xl font-bold mt-6">
            Discover Amazing Events Across
            <span className="text-orange-500"> Sri Lanka</span>
          </h1>

          <p className="text-gray-300 mt-5 text-lg">
            Find festivals, concerts, cultural events,
            sports and more.
          </p>

          <SearchBar />
        </div>

      </div>
    </section>
  );
}