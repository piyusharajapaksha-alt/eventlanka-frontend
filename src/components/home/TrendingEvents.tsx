import EventCard from "../shared/EventCard";
import { trendingEvents } from "@/src/data/events";

export default function TrendingEvents() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-bold">
          Trending Events
        </h2>

        <button className="text-orange-500">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

    </section>
  );
}