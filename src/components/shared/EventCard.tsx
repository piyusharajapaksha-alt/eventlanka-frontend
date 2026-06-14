type Props = {
  title: string;
  image: string;
  location: string;
};

export default function EventCard({
  title,
  image,
  location,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img
        src={image}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>

        <p className="text-gray-500 mt-2">
          {location}
        </p>
      </div>
    </div>
  );
}