import Navbar from "../layout/Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <Navbar />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        <h1 className="text-3xl md:text-6xl font-bold">
          Discover Events Across Sri Lanka
        </h1>

        <p className="mt-4 text-gray-300">
          Find concerts, festivals, food events & more.
        </p>

        <button className="mt-6 bg-orange-500 px-6 py-3 rounded-lg">
          Explore Events(Adare nane enam ba)
        </button>

      </div>

    </section>
  );
}