import Hero from "@/components/Hero";
import WorldSection from "@/components/Homepage/world/WorldSection";
import TravelBlog from "@/components/Homepage/blog/TravelBlog";
import Experiences from "@/components/Homepage/experiences/Experiences";
import TravelPackages from "@/components/Homepage/awesomePackages/TravelPackages";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-gray-50 no-scrollbar">
      <Hero />
     <TravelPackages />
      <WorldSection/>
      <TravelBlog />
      <Experiences />

    </section>
  );
}