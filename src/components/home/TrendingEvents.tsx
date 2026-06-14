import EventCard from "../shared/EventCard";

export default function TrendingEvents() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-bold">
          Trending Events
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <EventCard
          title="Vesak Festival"
          location="Colombo"
          image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
        />

        <EventCard
          title="Music Expo"
          location="Colombo"
          image="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
        />

        <EventCard
          title="Kandy Perahera"
          location="Kandy"
          image="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
        />

        <EventCard
          title="Food Festival"
          location="Galle"
          image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
        />
      </div>
    </section>
  );
}