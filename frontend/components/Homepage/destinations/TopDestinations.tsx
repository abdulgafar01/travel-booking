"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import DestinationCard, {
  type Destination,
} from "./DestinationCard";
import Image from "next/image";

const destinations: Destination[] = [
  {
    id: 1,
    name: "Indonesia",
    description:
      "Escape to the serene landscapes of Bali, Indonesia.",
    image: "/images/destinations/indonesia.jpg",
  },
  {
    id: 2,
    name: "Barcelona",
    description:
      "Experience the vibrant energy of Barcelona, Spain.",
    image: "/images/destinations/barcelona.jpg",
  },
  {
    id: 3,
    name: "Machu Picchu",
    description:
      "Embark on an unforgettable journey through the mountains of Peru.",
    image: "/images/destinations/machu-picchu.jpg",
  },
  {
    id: 4,
    name: "Peru",
    description:
      "Explore the rich cultural heritage and stunning landscapes of Peru.",
    image: "/images/destinations/peru.jpg",
  },
  {
    id: 5,
    name: "Santorini",
    description:
      "Discover the beautiful islands and sunsets of Greece.",
    image: "/images/destinations/santorini.jpg",
  },
  {
    id: 6,
    name: "Dubai",
    description:
      "Experience the extraordinary beauty of Dubai.",
    image: "/images/destinations/dubai.jpg",
  },
];


export default function TopDestinations() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const amount = 200;

    carouselRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="destinations"
      className="
        relative
        overflow-hidden
        bg-[#102b27]
        py-[30px]
        text-white
        sm:py-[42px]
        md:py-[55px]
      "
    >
      <div
        className="mx-auto  flex  max-w-[1440px] flex-col gap-7 px-6  md:px-14 lg:flex-row
          lg:items-center md:justify-center lg:gap-0 lg:px-[6.5%]
        "
      >
        {/* ========================================
            LEFT CONTENT
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            shrink-0
            lg:w-[40%]
           /
          "
        >
          <h2
            className="
              max-w-[280px]
              text-[25px]
              font-bold
              leading-[0.95]
              tracking-[-0.8px]
              sm:text-[28px]
              md:text-[40px]
            "
          >
            Our Top
            <br />
            Destinations
          </h2>

          <p
            className="
              mt-4
              max-w-95
              text-[14px]
              leading-[1.45]
              text-white/80
              sm:text-[20px]
            "
          >
            Each destination offers a unique experience,
            inviting travelers to create lifelong memories
            in these extraordinary locations.
          </p>

          <motion.a
            href="/travel-packages"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-5
              flex h-11 w-43 items-center justify-center rounded-[4px]
              bg-white
              text-[20px]
              font-medium
              text-[#e9683a]
              shadow-sm
            "
          >
            Start Your Tour
          </motion.a>
        </motion.div>

        {/* ========================================
            RIGHT CAROUSEL
        ======================================== */}

        <div
          className="
            min-w-0
            flex-1
            lg:pt-0
          "
        >
          <div
            ref={carouselRef}
            className="flex gap-[8px] overflow-x-auto scroll-smooth pb-2
              scrollbar-none
              [&::-webkit-scrollbar]:hidden
              sm:gap-[10px]
            "
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <DestinationCard
                  destination={destination}
                />
              </motion.div>
            ))}
          </div>

          {/* ====================================
              CAROUSEL CONTROLS
          ==================================== */}

          <div
            className="
              mt-4 flex items-center justify-around pr-1 sm:mt-5"
          >
            <button
              type="button"
              aria-label="Previous destinations"
              onClick={() => scroll("left")}
              className="
                group cursor-pointer
                flex items-center gap-2
              "
            >
              <Image
                src="/icons/arrow-left.svg"
                alt="Arrow left"
                width={107}
                height={35}
                className="hover:w-40 transition "
              />
            </button>

            <button
              type="button"
              aria-label="Next destinations"
              onClick={() => scroll("right")}
              className="
                group cursor-pointer
                flex
                items-center
                gap-2
              "
            >
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow right"
                width={107}
                height={35}
                className="hover:w-40 transition "
              />

            </button>
          </div>
        </div>
      </div>
    </section>
  );
}