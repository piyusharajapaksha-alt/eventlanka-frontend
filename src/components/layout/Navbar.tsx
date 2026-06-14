import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Event<span className="text-orange-500">Lanka</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/map">Map</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg text-white">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}