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
    events: "245 Events",
  },
  {
    name: "Food",
    icon: UtensilsCrossed,
    events: "132 Events",
  },
  {
    name: "Sports",
    icon: Trophy,
    events: "98 Events",
  },
  {
    name: "Festival",
    icon: PartyPopper,
    events: "175 Events",
  },
  {
    name: "Business",
    icon: Briefcase,
    events: "87 Events",
  },
  {
    name: "Technology",
    icon: Laptop,
    events: "64 Events",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Explore Categories
          </h2>

          <p className="text-gray-500 mt-4">
            Find events that match your interests
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  cursor-pointer
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    mx-auto
                    rounded-2xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    group-hover:bg-orange-500
                    transition
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-orange-500
                      group-hover:text-white
                      transition
                    "
                  />
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
    </section>
  );
}