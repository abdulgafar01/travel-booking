import TravelPackages from '@/components/Homepage/awesomePackages/TravelPackages'
import TravelBlog from '@/components/Homepage/blog/TravelBlog'
import Experiences from '@/components/Homepage/experiences/Experiences'
import Hero from '@/components/Hero'
import WorldSection from '@/components/Homepage/world/WorldSection'


const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 no-scrollbar">
      <Hero />
      <TravelPackages />
      <WorldSection/>
      <TravelBlog />
      <Experiences />

    </section>
  )
}

export default About