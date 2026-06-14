import Link from "next/link";

export default function EventCard({ event }: any) {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">

        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold">
            {event.title}
          </h3>

          <p className="text-gray-500 text-sm">
            {event.location}
          </p>

          <p className="text-orange-500 mt-2 font-semibold">
            {event.price}
          </p>
        </div>

      </div>
    </Link>
  );
}