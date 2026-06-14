import HeroSection from "@/src/components/home/HeroSection";
import TrendingEvents from "@/src/components/home/TrendingEvents";
import MapSection from "@/src/components/home/MapSection";
import StatsSection from "@/src/components/home/StatsSection";
import CategoryGrid from "@/src/components/home/CategoryGrid"

export default function Home() {
  return (
    <main className="bg-gray-50">

      <HeroSection />

      <CategoryGrid />

      <TrendingEvents />

      <MapSection />

      <StatsSection />

    </main>
  );
}