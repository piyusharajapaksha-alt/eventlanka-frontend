export default function StatsSection() {
  const stats = [
    ["10K+", "Events Listed"],
    ["50K+", "Happy Users"],
    ["25+", "Cities"],
    ["100+", "Categories"],
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-20">

      <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-orange-500 p-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">

          {stats.map(([number, label]) => (
            <div key={label}>
              <h3 className="text-4xl font-bold">
                {number}
              </h3>

              <p>{label}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}