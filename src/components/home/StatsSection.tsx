export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-10">
        <div className="grid md:grid-cols-4 text-center text-white">
          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p>Events</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">50K+</h2>
            <p>Users</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">25+</h2>
            <p>Cities</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p>Categories</p>
          </div>
        </div>
      </div>
    </section>
  );
}