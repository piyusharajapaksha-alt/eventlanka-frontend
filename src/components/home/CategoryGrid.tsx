import {
  Music,
  UtensilsCrossed,
  Trophy,
  PartyPopper,
  Briefcase,
  Laptop,
} from "lucide-react";

const categories = [
  {
    name: "Music",
    icon: Music,
    color: "linear-gradient(135deg,#ff416c,#ff4b2b)",
    events: "245 Events",
  },
  {
    name: "Food",
    icon: UtensilsCrossed,
    color: "linear-gradient(135deg,#f7971e,#ffd200)",
    events: "132 Events",
  },
  {
    name: "Sports",
    icon: Trophy,
    color: "linear-gradient(135deg,#56ccf2,#2f80ed)",
    events: "98 Events",
  },
  {
    name: "Festival",
    icon: PartyPopper,
    color: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
    events: "175 Events",
  },
  {
    name: "Business",
    icon: Briefcase,
    color: "linear-gradient(135deg,#0ba360,#3cba92)",
    events: "87 Events",
  },
  {
    name: "Technology",
    icon: Laptop,
    color: "linear-gradient(135deg,#434343,#000000)",
    events: "64 Events",
  },
];

export default function CategoryGrid() {
  return (
    <section className="relative z-20 -mt-20 md:-mt-20">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.name}
                  className="group rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white"
                >
                  {/* Gradient Icon Box */}
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: category.color }}
                  >
                    <Icon size={30} className="text-white" />
                  </div>

                  <h3 className="mt-5 text-center font-semibold">
                    {category.name}
                  </h3>

                  <p className="text-center text-sm text-gray-500 mt-2">
                    {category.events}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}