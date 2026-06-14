import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 mt-10">

      <div className="grid lg:grid-cols-4 gap-3">

        <input
          placeholder="Search events..."
          className="border rounded-xl p-3"
        />

        <select className="border rounded-xl p-3">
          <option>All Cities</option>
        </select>

        <select className="border rounded-xl p-3">
          <option>Today</option>
        </select>

        <button className="bg-orange-500 text-white rounded-xl flex items-center justify-center gap-2">
          <FaSearch />
          Search
        </button>

      </div>
    </div>
  );
}