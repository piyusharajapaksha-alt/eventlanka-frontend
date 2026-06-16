"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="font-bold text-2xl text-white">
          Event
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Lanka
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Map</Link>
          <Link href="/">About</Link>
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden lg:flex gap-3">
          {!isLoggedIn ? (
            <>
              <button className="border border-white/30 text-white px-5 py-2 rounded-lg">
                Login
              </button>
              <button className="bg-orange-500 px-5 py-2 rounded-lg text-white">
                Register
              </button>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="text-white px-5 py-2">
                Dashboard
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-500 px-5 py-2 rounded-lg text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 text-white flex flex-col p-6">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-bold">Menu</h2>

            <button onClick={closeMenu} className="text-2xl">
              <FaTimes />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-5 text-lg">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/events" onClick={closeMenu}>Events</Link>
            <Link href="/" onClick={closeMenu}>Categories</Link>
            <Link href="/" onClick={closeMenu}>Map</Link>
            <Link href="/" onClick={closeMenu}>About</Link>
          </div>

          {/* AUTH */}
          <div className="mt-10 flex flex-col gap-4">
            {!isLoggedIn ? (
              <>
                <button className="border border-white/30 py-3 rounded-lg">
                  Login
                </button>
                <button className="bg-orange-500 py-3 rounded-lg">
                  Register
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  onClick={closeMenu}
                  className="py-3 text-center bg-white/10 rounded-lg"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    closeMenu();
                  }}
                  className="py-3 bg-red-500 rounded-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>

        </div>
      )}
    </nav>
  );
}