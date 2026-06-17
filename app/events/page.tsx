"use client";

import Navbar from "@/src/components/layout/Navbar";
import EventCard from "@/src/components/shared/EventCard";
import { trendingEvents } from "@/src/data/events";
import {
  Flame,
  MapPin,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";

/* ================= SAMPLE FEED DATA ================= */
const feedEvents = [
  {
    id: 1,
    user: "Event Lanka Official",
    title: "Colombo Music Festival 2026",
    location: "Colombo",
    date: "Dec 20 • 7:00 PM",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    likes: 245,
    comments: 32,
    going: 120,
    status: "LIVE",
  },
  {
    id: 2,
    user: "Tech Sri Lanka",
    title: "AI & Startup Meetup",
    location: "Kandy",
    date: "Jan 5 • 9:00 AM",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    likes: 180,
    comments: 19,
    going: 95,
    status: "UPCOMING",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 mt-24">

        {/* ================= STORIES (LIVE EVENTS STRIP) ================= */}
        <div className="bg-white rounded-3xl shadow p-4 mb-6 overflow-x-auto">
          <div className="flex gap-3">

            {["Live Music", "Food Fest", "Tech Meetup", "Beach Party"].map(
              (item) => (
                <div
                  key={item}
                  className="min-w-[120px] h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-sm font-semibold"
                >
                  {item}
                </div>
              )
            )}

          </div>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT SIDEBAR */}
          <div className="hidden lg:block lg:col-span-2 space-y-4">

            <div className="bg-white rounded-3xl p-4 shadow">

              <h2 className="font-semibold flex items-center gap-2 mb-4">
                <Flame className="text-orange-500" size={18} />
                Menu
              </h2>

              <div className="space-y-3 text-sm text-gray-600">

                <p className="hover:text-orange-500 cursor-pointer">
                  🎵 Music
                </p>
                <p className="hover:text-orange-500 cursor-pointer">
                  🍔 Food
                </p>
                <p className="hover:text-orange-500 cursor-pointer">
                  ⚽ Sports
                </p>
                <p className="hover:text-orange-500 cursor-pointer">
                  🎉 Festivals
                </p>
                <p className="hover:text-orange-500 cursor-pointer">
                  📍 Nearby
                </p>

                <div className="pt-3 border-t">
                  <p className="text-orange-500 font-medium cursor-pointer">
                    ➕ Create Event
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* CENTER FEED */}
          <div className="lg:col-span-7 space-y-6">

            {/* FILTER BAR */}
            <div className="bg-white rounded-3xl shadow p-3 flex gap-2 overflow-x-auto">

              {["All", "Live", "Upcoming", "Free", "Nearby"].map((f) => (
                <button
                  key={f}
                  className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-orange-100 hover:text-orange-600 whitespace-nowrap"
                >
                  {f}
                </button>
              ))}

            </div>

            {/* FACEBOOK STYLE EVENT POSTS */}
            <div className="space-y-6">

              {feedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
                >

                  {/* HEADER */}
                  <div className="flex items-center justify-between p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />

                      <div>
                        <h3 className="font-semibold text-sm">
                          {event.user}
                        </h3>
                        <p className="text-xs text-gray-500">
                          2 hours ago
                        </p>
                      </div>

                    </div>

                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      event.status === "LIVE"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}>
                      {event.status}
                    </span>

                  </div>

                  {/* IMAGE */}
                  <img
                    src={event.image}
                    className="w-full h-72 object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-4">

                    <h2 className="text-xl font-bold">
                      {event.title}
                    </h2>

                    <div className="flex gap-4 text-sm text-gray-500 mt-2">

                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {event.date}
                      </div>

                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location}
                      </div>

                    </div>

                    {/* SOCIAL STATS */}
                    <div className="flex gap-5 mt-4 text-sm">

                      <p className="text-red-500">
                        ❤️ {event.likes}
                      </p>

                      <p className="text-gray-600">
                        💬 {event.comments}
                      </p>

                      <p className="text-gray-600">
                        👥 {event.going} Going
                      </p>

                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-between mt-4 pt-3 border-t">

                      <div className="flex gap-5 text-gray-600">

                        <button className="flex items-center gap-1">
                          <Heart size={18} /> Like
                        </button>

                        <button className="flex items-center gap-1">
                          <MessageCircle size={18} /> Comment
                        </button>

                        <button className="flex items-center gap-1">
                          <Share2 size={18} /> Share
                        </button>

                        <button className="flex items-center gap-1">
                          <Bookmark size={18} /> Save
                        </button>

                      </div>

                      <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm">
                        More Info
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">

            {/* TRENDING */}
            <div className="bg-white rounded-3xl p-4 shadow">

              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <Flame className="text-red-500" size={18} />
                Trending
              </h2>

              <div className="space-y-3">

                {trendingEvents.map((e) => (
                  <div key={e.id} className="flex gap-3 items-center">

                    <img
                      src={e.image}
                      className="w-12 h-12 rounded-xl object-cover"
                    />

                    <div>
                      <p className="text-sm font-medium line-clamp-1">
                        {e.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {e.location}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-5">

              <h3 className="font-semibold">
                Create Your Event
              </h3>

              <p className="text-sm text-white/80 mt-2">
                Reach thousands of users instantly
              </p>

              <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded-xl text-sm font-semibold">
                Get Started
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}