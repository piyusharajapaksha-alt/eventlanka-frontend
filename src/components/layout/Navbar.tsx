"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        <Link
          href="/"
          className="text-white font-bold text-2xl"
        >
          EventLanka
        </Link>

        <div className="hidden lg:flex gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Map</Link>
          <Link href="/">About</Link>
        </div>

        <div className="hidden lg:flex gap-3">
          <button className="border border-white/30 text-white px-5 py-2 rounded-lg">
            Login
          </button>

          <button className="bg-orange-500 px-5 py-2 rounded-lg text-white">
            Register
          </button>
        </div>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 text-white p-5 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Map</Link>
          <Link href="/">About</Link>
        </div>
      )}
    </nav>
  );
}